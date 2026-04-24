import dynamic from 'next/dynamic'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from './OtpSms.module.css'

const Header = dynamic(() => import('@/components/Header'), { ssr: true })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true })

export const metadata: Metadata = {
  title: 'OTP SMS | One-Time Password Verification | Mr OTP',
  description: 'Mr OTP delivers secure, reliable OTP SMS for two-factor authentication, login verification, and account security. Fast delivery, global reach, enterprise-grade API.',
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
            Fast & Secure One-Time Codes
          </div>
          <h1 className={styles.heading}>
            Instant Authentication,{' '}
            <span className={styles.headingHighlight}> Delivered to Every Phone,</span>
          </h1>
          <p className={styles.intro}>
            Time-critical authentication flows require minimal delay and maximum reach. SMS-based one-time passcodes are delivered directly to the user’s mobile number, independent of data connectivity or device type. Ideal for login authentication, transaction authorization, and credential recovery with broad global compatibility.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>&lt;3s</span>
              <span className={styles.statLabel}>Delivery</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>99.9%</span>
              <span className={styles.statLabel}>Uptime Commitment</span>
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
        <h2 className={styles.sectionHeading}>Instant One-Time Passcodes</h2>
        <p className={styles.sectionIntro}>
          Temporary verification codes delivered within seconds—because authentication can’t wait. Whether users are signing in, authorizing a transaction, or recovering access, SMS ensures the code reaches virtually any mobile device, no internet connection required.
        </p>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span>Delivered in Less Than 3 Seconds</span>
          </div>
          <div className={styles.benefitCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span>Operates on Any Cellular Phone</span>
          </div>
          <div className={styles.benefitCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span>Zero Installation, Zero Connectivity Needed</span>
          </div>
          <div className={styles.benefitCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span>Defined Lifespan for Each Code</span>
          </div>
          <div className={styles.benefitCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span>Supports REST APIs and SMPP Connectivity</span>
          </div>
          <div className={styles.benefitCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span>Real-Time Delivery Tracking with Webhook Events</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={styles.whySection}>
        <span className={styles.sectionTag}>Platform</span>
        <h2 className={styles.sectionHeading}>Complete Infrastructure for Secure Authentication</h2>
        <p className={styles.sectionIntro}>
          Powerful APIs, intelligent global message routing, and instant delivery insights—everything required to keep your login, verification, and checkout experiences fast and uninterrupted.
        </p>
        <div className={styles.cardsGrid}>
          <div className={styles.featureCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconOrange}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Ultra-Low-Latency Routing</h3>
            <p>Each message is automatically directed through the optimal network path for maximum speed. With priority channels and backup carrier routes in place, delays are kept to an absolute minimum.
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconBlue}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Operator-Level Infrastructure Resilience</h3>
            <p>Direct Tier-1 carrier interconnects combined with automatic failover routing ensure high availability across regions. Engineered for mission-critical authentication flows where delivery failure is not an option.
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconPurple}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="8 6 2 12 8 18" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Developer-Friendly Implementation</h3>
            <p>Standards-based REST endpoints and SDK support for popular languages and frameworks. Comprehensive documentation, example requests, and structured payload references help reduce integration time and accelerate deployment cycles.
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 20V10M12 20V4M6 20v-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>End-to-End Delivery Observability</h3>
            <p>Monitor every verification message across its lifecycle—from submission to final status. Real-time dashboards and webhook callbacks provide granular event data for troubleshooting, auditing, and performance analytics.
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconYellow}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Extensive Global Coverage</h3>
            <p>Localized sender IDs and in-country routing across 190+ markets. Messages are delivered using regionally recognized originators to improve trust, recognition, and delivery performance.
            </p>
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
        <h2 className={styles.sectionHeading}>Single-use verification codes power mission-critical interactions</h2>
        <p className={styles.sectionIntro}>
        Whether users are logging in, completing a purchase, or confirming an important action, SMS verification codes secure every step.
        </p>
        <div className={styles.useCasesGrid}>
          <div className={styles.useCaseCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconBlue}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Secure Sign-In & Access Control</h3>
            <p>Strengthen authentication at every entry point. A real-time verification code delivered to the registered mobile number adds an additional validation layer before access is approved.
            </p>
            <div className={styles.exampleTags}>
              <span>User Login</span>
              <span>Admin Panel Access</span>
              <span>VPN Authentication</span>
            </div>
          </div>
          <div className={styles.useCaseCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="1" y="4" width="22" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="1" y1="10" x2="23" y2="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Payments & Transaction Authorization</h3>
            <p>Add a decisive verification layer before critical financial actions are completed. Real-time SMS authentication codes validate high-value transactions, card updates, and digital wallet activities — ensuring secure approvals without interrupting the user journey.
            </p>
            <div className={styles.exampleTags}>
              <span>Fund Transfers</span>
              <span>Card Payments</span>
              <span>Wallet Top-Ups</span>
            </div>
          </div>
          <div className={styles.useCaseCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconOrange}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Account Recovery & Credential Protection</h3>
            <p>When users lose access or update critical details, verification must remain airtight. A one-time code sent to the registered mobile number confirms rightful ownership before any recovery or profile changes are approved.
            </p>
            <div className={styles.exampleTags}>
              <span>Password Reset</span>
              <span>Email Address Update</span>
              <span>Account Recovery Flow</span>
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
            <h3>Checkout & Order Verification</h3>
            <p>Authenticate buyers at the final step before an order is processed. SMS-based verification codes confirm customer identity in real time — reducing fraud, preventing fake orders, and protecting revenue without slowing the checkout experience.
            </p>
            <div className={styles.exampleTags}>
              <span>Order Confirmation</span>
              <span>Guest Checkout Verification</span>
              <span>Account Linking</span>
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
