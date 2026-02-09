# Mr-OTP Website

Static, SEO-friendly business website for Mr-OTP - OTP SMS and omnichannel communication platform.

## Getting Started

Install dependencies:
```bash
npm install
```

Run development server:
```bash
npm run dev
```

Build static site:
```bash
npm run build
```

The static site will be exported to the `out` directory.

## Design System

- **Background**: Black (#000000)
- **Text**: White (#FFFFFF)
- **Accent/Hover**: Red (#FF0000)

## Features

- Fully responsive (Desktop, Laptop, Tablet, Mobile)
- SEO optimized
- Static site generation
- Fast load times
- Accessible navigation

## Contact form (production)

The contact form sends email via an API route. Configure one of these in `.env.local` (copy from `.env.example`):

- **Resend** (recommended): set `RESEND_API_KEY` and `CONTACT_RECIPIENT_EMAIL`. Get a key at [resend.com/api-keys](https://resend.com/api-keys).
- **SMTP**: set `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`, and optionally `SMTP_PORT`, `SMTP_SECURE`, `CONTACT_RECIPIENT_EMAIL`, `MAIL_FROM`.

Without either, the form will show a clear “Email not configured” message and direct users to email you directly.

## Deployment

Build and run in production:

```bash
npm run build
npm run start
```

Deploy the built app to Vercel, Netlify, or any Node host. Set the same environment variables in your hosting dashboard. The `out` directory is only used if you export a static site.