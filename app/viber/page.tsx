import dynamic from 'next/dynamic'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from './Viber.module.css'

const Header = dynamic(() => import('@/components/Header'), { ssr: true })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true })

export const metadata: Metadata = {
  title: 'Viber Business | Messaging for Your Brand | Mr-OTP',
  description: 'The ultimate tool for business communication. Establish direct brand-to-consumer connections with Viber Business. Engage, support, and transact on one platform.',
}

export default function ViberPage() {
  return (
    <main className={styles.wrapper}>
      <Header />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeadline}>
            The Ultimate Tool for Business Communication
          </h1>
          <p className={styles.heroSubheading}>
            Establish direct brand-to-consumer connections
          </p>
          <p className={styles.heroSubtitle}>
            One platform that engages, supports, and transacts—achieving awareness, loyalty, and conversion with one-way and two-way conversations, plus automated bots.
          </p>
          <Link href="/get-started?from=viber" className={styles.ctaBtn}>
            Get Started
          </Link>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.contentCard}>
          <h2 className={styles.contentHeading}>Why Viber Business?</h2>
          <ul className={styles.contentList}>
            <li>Reach customers where they already chat—Viber has millions of active users worldwide</li>
            <li>Rich messaging: images, videos, buttons, and carousels for engaging campaigns</li>
            <li>Two-way conversations and chatbots for support and sales</li>
            <li>Verified business accounts to build trust with your audience</li>
          </ul>
          <Link href="/get-started?from=viber" className={styles.ctaLink}>
            Get Started
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
