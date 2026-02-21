import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from './Rcs.module.css'

const Header = dynamic(() => import('@/components/Header'), { ssr: true })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true })
const JourneyCarousel = dynamic(() => import('@/components/JourneyCarousel'), { ssr: true })

export const metadata: Metadata = {
  title: 'RCS Business Messaging | Rich Communication Services | Mr-OTP',
  description: 'Rich, secure, and branded conversational experience with RCS. Drive engagement with rich media, carousels, and interactive messages. Next-generation business messaging.',
}

export default function RcsPage() {
  return (
    <main className={styles.wrapper}>
      <Header />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeadline}>
            Rich Communication for Your Business
          </h1>
          <p className={styles.heroSubtitle}>
            Rich, secure, and branded conversational experience for higher engagement and better results.
          </p>
          <Link href="/get-started?from=rcs" className={styles.ctaBtn}>
            Get Started
          </Link>
        </div>
      </section>

      <section className={styles.businessSection}>
        <div className={styles.businessGrid}>
          <div className={styles.businessContent}>
            <h2 className={styles.businessHeading}>RCS Business Messaging</h2>
            <p className={styles.businessText}>
              RCS brings the best from multiple channels for your brand. The immediacy and simplicity of SMS, combined with rich media and branding from email and chat apps. Messages land directly in the native messaging app on your customer&apos;s phone (Android and iOS). Increase conversions, engagement, and open rates with Mr-OTP.
            </p>
            <ul className={styles.businessList}>
              <li>Rich media: images, videos, and carousels</li>
              <li>Interactive buttons and quick replies</li>
              <li>Verified sender branding for trust</li>
              <li>Read receipts and typing indicators</li>
            </ul>
            <Link href="/contact-sales" className={styles.businessCta}>
              Contact Sales
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
          <div className={styles.rcsImageWrap}>
            <Image
              src="/RCS1.png"
              alt="RCS Business Messaging"
              width={560}
              height={560}
              className={styles.rcsImage}
              priority
            />
          </div>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          <div className={styles.statBox}>
            <p className={styles.statText}>
              Customers are <strong>35x more likely to read RCS messages</strong> than emails.
            </p>
          </div>
          <div className={styles.statDivider} aria-hidden />
          <div className={styles.statBox}>
            <p className={styles.statText}>
              <strong>72%</strong> are more likely to purchase online if they can ask questions in real-time.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.brandingSection}>
        <div className={styles.brandingGrid}>
          <div className={styles.brandingContent}>
            <h2 className={styles.brandingHeading}>Branding for Trust</h2>
            <p className={styles.brandingText}>
              Every RCS message displays your full brand name, logo, and company overview—so customers instantly recognize who&apos;s reaching out.
            </p>
            <p className={styles.brandingText}>
              A verified business badge confirms your identity, builds confidence, and encourages customers to engage with your messages.
            </p>
          </div>
          <div className={styles.brandingVisual}>
            <div className={styles.brandingImageWrap}>
              <Image
                src="/RCS2.png"
                alt="RCS verified branding example"
                width={480}
                height={480}
                className={styles.brandingImage}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.featuresSection}>
        <div className={styles.featuresGrid}>
          <div className={styles.featuresContent}>
            <div className={styles.featureBlock}>
              <h2 className={styles.featureHeading}>
                Rich Media for <span className={styles.featureHeadingAccent}>Engagement</span>
              </h2>
              <p className={styles.featureText}>
                Share images, videos, and GIFs with RCS. Use color and interactive elements to capture attention and drive clicks. Build carousels to showcase products, promotions, and offers—all within the native messaging experience.
              </p>
            </div>
            <div className={styles.featureBlock}>
              <h2 className={styles.featureHeading}>
                Easy <span className={styles.featureHeadingAccent}>Conversation</span>
              </h2>
              <p className={styles.featureText}>
                Suggested replies keep conversations simple. Add time-saving actions like links, maps, and calendar invites. Get real-time insights with read receipts and typing indicators.
              </p>
            </div>
          </div>
          <div className={styles.featuresVisual}>
            <div className={styles.featuresImageWrap}>
              <Image
                src="/RCS3.png"
                alt="Rich Media and Easy Conversation - RCS messaging with carousel"
                width={560}
                height={560}
                className={styles.featuresImage}
              />
            </div>
          </div>
        </div>
      </section>

      <JourneyCarousel />

      <section className={styles.resourcesSection}>
        <h2 className={styles.resourcesHeading}>Resources</h2>
        <div className={styles.resourcesGrid}>
          <a href="/get-started?from=rcs" className={styles.resourceCard}>
            <div className={styles.resourceIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="14 2 14 8 20 8" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="16" y1="13" x2="8" y2="13" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="16" y1="17" x2="8" y2="17" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className={styles.resourceTitle}>Documentation</h3>
            <p className={styles.resourceText}>API guides and integration docs</p>
          </a>
          <a href="/get-started?from=rcs" className={styles.resourceCard}>
            <div className={styles.resourceIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className={styles.resourceTitle}>Get Started</h3>
            <p className={styles.resourceText}>Start building with RCS today</p>
          </a>
          <a href="/get-started?from=rcs" className={styles.resourceCard}>
            <div className={styles.resourceIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className={styles.resourceTitle}>Support</h3>
            <p className={styles.resourceText}>Talk to our team</p>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
