import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import styles from './BulkSms.module.css'

const Header = dynamic(() => import('@/components/Header'), { ssr: true })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true })
const GetStartedForm = dynamic(() => import('@/components/GetStartedForm'), { ssr: true })

const WHATSAPP_URL = 'https://wa.me/447360539406?text=Hi%20I%20am%20interested%20in%20your%20Bulk%20SMS%20services'

export const metadata: Metadata = {
  title: 'Bulk SMS | Marketing Automation | Mr OTP',
  description: 'Mr OTP is the expert in Bulk SMS. User-friendly platform with rich features for bulk alert SMS campaigns. Mobile alerts, institutional, corporate, and auto-reply services.',
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
          Powering Messaging for 10,000+ Businesses Globally
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>

        <h1 className={styles.heading}>
          <span className={styles.headingLine1}>Worldwide Bulk SMS —</span>
          <span className={styles.headingLine2}>Engineered for Carrier-Grade Scale</span>
        </h1>

        <p className={styles.heroIntro}>
          Transmit OTP and transactional traffic globally via high-availability routes, API-driven automation, and instant delivery status updates across <strong>190+</strong> markets.
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
            24/7 NOC Monitoring
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
            Direct Tier-1 Carrier Connectivity
          </div>
        </div>
      </section>

      {/* Trusted by Industry Leaders + Live Platform Metrics */}
      <section className={styles.trustedSection}>
        <h2 className={styles.trustedHeading}>Trusted by Industry Leaders</h2>
        <div className={styles.industryGrid}>
          {[
            { name: 'E-commerce', icon: 'cart' },
            { name: 'Fintech', icon: 'card' },
            { name: 'Logistics & Supply Chain', icon: 'box' },
            { name: 'Healthcare', icon: 'health' },
            { name: 'Government & Public Sector', icon: 'building' },
            { name: 'SaaS & Technology Platforms', icon: 'cloud' },
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
              <span className={styles.metricLabel}>Countries Covered</span>
              <span className={styles.metricSub}>Global SMS reach across international markets.</span>
            </div>
            <div className={styles.metricColumn}>
              <div className={`${styles.metricIcon} ${styles.metricIconGreen}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className={styles.metricValue}>99.9%</span>
              <span className={styles.metricLabel}>Delivery Success Rate</span>
              <span className={styles.metricSub}>Consistent, high-performance message reliability.</span>
            </div>
            <div className={styles.metricColumn}>
              <div className={`${styles.metricIcon} ${styles.metricIconPurple}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className={styles.metricValue}>&lt;3s</span>
              <span className={styles.metricLabel}>Average Delivery Time</span>
              <span className={styles.metricSub}>Lightning-fast transmission for time-sensitive messaging.</span>
            </div>
          </div>
          <div className={styles.metricsFeatures}>
            <div className={styles.metricFeature}>
              <span className={styles.featureDot} style={{ background: '#22c55e' }} />
              <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" width="16" height="16"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Live Delivery Tracking
            </div>
            <div className={styles.metricFeature}>
              <span className={styles.featureDot} style={{ background: '#3b82f6' }} />
              <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" width="16" height="16"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              REST & SMPP Connectivity
            </div>
            <div className={styles.metricFeature}>
              <span className={styles.featureDot} style={{ background: '#22c55e' }} />
              <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" width="16" height="16"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Full Unicode Support
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
          Bulk SMS is <strong>A2P (application-to-person) messaging</strong>  that enables businesses to send high volumes of text messages for authentication (OTP), transactional alerts, and promotional campaigns.
          Powered by carrier-grade connectivity and real-time delivery reports (DLRs), bulk SMS ensures reliable, scalable communication with customers across global networks.
        </p>
        <div className={styles.statCardsGrid}>
          <div className={`${styles.statCard} ${styles.statCardBlue}`}>
            <span className={styles.statValue}>98%+</span>
            <span className={styles.statLabel}>Open Rate</span>
            <span className={styles.statSub}>Messages typically read within 3 minutes.</span>
          </div>
          <div className={`${styles.statCard} ${styles.statCardGreen}`}>
            <span className={styles.statValue}>&lt;3s</span>
            <span className={styles.statLabel}>Average Delivery Time</span>
            <span className={styles.statSub}>Global delivery speed benchmark.</span>
          </div>
          <div className={`${styles.statCard} ${styles.statCardPurple}`}>
            <span className={styles.statValue}>190+</span>
            <span className={styles.statLabel}>Countries Covered</span>
            <span className={styles.statSub}>Worldwide SMS reach across international markets.</span>
          </div>
          <div className={`${styles.statCard} ${styles.statCardOrange}`}>
            <span className={styles.statValue}>100%</span>
            <span className={styles.statLabel}>Device Coverage</span>
            <span className={styles.statSub}>Compatible with all mobile phones — no app required.</span>
          </div>
        </div>
        <h3 className={styles.howWorksHeading}>How Bulk SMS Works</h3>
        <p className={styles.howWorksIntro}>
          Bulk SMS begins when your system initiates a request via API or SMPP. The message is processed, intelligently routed through premium carrier connections, and delivered with real-time status reporting — ensuring speed, scale, and reliability.
        </p>
        <div className={styles.workflowSteps}>
          <div className={styles.workflowStep}>
            <span className={styles.stepNum}>01</span>
            <span className={styles.stepText}>Trigger</span>
            <span className={styles.stepDesc}>Your application or system sends a request through REST API or SMPP.</span>
          </div>
          <div className={styles.workflowStep}>
            <span className={styles.stepNum}>02</span>
            <span className={styles.stepText}>Route</span>
            <span className={styles.stepDesc}>Intelligent routing selects the most optimal carrier path for each destination.</span>
          </div>
          <div className={styles.workflowStep}>
            <span className={styles.stepNum}>03</span>
            <span className={styles.stepText}>Deliver</span>
            <span className={styles.stepDesc}>The message reaches the recipient&apos;s device within seconds.</span>
          </div>
          <div className={styles.workflowStep}>
            <span className={styles.stepNum}>04</span>
            <span className={styles.stepText}>Confirm</span>
            <span className={styles.stepDesc}>Real-time delivery reports (DLRs) provide instant status confirmation.</span>
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
                  <strong>Exceptional Engagement</strong>
                  <span>98%+ open rate within minutes — significantly outperforming email (~20%) and push notifications (~50%).</span>
                </div>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" strokeLinecap="round" /></svg>
                <div>
                  <strong>Universal Accessibility</strong>
                  <span>No internet required. Works seamlessly across 2G, 3G, 4G, and 5G networks worldwide.</span>
                </div>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" strokeLinecap="round" /></svg>
                <div>
                  <strong>Complete Device Compatibility</strong>
                  <span>Delivers to every mobile phone — from basic feature devices to the latest smartphones.</span>
                </div>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" strokeLinecap="round" /></svg>
                <div>
                  <strong>Instant Transmission</strong>
                  <span>Built for time-sensitive communication such as OTPs, alerts, and urgent notifications.</span>
                </div>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" strokeLinecap="round" /></svg>
                <div>
                  <strong>Verified Delivery Reporting</strong>
                  <span>Carrier-confirmed delivery reports (DLRs) with real-time status updates and detailed error codes.</span>
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
                  <strong>Message Length</strong>
                  <span>Standard SMS supports 160 characters (GSM) or 70 characters (Unicode). Longer messages are automatically split and delivered as multi-part segments.</span>
                </div>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <div>
                  <strong>Pricing Structure</strong>
                  <span>SMS is billed per message segment, with volume-based pricing available. Rates may vary depending on destination country and message type.</span>
                </div>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <div>
                  <strong>Compliance Requirements</strong>
                  <span>Opt-in and opt-out compliance is mandatory. Integrated tools help manage consent records and unsubscribe preferences efficiently.</span>
                </div>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <div>
                  <strong>Sender ID Regulations</strong>
                  <span>Sender ID rules differ by country. Registration and regulatory compliance processes are handled seamlessly.</span>
                </div>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <div>
                  <strong>Media Limitations</strong>
                  <span>SMS supports text-only content. For images, videos, or interactive buttons, MMS or messaging apps such as WhatsApp are recommended.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Power Every Customer Touchpoint */}
      <section className={styles.touchpointSection}>
        <h2 className={styles.touchpointHeading}>Connect at Every Moment That Matters</h2>
        <p className={styles.touchpointSub}>
          From login verification to campaign engagement, reach customers instantly across their entire journey.
        </p>
        <div className={styles.touchpointGrid}>
          <Link href="#get-started" className={`${styles.touchpointCard} ${styles.touchpointBlue}`}>
            <div className={styles.touchpointIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Identity & Access Verification</h3>
            <p>Strengthen account security with multi-step authentication, one-time verification codes, secure login approvals, and transaction-level confirmations.</p>
            <span className={styles.touchpointLink}>Get Started →</span>
          </Link>
          <Link href="#get-started" className={`${styles.touchpointCard} ${styles.touchpointGreen}`}>
            <div className={styles.touchpointIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Order & Shipment Notifications</h3>
            <p>Keep customers informed with instant purchase confirmations, dispatch alerts, delivery status updates, and post-delivery communications for retail and logistics operations.</p>
            <span className={styles.touchpointLink}>Get Started →</span>
          </Link>
          <Link href="#get-started" className={`${styles.touchpointCard} ${styles.touchpointPurple}`}>
            <div className={styles.touchpointIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="1" y1="10" x2="23" y2="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Financial Activity Updates</h3>
            <p>Provide real-time account insights including payment acknowledgments, balance changes, fraud warnings, and sensitive activity notifications.</p>
            <span className={styles.touchpointLink}>Get Started →</span>
          </Link>
          <Link href="#get-started" className={`${styles.touchpointCard} ${styles.touchpointOrange}`}>
            <div className={styles.touchpointIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Promotional Outreach</h3>
            <p>Launch targeted campaigns for product drops, limited-time offers, seasonal promotions, and customer engagement initiatives.</p>
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
            <h3>Booking & Reminder Alerts</h3>
            <p>Reduce missed appointments with automated reminders for healthcare visits, service reservations, event registrations, and scheduled engagements.</p>
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
            <h3>Critical & Operational Alerts</h3>
            <p>Distribute urgent updates such as system notices, maintenance advisories, disruption alerts, safety notifications, and other high-priority communications.</p>
            <span className={styles.touchpointLink}>Get Started →</span>
          </Link>
        </div>
      </section>

      {/* Enterprise-Grade Features */}
      <section className={styles.enterpriseSection}>
        <h2 className={styles.enterpriseHeading}> Built for High-Performance Messaging Operations</h2>
        <p className={styles.enterpriseSub}>
          A complete messaging environment engineered to handle large-scale sending, detailed tracking, and ongoing optimization through enterprise-level architecture.
        </p>
        <div className={styles.enterpriseGrid}>
          <div className={`${styles.enterpriseCard} ${styles.enterpriseBlue}`}>
            <div className={styles.enterpriseIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>High Delivery Assurance & Real-Time Status</h3>
            <p>Premium carrier routing ensures maximum message reachability, with verified status updates for every submission — including delivered, failed, or in-progress reports.</p>
          </div>
          <div className={`${styles.enterpriseCard} ${styles.enterpriseGreen}`}>
            <div className={styles.enterpriseIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Worldwide Reach with Branded Sender Options</h3>
            <p>Access 190+ destinations globally with region-compliant sender configurations, including alphanumeric IDs, long numbers, and short codes tailored to local regulations.</p>
          </div>
          <div className={`${styles.enterpriseCard} ${styles.enterprisePurple}`}>
            <div className={styles.enterpriseIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="8 6 2 12 8 18" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Flexible API Connectivity (REST & SMPP)</h3>
            <p>Integrate effortlessly using a modern REST interface or leverage SMPP for high-volume, enterprise-scale messaging — complete with intelligent queuing and automatic retry mechanisms.</p>
          </div>
          <div className={`${styles.enterpriseCard} ${styles.enterpriseOrange}`}>
            <div className={styles.enterpriseIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16v16H4z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 8h8M8 12h8M8 16h4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Advanced Messaging Capabilities</h3>
            <p>Comprehensive support for multilingual Unicode content (Arabic, Chinese, emojis, and more), automatic long-message segmentation, and enhanced TLV/UDH parameter handling for complex use cases.</p>
          </div>
          <div className={`${styles.enterpriseCard} ${styles.enterpriseRed}`}>
            <div className={styles.enterpriseIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 3v5h-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Throughput Management & TPS Control</h3>
            <p>Define message-per-second limits, apply intelligent queuing policies, and dynamically scale traffic to match operational demand.</p>
          </div>
          <div className={`${styles.enterpriseCard} ${styles.enterpriseTeal}`}>
            <div className={styles.enterpriseIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Number Intelligence & Carrier Validation</h3>
            <p>Verify number validity, identify carrier networks, and confirm active status prior to sending to enhance delivery performance and reduce waste.</p>
          </div>
          <div className={`${styles.enterpriseCard} ${styles.enterpriseViolet}`}>
            <div className={styles.enterpriseIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Interactive & Two-Way Messaging</h3>
            <p>Enable inbound responses where supported to power conversational workflows, automated keyword triggers, and customer engagement loops.</p>
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
            <h3>Smart Templates & Link Tracking</h3>
            <p>Create dynamic message templates with variable placeholders, personalized fields, and trackable short links for measurable engagement.</p>
          </div>
          <div className={`${styles.enterpriseCard} ${styles.enterpriseGreen}`}>
            <div className={styles.enterpriseIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 21H4V4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18 9v6M13 14v2M8 11v5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Webhooks & Live Performance Monitoring</h3>
            <p>Stream delivery events directly into your systems using webhooks and monitor real-time dashboards with detailed insights on latency, costs, and campaign metrics.</p>
          </div>
          <div className={`${styles.enterpriseCard} ${styles.enterpriseSlate}`}>
            <div className={styles.enterpriseIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Enterprise Security & Data Protection</h3>
            <p>Secure transmission through encrypted channels, compliance-ready security frameworks, and disciplined data governance practices — ensuring information remains protected at every stage.</p>
          </div>
        </div>
      </section>

      <GetStartedForm />

      <Footer />
    </main>
  )
}
