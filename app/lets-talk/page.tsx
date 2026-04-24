import dynamic from 'next/dynamic'
import type { Metadata } from 'next'

const Header = dynamic(() => import('@/components/Header'), { ssr: true })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true })
const Contact = dynamic(() => import('@/components/Contact'), { ssr: true })

export const metadata: Metadata = {
  title: "Let's talk | Mr OTP",
  description:
    'Request a quote or get in touch with Mr OTP. Same contact form as our homepage — we will get back to you promptly.',
}

export default function LetsTalkPage() {
  return (
    <main>
      <Header />
      <Contact />
      <Footer />
    </main>
  )
}
