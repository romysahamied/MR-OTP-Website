import type { Metadata, Viewport } from 'next'
import '../styles/globals.css'
import WhatsAppFloating from '@/components/WhatsAppFloating'


export const metadata: Metadata = {
  title: 'Mr-OTP',
  description: 'Enterprise SMS, WhatsApp Business, and omnichannel communication solutions. OTP SMS, Transactional SMS, Promotional SMS, and Bulk SMS services.',
  keywords: 'SMS API, WhatsApp Business, OTP SMS, Bulk SMS, Transactional SMS, Promotional SMS, Enterprise Communication, SMPP, REST API',
  authors: [{ name: 'Mr-OTP' }],
  openGraph: {
    title: 'Mr-OTP',
    description: 'Enterprise SMS, WhatsApp Business, and omnichannel communication solutions.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mr-OTP',
    description: 'OTP SMS & Omnichannel Communication Platform',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
          <WhatsAppFloating />
      </body>
    </html>
  )
}
