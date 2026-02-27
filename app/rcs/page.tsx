import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from './Rcs.module.css'

const Header = dynamic(() => import('@/components/Header'), { ssr: true })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true })
const RCSCarousel = dynamic(() => import('@/components/RCSCarousel'), { ssr: true })

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
            Powerful Conversations That Strengthen Your Brand
          </h1>
          <p className={styles.heroSubtitle}>
            Create immersive, secure messaging experiences designed to boost interaction and improve outcomes.
          </p>
          <Link href="/get-started?from=rcs" className={styles.ctaBtn}>
            Get Started
          </Link>
        </div>
      </section>

      <section className={styles.businessSection}>
        <div className={styles.businessGrid}>
          <div className={styles.businessContent}>
            <h2 className={styles.businessHeading}>RCS Business Messaging Infrastructure</h2>
            <p className={styles.businessText}>
              RCS blends the strengths of traditional messaging with modern interactive features to create a powerful brand experience. It combines the speed and direct reach of SMS with the visual richness and personalization typically found in email and messaging platforms. Conversations appear seamlessly within your customer’s default messaging app on both Android and iOS devices. With Mr-OTP, you can drive stronger engagement, higher response rates, and improved conversion performance.
            </p>
            <ul className={styles.businessList}>
              <li>Multimedia payload support including high-resolution images, video, and carousel modules</li>
              <li>Action-driven UI elements such as embedded buttons and structured quick replies</li>
              <li>Verified sender authentication with branded identity displayt</li>
              <li>Real-time delivery status, read confirmations, and typing indicators</li>
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
              <strong> 35x </strong> Higher Visibility Than Email.
            </p>
          </div>
          <div className={styles.statDivider} aria-hidden />
          <div className={styles.statBox}>
            <p className={styles.statText}>
              <strong>72%</strong> Higher Purchase Intent With Real-Time Conversations.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.brandingSection}>
        <div className={styles.brandingGrid}>
          <div className={styles.brandingContent}>
            <h2 className={styles.brandingHeading}>Trust That Converts</h2>
            <p className={styles.brandingText}>
              Customers engage more when they know who’s contacting them. RCS displays your verified brand identity directly within the chat interface—eliminating uncertainty.
            </p>
            <p className={styles.brandingText}>
              Authentication badges increase open rates, accelerate response time, and remove friction from the buying journey—turning conversations into measurable revenue.
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
                Advanced Rich Media Messaging Capabilities
              </h2>
              <p className={styles.featureText}>
                Deploy high-resolution images, video assets, and animated media directly within RCS conversations. Leverage structured message templates, branded color elements, and interactive UI components to enhance engagement.
              </p>
              <p className={styles.featureText}>
                Configure multi-card carousels to present product catalogs, promotional campaigns, and dynamic offers—delivered seamlessly within the native messaging environment.
              </p>
            </div>
            <div className={styles.featureBlock}>
              <h2 className={styles.featureHeading}>
              Conversations Made Effortless
              </h2>
              <p className={styles.featureText}>
                Suggested replies eliminate guesswork and make responding effortless for customers.
              </p>
              <p className={styles.featureText}>
                Add one-tap actions like directions, website visits, and calendar bookings to remove friction from the decision-making process.
              </p>
              <p className={styles.featureText}>
                Real-time read receipts and typing indicators help your team engage at the perfect moment—shortening sales cycles and increasing close rates.
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

      <RCSCarousel />

      <Footer />
    </main>
  )
}
