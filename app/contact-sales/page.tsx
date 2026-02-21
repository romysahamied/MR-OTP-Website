import dynamic from 'next/dynamic'
import type { Metadata } from 'next'

const Header = dynamic(() => import('@/components/Header'), { ssr: true })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true })
const Contact = dynamic(() => import('@/components/Contact'), { ssr: true })

export const metadata: Metadata = {
  title: 'Contact Sales | Mr-OTP',
  description: 'Get in touch with the Mr-OTP sales team. Request a quote or schedule a call to discuss your messaging needs.',
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
