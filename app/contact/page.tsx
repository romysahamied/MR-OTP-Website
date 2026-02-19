import dynamic from 'next/dynamic'
import type { Metadata } from 'next'

const Header = dynamic(() => import('@/components/Header'), { ssr: true })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true })
const ContactPageContent = dynamic(() => import('@/components/ContactPage'), { ssr: true })

export const metadata: Metadata = {
  title: 'Contact Us | Mr-OTP',
  description: 'Contact Mr-OTP for sales inquiries, support, or general questions. Get in touch with our team.',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactPageContent />
      <Footer />
    </>
  )
}
