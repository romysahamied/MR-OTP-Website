import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import type SMTPTransport from 'nodemailer/lib/smtp-transport'
import { promises as dns } from 'node:dns'
import { Resend } from 'resend'

export const maxDuration = 60

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  SMTP_FAMILY,
  SMTP_TLS_REJECT_UNAUTHORIZED,
  CONTACT_RECIPIENT_EMAIL,
  MAIL_FROM,
  RESEND_FROM,
} = process.env

/** Trim so a blank / whitespace-only Vercel value does not skip SMTP. */
const RESEND_API_KEY = process.env.RESEND_API_KEY?.trim() || undefined

const recipient = CONTACT_RECIPIENT_EMAIL || 'info@mr-otp.com'

function stripEnvQuotes(raw: string | undefined): string | undefined {
  if (!raw) return undefined
  let s = raw.trim()
  if (
    (s.startsWith('"') && s.endsWith('"')) ||
    (s.startsWith("'") && s.endsWith("'"))
  ) {
    s = s.slice(1, -1).trim()
  }
  return s || undefined
}

function getFromAddress(): string {
  const r = stripEnvQuotes(RESEND_FROM)
  if (r) return r
  const m = stripEnvQuotes(MAIL_FROM)
  if (m) return m
  return 'MR OTP Website <onboarding@resend.dev>'
}

type MailPayload = { text: string; name: string; email: string }

async function sendViaSmtp(payload: MailPayload, logDebug: boolean): Promise<void> {
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    throw new Error('SMTP not configured')
  }
  const smtpHost = SMTP_HOST
  const smtpUser = SMTP_USER
  const smtpPass = SMTP_PASS
  const family = SMTP_FAMILY ? Number(SMTP_FAMILY) : 4
  const hostsToTry: string[] = [smtpHost]
  if (family === 4) {
    try {
      const { address } = await dns.lookup(smtpHost, { family: 4 })
      if (address && !hostsToTry.includes(address)) hostsToTry.push(address)
    } catch {
      /* hostname only */
    }
  }
  const rawPort = SMTP_PORT ? Number(SMTP_PORT) : 465
  const primaryPort = Number.isFinite(rawPort) && rawPort > 0 ? rawPort : 465
  const portsToTry: { port: number; secure: boolean }[] = [
    { port: primaryPort, secure: primaryPort === 465 },
    ...(primaryPort === 465 ? [{ port: 587, secure: false } as const] : []),
  ]

  let lastError: unknown
  for (const connectHost of hostsToTry) {
    const baseOptions = {
      host: connectHost,
      tls: {
        servername: smtpHost,
        rejectUnauthorized: SMTP_TLS_REJECT_UNAUTHORIZED !== 'false',
      },
      auth: { user: smtpUser, pass: smtpPass },
      connectionTimeout: 15_000,
      greetingTimeout: 15_000,
    }
    for (const { port, secure } of portsToTry) {
      try {
        const transportOptions: SMTPTransport.Options = {
          ...baseOptions,
          port,
          secure,
        }
        const transporter = nodemailer.createTransport(transportOptions)
        if (logDebug) {
          console.log('[contact] SMTP', { connectHost, port, secure, user: smtpUser, recipient })
        }
        const fromAddress =
          stripEnvQuotes(MAIL_FROM) || `"MR-OTP Website" <${smtpUser}>`
        await transporter.sendMail({
          from: fromAddress,
          to: recipient,
          replyTo: payload.email,
          subject: `New contact from ${payload.name}`,
          text: payload.text,
        })
        return
      } catch (err) {
        lastError = err
        if (logDebug) console.warn('[contact] SMTP attempt failed', { connectHost, port, secure }, err)
      }
    }
  }
  if (lastError instanceof Error) throw lastError
  throw new Error(
    lastError != null
      ? String(lastError)
      : 'Could not send email via SMTP (all attempts failed).'
  )
}

export async function POST(req: NextRequest) {
  const logDebug = process.env.CONTACT_DEBUG === 'true'
  try {
    const body = await req.json()
    const name = typeof body?.name === 'string' ? body.name.trim() : ''
    const email = typeof body?.email === 'string' ? body.email.trim() : ''
    const message = typeof body?.message === 'string' ? body.message.trim() : ''

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    const text = [`Name: ${name}`, `Email: ${email}`, '', 'Message:', message].join('\n')
    const payload: MailPayload = { text, name, email }

    const smtpConfigured = Boolean(SMTP_HOST && SMTP_USER && SMTP_PASS)

    if (RESEND_API_KEY) {
      try {
        const resend = new Resend(RESEND_API_KEY)
        const { data, error } = await resend.emails.send({
          from: getFromAddress(),
          to: [recipient],
          replyTo: email,
          subject: `New contact from ${name}`,
          text,
        })
        if (!error) {
          return NextResponse.json({ success: true, id: data?.id })
        }
        console.error('Resend error:', error)
        if (smtpConfigured) {
          console.warn('[contact] Falling back to SMTP after Resend failure')
          await sendViaSmtp(payload, logDebug)
          return NextResponse.json({ success: true })
        }
        return NextResponse.json(
          { error: error.message || 'Failed to send email' },
          { status: 500 }
        )
      } catch (resendErr) {
        console.error('Resend threw:', resendErr)
        if (smtpConfigured) {
          console.warn('[contact] Falling back to SMTP after Resend exception')
          await sendViaSmtp(payload, logDebug)
          return NextResponse.json({ success: true })
        }
        throw resendErr
      }
    }

    if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
      try {
        await sendViaSmtp(payload, logDebug)
        return NextResponse.json({ success: true })
      } catch (err) {
        throw err
      }
    }

    return NextResponse.json(
      {
        error:
          'Email not configured. Set RESEND_API_KEY (recommended) or SMTP_HOST, SMTP_USER, SMTP_PASS in .env.local. See .env.example.',
      },
      { status: 503 }
    )
  } catch (err) {
    console.error('Contact API error:', err)
    const exposeDebug = process.env.CONTACT_DEBUG === 'true'
    const isDev = process.env.NODE_ENV === 'development'
    const detail =
      err instanceof Error ? err.message : typeof err === 'string' ? err : String(err)
    const safePublic =
      'Failed to send message. Please try again or email us at info@mr-otp.com'
    return NextResponse.json(
      {
        error: exposeDebug || isDev ? detail : safePublic,
        debug: exposeDebug
          ? err instanceof Error
            ? { message: err.message, name: err.name, stack: err.stack }
            : { value: String(err) }
          : isDev
            ? { message: detail }
            : undefined,
      },
      { status: 500 }
    )
  }
}
