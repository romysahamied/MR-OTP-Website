import dynamic from 'next/dynamic'
import type { Metadata } from 'next'
import styles from './PromotionalSms.module.css'

const Header = dynamic(() => import('@/components/Header'), { ssr: true })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true })
const PromotionalForm = dynamic(() => import('@/components/PromotionalForm'), { ssr: true })

export const metadata: Metadata = {
  title: 'Promotional SMS | Marketing Campaigns | Mr-OTP',
  description: 'Promotional SMS that reaches customers instantly. Send targeted bulk SMS campaigns with real-time delivery reports and local sender IDs.',
}

export default function PromotionalSmsPage() {
  return (
    <main className={styles.wrapper}>
      <Header />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <div className={styles.badge}>99.8% Delivery SuccessRate</div>
            <h1 className={styles.heading}>
              Promotional SMS That Delivers Instant Reach
            </h1>
            <p className={styles.intro}>
              Launch targeted bulk SMS campaigns with real-time delivery tracking and localized sender IDs. Reach your audience at scale with reliable routing and performance-driven infrastructure.
            </p>
            <div className={styles.trustBadges}>
              <div className={styles.trustItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Trusted by 2,000+ brands
              </div>
              <div className={styles.trustItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                24/7 Dedicated Support
              </div>
              <div className={styles.trustItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Transparent Pricing — No Hidden Fees
              </div>
            </div>
          </div>
          <div className={styles.heroForm}>
            <PromotionalForm />
          </div>
        </div>
      </section>

      <section className={styles.whySection}>
        <span className={styles.sectionTag}>Why Promotional SMS</span>
        <h2 className={styles.sectionHeading}>Promotional SMS That Drives Instant Results</h2>
        <p className={styles.sectionIntro}>
          Reach your customers in seconds with targeted bulk SMS campaigns designed for engagement, conversions, and measurable ROI. Deliver high-impact marketing messages directly to any mobile device — no apps, no delays.
        </p>
        <div className={styles.cardsGrid}>
          <div className={styles.featureCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconBlue}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 20V10M12 20V4M6 20v-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>98% Open Rate</h3>
            <span className={styles.cardSub}>Unmatched Engagement</span>
            <p>SMS messages are typically read within minutes, generating up to 6x higher engagement compared to traditional email campaigns.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>5x Lower CPA</h3>
            <span className={styles.cardSub}>Cost-Efficient Growth</span>
            <p>Lower your customer acquisition costs with targeted promotional SMS that delivers stronger response rates than conventional marketing channels.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconOrange}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>25% Conversion Lift</h3>
            <span className={styles.cardSub}>Measurable Performance</span>
            <p>Monitor delivery, engagement, and conversions in real time. Use detailed analytics and reporting to continuously optimize campaign results.</p>
          </div>
        </div>
      </section>

      <section className={styles.whySection}>
        <span className={styles.sectionTag}>Features</span>
        <h2 className={styles.sectionHeading}>Everything You Need for High-Impact Promotional SMS</h2>
        <p className={styles.sectionIntro}>
          Run smarter bulk SMS campaigns with intelligent routing, live performance insights, and compliance-ready infrastructure — all built for high-volume marketing execution.
        </p>
        <div className={styles.cardsGrid}>
          <div className={styles.featureCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconBlue}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13" strokeLinecap="round" strokeLinejoin="round" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className={styles.cardTag}>High Volume</span>

            <h3>Bulk Sending</h3>
            <p>Launch thousands of promotional SMS messages within seconds using a high-throughput gateway built for scale and performance.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className={styles.cardTag}>Brand Identity</span>
            <h3>Dedicated Sender ID</h3>
            <p>Strengthen brand recognition with a registered, custom sender ID that builds trust and improves response rates.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconPurple}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 20V10M12 20V4M6 20v-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className={styles.cardTag}>Real-Time Insights</span>
            <h3>Delivery Reports</h3>
            <p>Access instant delivery reports (DLRs) and detailed analytics to monitor campaign reach and message status.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconOrange}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className={styles.cardTag}>Developer-Friendly</span>
            <h3>API & Integrations</h3>
            <p>Integrate seamlessly with your CRM, e-commerce system, or marketing automation tools through flexible API connectivity.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconYellow}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="14 2 14 8 20 8" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="16" y1="13" x2="8" y2="13" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="16" y1="17" x2="8" y2="17" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="10 9 9 9 8 9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className={styles.cardTag}>Campaign Ready</span>
            <h3>Pre-Built Templates</h3>
            <p>Deploy faster with ready-to-use SMS templates for retail promotions, events, service updates, and more.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconSlate}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className={styles.cardTag}>Compliance Built-In</span>
            <h3>Opt-Out Management</h3>
            <p>Automated opt-out processing, DND list management, and regional regulatory compliance controls included by default.</p>
          </div>
        </div>
      </section>

      <section className={styles.salesCallout}>
        <div className={styles.salesCalloutInner}>
          <p>
            <span className={styles.salesCalloutQuestion}>Not sure which plan fits your needs?</span>
            <br />
            Speak with our experts to find the ideal SMS solution tailored to your growth strategy.
          </p>
          <a href="/contact-sales" className={styles.salesCta}>
            Talk to Sales
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      <section className={styles.useCasesSection}>
        <span className={styles.sectionTag}>Use Cases</span>
        <h2 className={styles.sectionHeading}>Industry-Ready Promotional SMS</h2>
        <p className={styles.sectionIntro}>
        Empower organizations across retail, finance, logistics, hospitality, education, and public sectors with scalable bulk messaging built for performance and compliance.
        </p>
        <div className={styles.useCasesGrid}>
          <div className={styles.useCaseCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconBlue}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Retail Offers & Promotions</h3>
            <p>Drive in-store traffic and online revenue with flash sale alerts, exclusive discount codes, and seasonal SMS campaigns designed for immediate action.</p>
            <span className={styles.useCaseTag}>35% average conversion rate on SMS promotions</span>
          </div>
          <div className={styles.useCaseCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="1" y="3" width="15" height="13" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="5.5" cy="18.5" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="18.5" cy="18.5" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Logistics & Delivery Alerts</h3>
            <p>Keep customers informed at every step with shipment tracking updates, delivery confirmations, and time-sensitive notifications.</p>
            <span className={styles.useCaseTag}>92% improvement in customer satisfaction</span>
          </div>
          <div className={styles.useCaseCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconPurple}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="3" y1="10" x2="21" y2="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Event Promotion & Reminders</h3>
            <p>Increase registrations and attendance with targeted SMS campaigns for conferences, webinars, concerts, and VIP invitations.</p>
            <span className={styles.useCaseTag}>Up to 45% boost in event turnout</span>
          </div>
          <div className={styles.useCaseCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconOrange}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Political & NGO Campaigns</h3>
            <p>Engage supporters and communities through compliant bulk SMS for fundraising, awareness initiatives, and outreach programs.</p>
            <span className={styles.useCaseTag}>Built-in opt-out compliance and transparent reporting</span>
          </div>
        </div>
        <div className={styles.complianceNotice}>
          <strong>Compliance Notice:</strong> Promotional SMS must follow opt-out and DND regulations. MR-OTP includes integrated tools for consent management and unsubscribe handling.
        </div>
      </section>

      <Footer />
    </main>
  )
}
