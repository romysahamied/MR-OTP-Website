import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import type SMTPTransport from 'nodemailer/lib/smtp-transport'
import { promises as dns } from 'node:dns'
import { Resend } from 'resend'

const {
  RESEND_API_KEY,
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  SMTP_SECURE,
  SMTP_FAMILY,
  SMTP_TLS_REJECT_UNAUTHORIZED,
  CONTACT_RECIPIENT_EMAIL,
  MAIL_FROM,
  RESEND_FROM,
} = process.env

const recipient = CONTACT_RECIPIENT_EMAIL || 'info@mr-otp.com'

function getFromAddress(): string {
  if (RESEND_FROM) return RESEND_FROM
  if (MAIL_FROM) return MAIL_FROM
  return 'MR OTP Website <onboarding@resend.dev>'
}

export async function POST(req: NextRequest) {
  try {
    const debug =
      process.env.NODE_ENV !== 'production' &&
      process.env.CONTACT_DEBUG === 'true'
    const body = await req.json()
    const name = typeof body?.name === 'string' ? body.name.trim() : ''
    const email = typeof body?.email === 'string' ? body.email.trim() : ''
    const message = typeof body?.message === 'string' ? body.message.trim() : ''

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    const text = [`Name: ${name}`, `Email: ${email}`, '', 'Message:', message].join('\n')

    // Prefer Resend (single API key, production-friendly)
    if (RESEND_API_KEY) {
      const resend = new Resend(RESEND_API_KEY)
      const { data, error } = await resend.emails.send({
        from: getFromAddress(),
        to: [recipient],
        replyTo: email,
        subject: `New contact from ${name}`,
        text,
      })
      if (error) {
        console.error('Resend error:', error)
        return NextResponse.json(
          { error: error.message || 'Failed to send email' },
          { status: 500 }
        )
      }
      return NextResponse.json({ success: true, id: data?.id })
    }

    // Fallback: SMTP via nodemailer (e.g. Hostinger / Titan)
    if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
      const family = SMTP_FAMILY ? Number(SMTP_FAMILY) : 4
      // Hostinger has two services: Hostinger Email (smtp.hostinger.com) and Titan (smtp.titan.email)
      // If webmail is at hostinger.titan.email, use smtp.titan.email
      const hostsToTry = [
        SMTP_HOST,
        ...(SMTP_HOST === 'smtp.hostinger.com' ? ['smtp.titan.email'] : []),
        ...(SMTP_HOST === 'smtp.titan.email' ? ['smtp.hostinger.com'] : []),
      ]
      const primaryPort = SMTP_PORT ? Number(SMTP_PORT) : 465
      const portsToTry: { port: number; secure: boolean }[] = [
        { port: primaryPort, secure: primaryPort === 465 },
        ...(primaryPort === 465 ? [{ port: 587, secure: false }] : []),
      ]
      let lastError: unknown
      for (const host of hostsToTry) {
        let resolvedHost = host
        if (family === 4) {
          try {
            const lookup = await dns.lookup(host, { family: 4 })
            resolvedHost = lookup.address
          } catch {
            resolvedHost = host
          }
        }
        const baseOptions = {
          host: resolvedHost,
          tls: {
            servername: host,
            rejectUnauthorized: SMTP_TLS_REJECT_UNAUTHORIZED !== 'false',
          },
          auth: { user: SMTP_USER, pass: SMTP_PASS },
        }
        for (const { port, secure } of portsToTry) {
          try {
            const transportOptions: SMTPTransport.Options = {
              ...baseOptions,
              port,
              secure,
            }
            const transporter = nodemailer.createTransport(transportOptions)
            if (debug) {
              console.log('[contact] SMTP config', {
                host,
                resolvedHost,
                port,
                secure,
                user: SMTP_USER,
                recipient,
              })
            }
            const fromAddress = MAIL_FROM || `"MR-OTP Website" <${SMTP_USER}>`
            await transporter.sendMail({
              from: fromAddress,
              to: recipient,
              replyTo: email,
              subject: `New contact from ${name}`,
              text,
            })
            return NextResponse.json({ success: true })
          } catch (err) {
            lastError = err
            if (debug) console.warn('[contact] SMTP attempt failed', { host, port, secure }, err)
          }
        }
      }
      throw lastError
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
    const debug =
      process.env.NODE_ENV !== 'production' &&
      process.env.CONTACT_DEBUG === 'true'
    return NextResponse.json(
      {
        error: 'Failed to send message. Please try again or email us at info@mr-otp.com',
        debug: debug
          ? err instanceof Error
            ? { message: err.message, name: err.name, stack: err.stack }
            : { value: String(err) }
          : undefined,
      },
      { status: 500 }
    )
  }
}
