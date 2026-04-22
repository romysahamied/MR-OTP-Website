import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import shellStyles from './BulkSmsZambiaShell.module.css'

export const metadata: Metadata = {
  title: 'Bulk SMS Zambia | Mr-OTP',
  description:
    'Enterprise bulk SMS for Zambia — high delivery rates, operator-aware routing, and developer-friendly APIs.',
}

export default function BulkSmsZambiaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={shellStyles.lightSiteRoot}>
      <Header />
      <main className={shellStyles.mainLight}>{children}</main>
      <Footer />
    </div>
  )
}
