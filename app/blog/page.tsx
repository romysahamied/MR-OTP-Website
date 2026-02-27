import dynamic from 'next/dynamic'
import type { Metadata } from 'next'

const Header = dynamic(() => import('@/components/Header'), { ssr: true })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true })
const Blog = dynamic(() => import('@/components/Blog'), { ssr: true })

export const metadata: Metadata = {
  title: 'Blog | Mr-OTP',
  description: 'Latest insights on OTP SMS, WhatsApp Business, messaging APIs, and enterprise communication best practices.',
}

export default function BlogPage() {
  return (
    <main>
      <Header />
      <Blog />
      <Footer />
    </main>
  )
}
