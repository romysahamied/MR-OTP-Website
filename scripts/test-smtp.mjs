/**
 * SMTP smoke test: node --env-file=.env.local scripts/test-smtp.mjs
 * Logs only success or error message (no secrets).
 */
import nodemailer from 'nodemailer'
import { promises as dns } from 'node:dns'

const host = process.env.SMTP_HOST
const user = process.env.SMTP_USER
const pass = process.env.SMTP_PASS
const port = Number(process.env.SMTP_PORT || 465)
const recipient = process.env.CONTACT_RECIPIENT_EMAIL || 'info@mr-otp.com'
const mailFrom =
  process.env.MAIL_FROM?.replace(/^["']|["']$/g, '').trim() ||
  `"Mr OTP Website" <${user}>`
const rejectUnauthorized = process.env.SMTP_TLS_REJECT_UNAUTHORIZED !== 'false'
const family = process.env.SMTP_FAMILY ? Number(process.env.SMTP_FAMILY) : 4

if (!host || !user || !pass) {
  console.error('Missing SMTP_HOST / SMTP_USER / SMTP_PASS')
  process.exit(1)
}

let resolvedHost = host
if (family === 4) {
  try {
    const r = await dns.lookup(host, { family: 4 })
    resolvedHost = r.address
    console.log('DNS A:', host, '->', resolvedHost)
  } catch (e) {
    console.log('DNS lookup failed, using hostname:', e.message)
  }
}

async function trySend(label, opts) {
  const t = nodemailer.createTransport(opts)
  await t.sendMail({
    from: mailFrom,
    to: recipient,
    subject: '[SMTP test] Mr OTP contact check',
    text: 'Ignore this message — SMTP connectivity test from scripts/test-smtp.mjs',
  })
  console.log('OK:', label)
}

const baseTls = { servername: host, rejectUnauthorized }

try {
  await trySend(`465 secure=true, tls.rejectUnauthorized=${rejectUnauthorized}`, {
    host: resolvedHost,
    port: 465,
    secure: true,
    auth: { user, pass },
    tls: baseTls,
    connectionTimeout: 20_000,
  })
} catch (e1) {
  console.error('465 failed:', e1.message)
  try {
    await trySend('587 secure=false STARTTLS', {
      host: resolvedHost,
      port: 587,
      secure: false,
      auth: { user, pass },
      tls: baseTls,
      connectionTimeout: 20_000,
    })
  } catch (e2) {
    console.error('587 failed:', e2.message)
    if (rejectUnauthorized) {
      console.log('Retrying 465 with SMTP_TLS_REJECT_UNAUTHORIZED=false ...')
      try {
        await trySend('465 + tls.rejectUnauthorized=false', {
          host: resolvedHost,
          port: 465,
          secure: true,
          auth: { user, pass },
          tls: { servername: host, rejectUnauthorized: false },
          connectionTimeout: 20_000,
        })
      } catch (e3) {
        console.error('465 relaxed TLS failed:', e3.message)
        process.exit(1)
      }
    } else {
      process.exit(1)
    }
  }
}
