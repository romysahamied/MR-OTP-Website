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
            <div className={styles.badge}>99.8% Average Delivery Rate</div>
            <h1 className={styles.heading}>
              Promotional SMS that reaches customers instantly
            </h1>
            <p className={styles.intro}>
              Send targeted bulk SMS campaigns with real-time delivery reports and local sender IDs. Start your free trial or get flexible pricing for high-volume campaigns.
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
                24/7 support
              </div>
              <div className={styles.trustItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                No hidden fees
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
        <h2 className={styles.sectionHeading}>Marketing that reaches customers instantly</h2>
        <p className={styles.sectionIntro}>
          Promotional SMS delivers measurable results for businesses of all sizes. Reach your audience directly with bulk SMS marketing that drives action.
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
            <p>SMS messages are read within 3 minutes on average, delivering 6x higher engagement than email marketing campaigns.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>5x Lower CPA</h3>
            <span className={styles.cardSub}>Cost-Effective Marketing</span>
            <p>Reduce customer acquisition costs with direct, targeted promotional SMS that converts at higher rates than traditional channels.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconOrange}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>25% Conversion Uplift</h3>
            <span className={styles.cardSub}>Measurable Results</span>
            <p>Track delivery, opens, and conversions in real-time. Optimize campaigns with detailed analytics and delivery reports.</p>
          </div>
        </div>
      </section>

      <section className={styles.whySection}>
        <span className={styles.sectionTag}>Features</span>
        <h2 className={styles.sectionHeading}>Everything you need for promotional SMS campaigns</h2>
        <p className={styles.sectionIntro}>
          Enterprise-grade bulk SMS platform with tools for campaign management, delivery tracking, and compliance.
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
            <p>Send thousands of promotional SMS messages in seconds with our high-throughput SMS gateway.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className={styles.cardTag}>Brand Identity</span>
            <h3>Dedicated Sender ID</h3>
            <p>Increase recognition and response with a custom sender name registered for your brand.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconPurple}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 20V10M12 20V4M6 20v-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className={styles.cardTag}>Real-Time</span>
            <h3>Delivery Reports</h3>
            <p>Real-time DLRs and comprehensive analytics to track campaign performance and message status.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconOrange}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className={styles.cardTag}>Developer Friendly</span>
            <h3>API & Integrations</h3>
            <p>Seamless SMS API integration with your CRM, e-commerce platform, or marketing automation tools.</p>
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
            <span className={styles.cardTag}>Ready to Use</span>
            <h3>Campaign Templates</h3>
            <p>Pre-built SMS templates for retail offers, event promotions, logistics alerts, and more.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={`${styles.cardIcon} ${styles.cardIconSlate}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className={styles.cardTag}>Compliant</span>
            <h3>Opt-out Management</h3>
            <p>Built-in compliance tools for opt-out handling, DND lists, and regional SMS regulations.</p>
          </div>
        </div>
      </section>

      <section className={styles.salesCallout}>
        <div className={styles.salesCalloutInner}>
          <p>Need help choosing a plan? Our team can help you find the right SMS solution for your business goals.</p>
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
        <h2 className={styles.sectionHeading}>Promotional SMS for every industry</h2>
        <p className={styles.sectionIntro}>
          From retail to logistics, events to political campaigns — bulk SMS marketing that delivers results.
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
            <p>Drive foot traffic and online sales with flash sale alerts, exclusive discount codes, and seasonal promotional SMS campaigns.</p>
            <span className={styles.useCaseTag}>35% average conversion rate on SMS offers</span>
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
            <p>Keep customers informed with package tracking updates, delivery confirmations, and time-sensitive shipping notifications.</p>
            <span className={styles.useCaseTag}>92% customer satisfaction improvement</span>
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
            <p>Boost event attendance with promotional SMS for conferences, webinars, concerts, and exclusive invitations.</p>
            <span className={styles.useCaseTag}>45% increase in event attendance</span>
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
            <p>Reach voters and supporters with compliant bulk SMS for fundraising, awareness campaigns, and community engagement.</p>
            <span className={styles.useCaseTag}>Full opt-out compliance and reporting</span>
          </div>
        </div>
        <div className={styles.complianceNotice}>
          <strong>Compliance Notice:</strong> All promotional SMS campaigns must include opt-out mechanisms and comply with local DND regulations. Mr-OTP provides built-in tools for managing consent and unsubscribe requests.
        </div>
      </section>

      <Footer />
    </main>
  )
}
