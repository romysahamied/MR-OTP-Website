import dynamic from 'next/dynamic'
import type { Metadata } from 'next'
import styles from './TransactionalSms.module.css'

const Header = dynamic(() => import('@/components/Header'), { ssr: true })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true })
const TransactionalForm = dynamic(() => import('@/components/TransactionalForm'), { ssr: true })

export const metadata: Metadata = {
  title: 'Transactional SMS | Real-Time Messaging | Mr-OTP',
  description: 'Transactional SMS that reaches customers instantly. Send order confirmations, delivery alerts, and notifications with real-time delivery reports and local sender IDs.',
}

export default function TransactionalSmsPage() {
  return (
    <main className={styles.wrapper}>
      <Header />

      {/* Hero: Left content + Right form */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <div className={styles.badge}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Trusted by 2,000+ Brands
            </div>
            <h1 className={styles.heading}>
              Transactional SMS That{' '}
              <span className={styles.headingHighlight}>
                <span className={styles.highlightBlue}>Delivers</span>{' '}
                <span className={styles.highlightTeal}>Results</span>
              </span>
            </h1>
            <p className={styles.intro}>
              Send OTPs, alerts, and notifications instantly with 99.8% delivery rate. Enterprise-grade reliability for your critical messages.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>99.8%</span>
                <span className={styles.statLabel}>Delivery Rate</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>&lt;3s</span>
                <span className={styles.statLabel}>Avg. Speed</span>
              </div>
              <div className={styles.statItem}>
                <span className={`${styles.statValue} ${styles.statValueGreen}`}>24/7</span>
                <span className={styles.statLabel}>Support</span>
              </div>
            </div>
          </div>
          <div className={styles.heroForm}>
            <TransactionalForm />
          </div>
        </div>
      </section>

      {/* Why Transactional SMS */}
      <section className={styles.whySection}>
        <h2 className={styles.whyHeading}>Why Transactional SMS?</h2>
        <p className={styles.sectionIntro}>
          Transactional SMS delivers time-sensitive information directly to your customers&apos; phones with unmatched reliability and speed.
        </p>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span>Instant delivery of critical messages</span>
          </div>
          <div className={styles.benefitCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span>98% open rate within 3 minutes</span>
          </div>
          <div className={styles.benefitCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span>No app installation required</span>
          </div>
          <div className={styles.benefitCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span>Works on all mobile devices</span>
          </div>
          <div className={styles.benefitCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span>Automated workflow integration</span>
          </div>
          <div className={styles.benefitCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span>Real-time delivery tracking</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={styles.whySection}>
        <span className={styles.sectionTag}>Features</span>
        <h2 className={styles.sectionHeading}>Everything You Need to Send Transactional SMS</h2>
        <p className={styles.sectionIntro}>
          Powerful features built for developers and trusted by enterprises.
        </p>
        <div className={styles.cardsGrid}>
          <div className={styles.featureCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconOrange}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Lightning Fast Delivery</h3>
            <p>Messages delivered in under 3 seconds with priority routing and redundant carriers.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconBlue}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>99.8% Delivery Rate</h3>
            <p>Industry-leading delivery rates backed by tier-1 carrier partnerships worldwide.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconPurple}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="8 6 2 12 8 18" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Developer-Friendly API</h3>
            <p>RESTful API with SDKs for major languages. Get started in minutes with clear documentation.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 20V10M12 20V4M6 20v-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Real-Time Analytics</h3>
            <p>Track delivery, opens, and engagement with detailed dashboards and webhooks.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconYellow}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Global Coverage</h3>
            <p>Send SMS to 190+ countries with local sender ID support and competitive pricing.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconSlate}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Enterprise Security</h3>
            <p>End-to-end encryption in transit with strict data handling and compliance standards.</p>
          </div>
        </div>
      </section>

      {/* Built for Every Industry */}
      <section className={styles.whySection}>
        <span className={styles.sectionTag}>Use Cases</span>
        <h2 className={styles.sectionHeading}>Built for Every Industry</h2>
        <p className={styles.sectionIntro}>
          Trusted by businesses across sectors to deliver critical communications.
        </p>
        <div className={styles.industryGrid}>
          <div className={styles.industryCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconOrange}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 10a4 4 0 0 1-8 0" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>E-Commerce</h3>
            <p>Order confirmations, shipping updates, delivery notifications, and payment alerts.</p>
            <div className={styles.exampleTags}>
              <span>Order placed</span>
              <span>Out for delivery</span>
              <span>Payment received</span>
              <span>Return status</span>
            </div>
          </div>
          <div className={styles.industryCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconBlue}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="1" y="4" width="22" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="1" y1="10" x2="23" y2="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Banking & Finance</h3>
            <p>Transaction alerts, OTPs, balance updates, and security notifications.</p>
            <div className={styles.exampleTags}>
              <span>Login OTP</span>
              <span>Transaction alert</span>
              <span>Low balance</span>
              <span>Card blocked</span>
            </div>
          </div>
          <div className={styles.industryCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Healthcare</h3>
            <p>Appointment reminders, test results, prescription refills, and emergency alerts.</p>
            <div className={styles.exampleTags}>
              <span>Appointment reminder</span>
              <span>Test results ready</span>
              <span>Prescription due</span>
              <span>Check-in alert</span>
            </div>
          </div>
          <div className={styles.industryCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconPurple}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13" strokeLinecap="round" strokeLinejoin="round" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Travel & Hospitality</h3>
            <p>Booking confirmations, check-in reminders, flight updates, and reservation changes.</p>
            <div className={styles.exampleTags}>
              <span>Booking confirmed</span>
              <span>Flight delay</span>
              <span>Check-in open</span>
              <span>Reservation modified</span>
            </div>
          </div>
        </div>
      </section>

      {/* What is Transactional SMS */}
      <section className={styles.infoSection}>
        <h2 className={styles.infoHeading}>What is Transactional SMS?</h2>
        <p className={styles.infoText}>
          Transactional SMS is different from promotional messages. It delivers time-critical, event-triggered notifications such as OTPs, order confirmations, shipping updates, and account alerts. These messages are essential for your business operations and customer communication, with high delivery and read rates that ensure your customers stay informed.
        </p>
      </section>

      {/* How Does Transactional SMS Work */}
      <section className={styles.infoSection}>
        <h2 className={styles.infoHeading}>How Does Transactional SMS Work?</h2>
        <div className={styles.stepsList}>
          <div className={styles.stepItem}>
            <div className={`${styles.stepNumber} ${styles.stepBlue}`}>1</div>
            <div>
              <h3 className={styles.stepTitle}>Trigger Event</h3>
              <p>Your application triggers an SMS through our API when an event occurs (login, purchase, etc.)</p>
            </div>
          </div>
          <div className={styles.stepItem}>
            <div className={`${styles.stepNumber} ${styles.stepTeal}`}>2</div>
            <div>
              <h3 className={styles.stepTitle}>Smart Routing</h3>
              <p>Our platform intelligently routes your message through the best carrier for optimal delivery</p>
            </div>
          </div>
          <div className={styles.stepItem}>
            <div className={`${styles.stepNumber} ${styles.stepGreen}`}>3</div>
            <div>
              <h3 className={styles.stepTitle}>Instant Delivery</h3>
              <p>Message reaches the recipient in under 3 seconds with real-time delivery confirmation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Transactional SMS */}
      <section className={styles.infoSection}>
        <h2 className={styles.infoHeading}>Benefits of Transactional SMS</h2>
        <div className={styles.benefitsList}>
          <div className={styles.benefitItem}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Instant delivery with 99.8% success rate
          </div>
          <div className={styles.benefitItem}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            No internet required on recipient device
          </div>
          <div className={styles.benefitItem}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Works on all mobile phones
          </div>
          <div className={styles.benefitItem}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            98% open rate within 3 minutes
          </div>
          <div className={styles.benefitItem}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Automated and scalable
          </div>
          <div className={styles.benefitItem}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Real-time delivery tracking
          </div>
          <div className={styles.benefitItem}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Cost-effective at scale
          </div>
          <div className={styles.benefitItem}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Regulatory compliance built-in
          </div>
        </div>
      </section>

      {/* Why Choose Mr-OTP */}
      <section className={styles.infoSection}>
        <h2 className={styles.infoHeading}>Why Choose Mr-OTP for Transactional SMS?</h2>
        <div className={styles.comparisonTable}>
          <div className={styles.comparisonColumn}>
            <h3 className={styles.comparisonTitle}>Mr-OTP</h3>
            <ul className={styles.comparisonList}>
              <li><span className={styles.checkIcon}>✓</span> 99.8% delivery rate</li>
              <li><span className={styles.checkIcon}>✓</span> Under 3 second delivery</li>
              <li><span className={styles.checkIcon}>✓</span> Global coverage (190+ countries)</li>
              <li><span className={styles.checkIcon}>✓</span> Developer-friendly API</li>
              <li><span className={styles.checkIcon}>✓</span> 24/7 support</li>
              <li><span className={styles.checkIcon}>✓</span> Real-time analytics</li>
            </ul>
          </div>
          <div className={styles.comparisonColumn}>
            <h3 className={styles.comparisonTitle}>Traditional Providers</h3>
            <ul className={styles.comparisonList}>
              <li><span className={styles.crossIcon}>✕</span> 92-95% delivery rate</li>
              <li><span className={styles.crossIcon}>✕</span> 5-10 second delays</li>
              <li><span className={styles.crossIcon}>✕</span> Limited coverage</li>
              <li><span className={styles.crossIcon}>✕</span> Complex integration</li>
              <li><span className={styles.crossIcon}>✕</span> Business hours only</li>
              <li><span className={styles.crossIcon}>✕</span> Basic reporting</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
