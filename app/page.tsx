import dynamic from 'next/dynamic'

// Route: / (home)
// Hero loads first (above the fold)
const Header = dynamic(() => import('@/components/Header'), { ssr: true })
const Hero3D = dynamic(() => import('@/components/Hero3D'), { ssr: true })

// Below-the-fold sections: lazy-loaded for faster initial load
const Welcome = dynamic(() => import('@/components/Welcome'), { ssr: true })
const BrandScroll = dynamic(() => import('@/components/BrandScroll'), { ssr: true })
const Services = dynamic(() => import('@/components/Services'), { ssr: true })
const Integrations = dynamic(() => import('@/components/Integrations'), { ssr: true })
const Blog = dynamic(() => import('@/components/Blog'), { ssr: true })
const FAQ = dynamic(() => import('@/components/FAQ'), { ssr: true })
const Contact = dynamic(() => import('@/components/Contact'), { ssr: true })
const Channels = dynamic(() => import('@/components/Channels'), { ssr: true })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true })

export default function Home() {
  return (
    <main>
      <Header />
      <Hero3D />
      <Welcome />
      <BrandScroll />
      <Services />
      <Integrations />
      <Blog />
      <FAQ />
      <Contact />
      <Channels />
      <Footer />
    </main>
  )
}
