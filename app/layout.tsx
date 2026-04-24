import type { Metadata, Viewport } from 'next'
import '../styles/globals.css'
import WhatsAppFloating from '@/components/WhatsAppFloating'


export const metadata: Metadata = {
  metadataBase: new URL('https://mr-otp.com'),
  title: 'Mr OTP',
  description: 'Enterprise SMS, WhatsApp Business, and omnichannel communication solutions. OTP SMS, Transactional SMS, Promotional SMS, and Bulk SMS services.',
  keywords: 'SMS API, WhatsApp Business, OTP SMS, Bulk SMS, Transactional SMS, Promotional SMS, Enterprise Communication, SMPP, REST API',
  authors: [{ name: 'Mr OTP' }],
  icons: {
    icon: '/logo_mrotp.png',
    shortcut: '/logo_mrotp.png',
    apple: '/logo_mrotp.png',
  },
  openGraph: {
    title: 'Mr OTP',
    description: 'Enterprise SMS, WhatsApp Business, and omnichannel communication solutions.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mr OTP - Enterprise SMS, WhatsApp Business & Omnichannel Communication',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mr OTP',
    description: 'OTP SMS & Omnichannel Communication Platform',
    images: ['/og-image.png'],
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
