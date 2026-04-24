import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Contact Sales | Mr OTP',
  description:
    'Get in touch with the Mr OTP sales team. Request a quote or schedule a call to discuss your messaging needs.',
}

export default function ContactSalesPage() {
  return (
    <>
      <Header />
      <Contact />
      <Footer />
    </>
  )
}
