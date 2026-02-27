import dynamic from 'next/dynamic'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from './OtpSms.module.css'

const Header = dynamic(() => import('@/components/Header'), { ssr: true })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true })

export const metadata: Metadata = {
  title: 'OTP SMS | One-Time Password Verification | Mr-OTP',
  description: 'Mr-OTP delivers secure, reliable OTP SMS for two-factor authentication, login verification, and account security. Fast delivery, global reach, enterprise-grade API.',
}

export default function OtpSmsPage() {
  return (
    <main className={styles.wrapper}>
      <Header />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Single-use codes, delivered in seconds
          </div>
          <h1 className={styles.heading}>
            Your verification layer,{' '}
            <span className={styles.headingHighlight}>direct to the device</span>
          </h1>
          <p className={styles.intro}>
            Single-use numeric codes sent straight to your users&apos; handsets. No app, no email—just a short message that arrives in under three seconds. Built for sign-in flows, payment confirmations, and identity checks.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>&lt;3s</span>
              <span className={styles.statLabel}>Typical delivery</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>99.9%</span>
              <span className={styles.statLabel}>Uptime SLA</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>190+</span>
              <span className={styles.statLabel}>Countries</span>
            </div>
          </div>
          <Link href="/get-started?from=otp" className={styles.heroCta}>
            Get Started
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Why single-use codes matter */}
      <section className={styles.whySection}>
        <span className={styles.sectionTag}>Why it matters</span>
        <h2 className={styles.sectionHeading}>Single-use codes that reach users in seconds</h2>
        <p className={styles.sectionIntro}>
          When someone logs in, confirms a payment, or resets a password, they need a code—fast. SMS reaches every phone, no data plan required.
        </p>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span>Codes land in under three seconds</span>
          </div>
          <div className={styles.benefitCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span>Works on any mobile handset</span>
          </div>
          <div className={styles.benefitCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span>No app or internet needed</span>
          </div>
          <div className={styles.benefitCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span>Configurable expiry windows</span>
          </div>
          <div className={styles.benefitCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span>REST API and SMPP ready</span>
          </div>
          <div className={styles.benefitCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span>Live delivery status and webhooks</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={styles.whySection}>
        <span className={styles.sectionTag}>Platform</span>
        <h2 className={styles.sectionHeading}>Everything you need for verification flows</h2>
        <p className={styles.sectionIntro}>
          A robust API, global routing, and real-time visibility—so your sign-in and checkout flows stay smooth.
        </p>
        <div className={styles.cardsGrid}>
          <div className={styles.featureCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconOrange}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Sub-second routing</h3>
            <p>Messages are routed through the fastest path. Priority lanes and redundant carriers keep latency minimal.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconBlue}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Carrier-grade reliability</h3>
            <p>Tier-1 partnerships and failover paths. Built for teams that cannot afford dropped verification attempts.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconPurple}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="8 6 2 12 8 18" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Simple integration</h3>
            <p>RESTful endpoints and SDKs for common stacks. Clear docs and sample payloads so you ship faster.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 20V10M12 20V4M6 20v-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Delivery visibility</h3>
            <p>Track each code from send to read. Dashboards and webhooks for debugging and analytics.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconYellow}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Wide geographic reach</h3>
            <p>Local sender IDs and routing in 190+ countries. Users see familiar numbers, not random originators.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconSlate}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Compliance-ready</h3>
            <p>Designed for regulated sectors. Data handling and retention aligned with common audit requirements.</p>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className={styles.whySection}>
        <span className={styles.sectionTag}>Use cases</span>
        <h2 className={styles.sectionHeading}>Where single-use codes shine</h2>
        <p className={styles.sectionIntro}>
          From sign-in to checkout, password resets to sensitive actions—codes over SMS keep flows secure and friction low.
        </p>
        <div className={styles.useCasesGrid}>
          <div className={styles.useCaseCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconBlue}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Sign-in and access</h3>
            <p>Double-check identity at login. A code sent to the registered number adds a second layer before granting access.</p>
            <div className={styles.exampleTags}>
              <span>Login</span>
              <span>Admin panel</span>
              <span>VPN access</span>
            </div>
          </div>
          <div className={styles.useCaseCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="1" y="4" width="22" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="1" y1="10" x2="23" y2="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Payment and transfers</h3>
            <p>Confirm high-value moves before they finalize. Banks and fintechs use codes to validate transfers and card changes.</p>
            <div className={styles.exampleTags}>
              <span>Transfer</span>
              <span>Card payment</span>
              <span>Wallet top-up</span>
            </div>
          </div>
          <div className={styles.useCaseCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconOrange}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Account recovery</h3>
            <p>When users forget credentials or change contact details, a code proves they control the linked number.</p>
            <div className={styles.exampleTags}>
              <span>Password reset</span>
              <span>Email change</span>
              <span>Recovery flow</span>
            </div>
          </div>
          <div className={styles.useCaseCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconPurple}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 10a4 4 0 0 1-8 0" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Checkout and orders</h3>
            <p>Validate the buyer before completing a purchase. E‑commerce and marketplaces use codes at final step.</p>
            <div className={styles.exampleTags}>
              <span>Order confirm</span>
              <span>Guest checkout</span>
              <span>Account linking</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <h2 className={styles.ctaHeading}>Ready to add verification to your flow?</h2>
          <p className={styles.ctaText}>
            Connect your app to our API and start sending single-use codes in minutes.
          </p>
          <Link href="/get-started?from=otp" className={styles.ctaButton}>
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
