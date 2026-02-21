import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import styles from './BulkSms.module.css'

const Header = dynamic(() => import('@/components/Header'), { ssr: true })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true })
const GetStartedForm = dynamic(() => import('@/components/GetStartedForm'), { ssr: true })

const WHATSAPP_URL = 'https://wa.me/919070821537?text=Hi%20I%20am%20interested%20in%20your%20Bulk%20SMS%20services'

export const metadata: Metadata = {
  title: 'Bulk SMS | Marketing Automation | Mr-OTP',
  description: 'Mr-OTP is the expert in Bulk SMS. User-friendly platform with rich features for bulk alert SMS campaigns. Mobile alerts, institutional, corporate, and auto-reply services.',
}

export default function BulkSmsPage() {
  return (
    <main className={styles.wrapper}>
      <Header />
      <section className={styles.hero}>
        <div className={styles.trustBadge}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Trusted by 10,000+ businesses worldwide
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>

        <h1 className={styles.heading}>
          <span className={styles.headingLine1}>Bulk SMS, Worldwide —</span>
          <span className={styles.headingLine2}>Carrier-Grade Delivery at Scale</span>
        </h1>

        <p className={styles.heroIntro}>
          Send OTPs, alerts, and marketing messages across <strong>190+ countries</strong> with reliable routes, powerful APIs, and real-time delivery reports.
        </p>

        <div className={styles.ctaGroup}>
          <Link href="/contact-sales" className={styles.ctaPrimary}>
            Contact Sales
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.ctaWhatsApp}>
            <span className={styles.whatsappIcon}>
              <Image src="/whatsapp.svg" alt="" width={20} height={20} />
            </span>
            Chat on WhatsApp
          </a>
        </div>

        <div className={styles.featuresRow}>
          <div className={styles.featureItem}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            24/7 NOC Support
          </div>
          <div className={styles.featureItem}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M18 9v4M14 7v10M10 11v6M6 13v4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            99.9% Uptime SLA
          </div>
          <div className={styles.featureItem}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Tier-1 Connectivity
          </div>
        </div>

        <p className={styles.heroFooter}>Trusted by industry leaders</p>
      </section>

      {/* Trusted by Industry Leaders + Live Platform Metrics */}
      <section className={styles.trustedSection}>
        <h2 className={styles.trustedHeading}>Trusted by Industry Leaders</h2>
        <div className={styles.industryGrid}>
          {[
            { name: 'E-commerce', icon: 'cart' },
            { name: 'Fintech', icon: 'card' },
            { name: 'Logistics', icon: 'box' },
            { name: 'Healthcare', icon: 'health' },
            { name: 'Government', icon: 'building' },
            { name: 'SaaS', icon: 'cloud' },
          ].map((item) => (
            <div key={item.name} className={styles.industryCard}>
              <div className={styles.industryIcon}>
                {item.icon === 'cart' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                )}
                {item.icon === 'card' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
                )}
                {item.icon === 'box' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                )}
                {item.icon === 'health' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                )}
                {item.icon === 'building' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" /></svg>
                )}
                {item.icon === 'cloud' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></svg>
                )}
              </div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>

        <div className={styles.metricsCard}>
          <div className={styles.metricsHeader}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Live Platform Metrics
          </div>
          <div className={styles.metricsGrid}>
            <div className={styles.metricColumn}>
              <div className={`${styles.metricIcon} ${styles.metricIconBlue}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <span className={styles.metricValue}>190+</span>
              <span className={styles.metricLabel}>Countries</span>
              <span className={styles.metricSub}>Worldwide coverage</span>
            </div>
            <div className={styles.metricColumn}>
              <div className={`${styles.metricIcon} ${styles.metricIconGreen}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className={styles.metricValue}>99.9%</span>
              <span className={styles.metricLabel}>Delivery Rate</span>
              <span className={styles.metricSub}>Average success rate</span>
            </div>
            <div className={styles.metricColumn}>
              <div className={`${styles.metricIcon} ${styles.metricIconPurple}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className={styles.metricValue}>&lt;3s</span>
              <span className={styles.metricLabel}>Avg. Delivery</span>
              <span className={styles.metricSub}>Lightning fast</span>
            </div>
          </div>
          <div className={styles.metricsFeatures}>
            <div className={styles.metricFeature}>
              <span className={styles.featureDot} style={{ background: '#22c55e' }} />
              <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" width="16" height="16"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Real-time delivery tracking
            </div>
            <div className={styles.metricFeature}>
              <span className={styles.featureDot} style={{ background: '#3b82f6' }} />
              <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" width="16" height="16"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              REST & SMPP APIs
            </div>
            <div className={styles.metricFeature}>
              <span className={styles.featureDot} style={{ background: '#22c55e' }} />
              <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" width="16" height="16"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Unicode support
            </div>
          </div>
        </div>
      </section>

      {/* What is Bulk SMS? */}
      <section className={styles.whatIsSection}>
        <div className={styles.a2pTag}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
          </svg>
          Understanding A2P Messaging
        </div>
        <h2 className={styles.whatIsHeading}>What is Bulk SMS?</h2>
        <p className={styles.whatIsIntro}>
          Bulk SMS is <strong>A2P (application-to-person) messaging</strong> that lets businesses send large volumes of texts for authentication (OTP), time-critical alerts, and promotional campaigns. With Mr-OTP&apos;s carrier-grade routes and delivery reports (DLR), you reach customers reliably worldwide.
        </p>
        <div className={styles.statCardsGrid}>
          <div className={`${styles.statCard} ${styles.statCardBlue}`}>
            <span className={styles.statValue}>98%+</span>
            <span className={styles.statLabel}>Open Rate</span>
            <span className={styles.statSub}>Within 3 minutes</span>
          </div>
          <div className={`${styles.statCard} ${styles.statCardGreen}`}>
            <span className={styles.statValue}>&lt;3s</span>
            <span className={styles.statLabel}>Avg. Delivery</span>
            <span className={styles.statSub}>Global average</span>
          </div>
          <div className={`${styles.statCard} ${styles.statCardPurple}`}>
            <span className={styles.statValue}>190+</span>
            <span className={styles.statLabel}>Countries</span>
            <span className={styles.statSub}>Worldwide reach</span>
          </div>
          <div className={`${styles.statCard} ${styles.statCardOrange}`}>
            <span className={styles.statValue}>100%</span>
            <span className={styles.statLabel}>Device Coverage</span>
            <span className={styles.statSub}>All mobile phones</span>
          </div>
        </div>
        <h3 className={styles.howWorksHeading}>How Bulk SMS Works</h3>
        <p className={styles.howWorksIntro}>
          From trigger to delivery, our platform handles the entire messaging workflow with enterprise-grade reliability.
        </p>
        <div className={styles.workflowSteps}>
          <div className={styles.workflowStep}>
            <span className={styles.stepNum}>1</span>
            <span className={styles.stepText}>Trigger</span>
            <span className={styles.stepDesc}>Your app or system initiates a send via REST API or SMPP</span>
          </div>
          <div className={styles.workflowStep}>
            <span className={styles.stepNum}>2</span>
            <span className={styles.stepText}>Route</span>
            <span className={styles.stepDesc}>Mr-OTP selects the best carrier route for each destination</span>
          </div>
          <div className={styles.workflowStep}>
            <span className={styles.stepNum}>3</span>
            <span className={styles.stepText}>Deliver</span>
            <span className={styles.stepDesc}>Message reaches the recipient&apos;s device in seconds</span>
          </div>
          <div className={styles.workflowStep}>
            <span className={styles.stepNum}>4</span>
            <span className={styles.stepText}>Confirm</span>
            <span className={styles.stepDesc}>Real-time DLR (delivery reports) confirm success</span>
          </div>
        </div>
      </section>

      {/* Key Advantages & Considerations */}
      <section className={styles.advantagesSection}>
        <div className={styles.advantagesGrid}>
          <div className={`${styles.advantageCard} ${styles.advantageCardGreen}`}>
            <div className={styles.advantageCardHeader}>
              <div className={styles.advantageIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h3 className={styles.advantageTitle}>Key Advantages</h3>
            </div>
            <ul className={styles.advantageList}>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" strokeLinecap="round" /></svg>
                <div>
                  <strong>98%+ open rate within minutes</strong>
                  <span>Far exceeds email (20%) and push notifications (50%)</span>
                </div>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" strokeLinecap="round" /></svg>
                <div>
                  <strong>No internet required on recipient device</strong>
                  <span>Works on 2G, 3G, 4G, and 5G networks globally</span>
                </div>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" strokeLinecap="round" /></svg>
                <div>
                  <strong>Works on all mobile phones worldwide</strong>
                  <span>From basic feature phones to latest smartphones</span>
                </div>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" strokeLinecap="round" /></svg>
                <div>
                  <strong>Instant delivery for time-sensitive messages</strong>
                  <span>Perfect for OTPs, alerts, and urgent notifications</span>
                </div>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" strokeLinecap="round" /></svg>
                <div>
                  <strong>Verified delivery reports from carriers</strong>
                  <span>Real-time DLRs with detailed status and error codes</span>
                </div>
              </li>
            </ul>
          </div>
          <div className={`${styles.advantageCard} ${styles.advantageCardOrange}`}>
            <div className={styles.advantageCardHeader}>
              <div className={styles.advantageIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h3 className={styles.advantageTitle}>Considerations</h3>
            </div>
            <ul className={styles.advantageList}>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <div>
                  <strong>Character limits: 160 (GSM) / 70 (Unicode)</strong>
                  <span>Longer messages split into segments automatically</span>
                </div>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <div>
                  <strong>Per-message cost; volume pricing available</strong>
                  <span>Pricing varies by destination and message type</span>
                </div>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <div>
                  <strong>Opt-in/opt-out compliance required</strong>
                  <span>Built-in tools to manage consent and preferences</span>
                </div>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <div>
                  <strong>Sender ID rules vary by country</strong>
                  <span>We handle registration and compliance for you</span>
                </div>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <div>
                  <strong>No rich media (text only)</strong>
                  <span>Use MMS or WhatsApp for images, videos, and buttons</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Power Every Customer Touchpoint */}
      <section className={styles.touchpointSection}>
        <h2 className={styles.touchpointHeading}>Power Every Customer Touchpoint</h2>
        <p className={styles.touchpointSub}>
          From authentication to engagement, deliver messages that matter across your customer journey.
        </p>
        <div className={styles.touchpointGrid}>
          <Link href="#get-started" className={`${styles.touchpointCard} ${styles.touchpointBlue}`}>
            <div className={styles.touchpointIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>OTP & Authentication</h3>
            <p>Secure two-factor authentication and one-time passwords for account verification, login approvals, and transaction confirmations.</p>
            <span className={styles.touchpointLink}>Get Started →</span>
          </Link>
          <Link href="#get-started" className={`${styles.touchpointCard} ${styles.touchpointGreen}`}>
            <div className={styles.touchpointIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Order & Delivery Alerts</h3>
            <p>Real-time order confirmations, shipping updates, delivery notifications, and proof-of-delivery messages for e-commerce and logistics.</p>
            <span className={styles.touchpointLink}>Get Started →</span>
          </Link>
          <Link href="#get-started" className={`${styles.touchpointCard} ${styles.touchpointPurple}`}>
            <div className={styles.touchpointIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="1" y1="10" x2="23" y2="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Banking & Fintech Notifications</h3>
            <p>Transaction alerts, balance updates, payment confirmations, fraud alerts, and account activity notifications.</p>
            <span className={styles.touchpointLink}>Get Started →</span>
          </Link>
          <Link href="#get-started" className={`${styles.touchpointCard} ${styles.touchpointOrange}`}>
            <div className={styles.touchpointIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Marketing Campaigns</h3>
            <p>Promotional offers, flash sales, product launches, seasonal campaigns, and customer engagement messages.</p>
            <span className={styles.touchpointLink}>Get Started →</span>
          </Link>
          <Link href="#get-started" className={`${styles.touchpointCard} ${styles.touchpointTeal}`}>
            <div className={styles.touchpointIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="3" y1="10" x2="21" y2="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Appointment Reminders</h3>
            <p>Healthcare appointments, service bookings, event confirmations, and automated reminder sequences to reduce no-shows.</p>
            <span className={styles.touchpointLink}>Get Started →</span>
          </Link>
          <Link href="#get-started" className={`${styles.touchpointCard} ${styles.touchpointRed}`}>
            <div className={styles.touchpointIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="12" y1="9" x2="12" y2="13" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="12" y1="17" x2="12.01" y2="17" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Emergency & Service Updates</h3>
            <p>Critical alerts, system maintenance notifications, service disruptions, security alerts, and urgent communications.</p>
            <span className={styles.touchpointLink}>Get Started →</span>
          </Link>
        </div>
      </section>

      {/* Enterprise-Grade Features */}
      <section className={styles.enterpriseSection}>
        <h2 className={styles.enterpriseHeading}>Enterprise-Grade Features</h2>
        <p className={styles.enterpriseSub}>
          Everything you need to send, track, and optimize your SMS campaigns at scale with professional-grade tools and infrastructure.
        </p>
        <div className={styles.enterpriseGrid}>
          <div className={`${styles.enterpriseCard} ${styles.enterpriseBlue}`}>
            <div className={styles.enterpriseIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>High Deliverability & DLR</h3>
            <p>Carrier-grade routing with verified delivery reports showing delivered, failed, or pending status for every message.</p>
          </div>
          <div className={`${styles.enterpriseCard} ${styles.enterpriseGreen}`}>
            <div className={styles.enterpriseIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Global Coverage & Local Sender IDs</h3>
            <p>190+ countries with local sender ID support (alphanumeric, numeric, or short codes) based on regional regulations.</p>
          </div>
          <div className={`${styles.enterpriseCard} ${styles.enterprisePurple}`}>
            <div className={styles.enterpriseIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="8 6 2 12 8 18" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>REST & SMPP APIs</h3>
            <p>Modern REST API for quick integration or SMPP for high-throughput enterprise applications with full queueing and retry logic.</p>
          </div>
          <div className={`${styles.enterpriseCard} ${styles.enterpriseOrange}`}>
            <div className={styles.enterpriseIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16v16H4z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 8h8M8 12h8M8 16h4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Unicode, Concatenation & TLV/UDH</h3>
            <p>Full support for Unicode (Arabic, Chinese, emoji), automatic message concatenation, and advanced TLV/UDH parameters.</p>
          </div>
          <div className={`${styles.enterpriseCard} ${styles.enterpriseRed}`}>
            <div className={styles.enterpriseIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 3v5h-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Throughput/TPS Controls</h3>
            <p>Configure messages per second (TPS) limits, implement queueing strategies, and scale based on your business needs.</p>
          </div>
          <div className={`${styles.enterpriseCard} ${styles.enterpriseTeal}`}>
            <div className={styles.enterpriseIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Number Lookup (HLR/Carrier)</h3>
            <p>Validate phone numbers, check carrier info, and verify active status before sending to improve deliverability.</p>
          </div>
          <div className={`${styles.enterpriseCard} ${styles.enterpriseViolet}`}>
            <div className={styles.enterpriseIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Two-Way SMS</h3>
            <p>Receive replies where available, enabling conversational flows, keyword-based automation, and customer feedback.</p>
          </div>
          <div className={`${styles.enterpriseCard} ${styles.enterprisePink}`}>
            <div className={styles.enterpriseIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="14 2 14 8 20 8" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="16" y1="13" x2="8" y2="13" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="16" y1="17" x2="8" y2="17" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="10 9 9 9 8 9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Templates, Personalization & Short Links</h3>
            <p>Dynamic templates with merge tags, personalized content, and trackable short URLs to measure engagement.</p>
          </div>
          <div className={`${styles.enterpriseCard} ${styles.enterpriseGreen}`}>
            <div className={styles.enterpriseIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 21H4V4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18 9v6M13 14v2M8 11v5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Webhooks & Real-time Analytics</h3>
            <p>Push delivery reports to your systems via webhooks and access real-time dashboards with latency, cost, and campaign insights.</p>
          </div>
          <div className={`${styles.enterpriseCard} ${styles.enterpriseSlate}`}>
            <div className={styles.enterpriseIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Security & Privacy</h3>
            <p>End-to-end encryption in transit, SOC 2 compliance readiness, and strict data handling policies. Your data stays protected.</p>
          </div>
        </div>
      </section>

      <GetStartedForm />

      <Footer />
    </main>
  )
}
