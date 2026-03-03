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
              Delivering Secure Verification at Scale for 2,000+ Brands
            </div>
            <h1 className={styles.heading}>
              Transactional Messaging{' '}
              <span className={styles.headingHighlight}>
                <span className={styles.highlightBlue}>Delivered</span>{' '}
                <span className={styles.highlightTeal}>Instantly</span>
              </span>
            </h1>
            <p className={styles.intro}>
              Deliver OTPs, alerts, and time-sensitive notifications in real time with a 99.8% delivery success rate. Built on enterprise-grade infrastructure to ensure your most critical communications never fail.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>99.8%</span>
                <span className={styles.statLabel}>Delivery Success Rate</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>&lt;3s</span>
                <span className={styles.statLabel}>Average Message Speed</span>
              </div>
              <div className={styles.statItem}>
                <span className={`${styles.statValue} ${styles.statValueGreen}`}>24/7</span>
                <span className={styles.statLabel}>Dedicated Technical Support</span>
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
          Transactional SMS ensures mission-critical information reaches customers instantly and reliably. From authentication codes to payment confirmations, messages are delivered directly to mobile devices with carrier-grade speed and dependability.
        </p>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span>Ultra-Fast Delivery for Time-Sensitive Alerts</span>
          </div>
          <div className={styles.benefitCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span>Up to 98% Open Rate in the First 3 Minutes</span>
          </div>
          <div className={styles.benefitCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span>Direct-to-Device Delivery Without App Dependency</span>
          </div>
          <div className={styles.benefitCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span>Compatible with All Mobile Devices</span>
          </div>
          <div className={styles.benefitCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span>Real-Time Messaging Integrated into Your Operational Flows</span>
          </div>
          <div className={styles.benefitCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span>End-to-End Delivery Insights in Real Time</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={styles.whySection}>
        <span className={styles.sectionTag}>Features</span>
        <h2 className={styles.sectionHeading}>End-to-End Solution for Secure, Scalable Transactional SMS Delivery</h2>
        <p className={styles.sectionIntro}>
          Developer-First Architecture with Enterprise-Grade Reliability
        </p>
        <div className={styles.cardsGrid}>
          <div className={styles.featureCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconOrange}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>High-Speed, High-Availability Delivery</h3>
            <p>Messages transmitted in under 3 seconds through priority routing and multi-carrier redundancy.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconBlue}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Proven 99.8% Message Delivery</h3>
            <p>Powered by direct integrations and premium carrier routes worldwide.
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconPurple}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="8 6 2 12 8 18" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>API-First Architecture</h3>
            <p>REST-based messaging APIs with multi-language SDKs, built for rapid deployment and seamless system integration.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 20V10M12 20V4M6 20v-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Live Messaging Intelligence</h3>
            <p>Gain full visibility into delivery reports, user engagement, and performance trends with advanced analytics and real-time webhooks.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconYellow}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Worldwide SMS Reach</h3>
            <p>Connect with customers across 190+ countries through trusted carrier partnerships, local sender ID enablement, and market-competitive pricing.
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconSlate}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Enterprise-Grade Security</h3>
            <p>From encrypted transmission to disciplined data handling, every layer is designed to protect sensitive business messaging.
            </p>
          </div>
        </div>
      </section>

      {/* Built for Every Industry */}
      <section className={styles.whySection}>
        <span className={styles.sectionTag}>Transactional SMS Use Cases Across Industries</span>
        <h2 className={styles.sectionHeading}>Engineered for Cross-Industry Scale</h2>
        <p className={styles.sectionIntro}>
          Delivering secure, high-speed SMS solutions for organizations of every size and sector.
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
            <p>Deliver real-time transactional updates that keep customers informed and engaged at every stage of their purchase journey. From order confirmation to final delivery, SMS ensures instant visibility and higher customer trust.
            </p>
            <div className={styles.exampleTags}>
              <span>Order Placed</span>
              <span>Out For Delivery</span>
              <span>Payment Received</span>
              <span>Return Status</span>
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
            <p>Enable secure, real-time financial communication with high-priority SMS delivery. From authentication to transaction monitoring, ensure customers receive critical updates instantly while strengthening fraud prevention and regulatory compliance.
            </p>
            <div className={styles.exampleTags}>
              <span>Login OTP</span>
              <span>Transaction Alert</span>
              <span>Low Balance Notification</span>
              <span>Card Blocked Alert</span>
            </div>
          </div>
          <div className={styles.industryCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Healthcare</h3>
            <p>Deliver timely and confidential medical updates with reliable SMS communication. From appointment coordination to critical health notifications, ensure patients stay informed while maintaining data privacy and operational efficiency.
            </p>
            <div className={styles.exampleTags}>
              <span>Appointment Reminder</span>
              <span>Test Results Ready</span>
              <span>Prescription Due</span>
              <span>Check-In Alert</span>
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
            <p>Keep travelers informed at every stage of their journey with real-time SMS updates. From reservations to departures, ensure timely communication that enhances customer experience and operational efficiency.
            </p>
            <div className={styles.exampleTags}>
              <span>Booking Confirmed</span>
              <span>Flight Delay Alert</span>
              <span>Check-In Reminder</span>
              <span>Reservation Modified</span>
            </div>
          </div>
        </div>
      </section>

      {/* What is Transactional SMS */}
      <section className={styles.infoSection}>
        <h2 className={styles.infoHeading}>What is Transactional SMS?</h2>
        <p className={styles.infoText}>
          Transactional SMS consists of API-triggered, event-based notifications such as authentication codes, transaction alerts, and system updates. These messages are automatically generated through workflow integrations and routed via high-priority channels to ensure low latency and maximum delivery reliability.
        </p>
        <p className={styles.infoText}>
          Designed for mission-critical use, transactional messaging supports compliance standards, secure transmission protocols, and detailed delivery reporting.
        </p>
      </section>

      {/* How Does Transactional SMS Work */}
      <section className={styles.infoSection}>
        <h2 className={styles.infoHeading}>How Does Transactional SMS Work?</h2>
        <div className={styles.workflowSteps}>
          <div className={styles.workflowStep}>
            <span className={styles.stepNum}>1</span>
            <span className={styles.stepText}>Trigger Event</span>
            <span className={styles.stepDesc}>Your system detects an action (login, payment, signup) and instantly sends an API request automatically.</span>
          </div>
          <div className={styles.workflowStep}>
            <span className={styles.stepNum}>2</span>
            <span className={styles.stepText}>Smart Routing</span>
            <span className={styles.stepDesc}>The platform analyzes network conditions and selects the fastest, most reliable carrier path.</span>
          </div>
          <div className={styles.workflowStep}>
            <span className={styles.stepNum}>3</span>
            <span className={styles.stepText}>Instant Delivery</span>
            <span className={styles.stepDesc}>The message reaches the recipient in under 3 seconds, with real-time delivery confirmation.</span>
          </div>
        </div>
      </section>

      {/* Benefits of Transactional SMS */}
      <section className={styles.infoSection}>
        <h2 className={styles.infoHeading}>Benefits of Transactional SMS</h2>
        <div className={styles.benefitsList}>
          <div className={styles.benefitItem}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Messages transmitted instantly with up to 99.8% success rates.
          </div>
          <div className={styles.benefitItem}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Direct-to-network delivery — no data required.
          </div>
          <div className={styles.benefitItem}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Works seamlessly on all mobile phones and across global carriers.
          </div>
          <div className={styles.benefitItem}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Up to 98% open rate within the first 3 minutes.
          </div>
          <div className={styles.benefitItem}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            API-driven workflows designed for high-volume messaging.
          </div>
          <div className={styles.benefitItem}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Live delivery reports and status updates for full visibility.
          </div>
          <div className={styles.benefitItem}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Optimized routing keeps performance high and costs predictable.
          </div>
          <div className={styles.benefitItem}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Built with regulatory standards and data protection controls in mind.
          </div>
        </div>
      </section>

      {/* Why Choose Mr-OTP */}
      <section className={styles.infoSection}>
        <h2 className={styles.infoHeading}>Upgrade to Smarter Transactional SMS with MR-OTP</h2>
        <div className={styles.comparisonTable}>
          <h3 className={styles.comparisonTitle}>Mr-OTP</h3>
          <h3 className={styles.comparisonTitle}>Traditional Providers</h3>
          <div className={styles.comparisonRow}>
            <div className={styles.comparisonItem}><span className={styles.checkIcon}>✓</span> 99.8% Delivery Success Rate</div>
            <div className={styles.comparisonItem}><span className={styles.crossIcon}>✕</span> 92–95% Average Delivery Rate</div>
          </div>
          <div className={styles.comparisonRow}>
            <div className={styles.comparisonItem}><span className={styles.checkIcon}>✓</span> Under 3-Second Message Delivery</div>
            <div className={styles.comparisonItem}><span className={styles.crossIcon}>✕</span> 5–10 Second Message Delays</div>
          </div>
          <div className={styles.comparisonRow}>
            <div className={styles.comparisonItem}><span className={styles.checkIcon}>✓</span> Global Coverage in 190+ Countries</div>
            <div className={styles.comparisonItem}><span className={styles.crossIcon}>✕</span> Limited International Reach</div>
          </div>
          <div className={styles.comparisonRow}>
            <div className={styles.comparisonItem}><span className={styles.checkIcon}>✓</span> Developer-Friendly REST API</div>
            <div className={styles.comparisonItem}><span className={styles.crossIcon}>✕</span> Complex & Slow Integration</div>
          </div>
          <div className={styles.comparisonRow}>
            <div className={styles.comparisonItem}><span className={styles.checkIcon}>✓</span> 24/7 Dedicated Support</div>
            <div className={styles.comparisonItem}><span className={styles.crossIcon}>✕</span> Support During Business Hours Only</div>
          </div>
          <div className={styles.comparisonRow}>
            <div className={styles.comparisonItem}><span className={styles.checkIcon}>✓</span> Advanced Real-Time Analytics</div>
            <div className={styles.comparisonItem}><span className={styles.crossIcon}>✕</span> Basic Reporting & Visibility</div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
