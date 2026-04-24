import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AboutPage from '@/components/AboutPage'

export const metadata: Metadata = {
  title: 'About Us | Mr OTP',
  description:
    'Learn about Mr OTP — enterprise OTP SMS, transactional and bulk messaging, global routing, and teams across UAE, UK, and Zambia.',
  openGraph: {
    title: 'About Us | Mr OTP',
    description:
      'Enterprise SMS and omnichannel messaging: our mission, values, and how we connect applications to mobile networks worldwide.',
  },
}

export default function About() {
  return (
    <>
      <Header />
      <AboutPage />
      <Footer />
    </>
  )
}
