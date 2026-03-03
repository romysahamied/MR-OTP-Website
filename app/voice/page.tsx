import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from './Voice.module.css'

const Header = dynamic(() => import('@/components/Header'), { ssr: true })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true })

export const metadata: Metadata = {
  title: 'Voice | Carrier-Grade Calling Platform | Mr-OTP',
  description: 'Enhance global connections with customized voice calling experiences. Converse and convert through a carrier-grade platform.',
}

export default function VoicePage() {
  return (
    <main className={styles.wrapper}>
      <Header />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeadline}>
            Empowering Global Communication Through Every Call
          </h1>
          <p className={styles.heroSubtitle}>
            Converse and convert with customized voice calling experiences through a carrier-grade platform.
          </p>
          <Link href="/get-started?from=voice" className={styles.ctaBtn}>
            Get Started
          </Link>
        </div>
      </section>

      <section className={styles.useCasesSection}>
        <div className={styles.useCasesGrid}>
          <div className={styles.useCasesContent}>
            <h2 className={styles.useCasesHeading}>
              Voice Communication – Direct, Human & Globally Connected
            </h2>
            <p className={styles.useCasesText}>
              Reach any phone worldwide—mobile or landline—using just a number, and deliver your message with clarity and impact wherever your customers are located.
            </p>
            <p className={styles.useCasesText}>
              Mr-OTP Voice services enable customized calling experiences with localized language options and dynamic personalization, including names and relevant customer data pulled directly from your CRM platform.
            </p>
            <p className={styles.useCasesText}>
              Strengthen customer support operations, initiate outbound calls, deliver one-time passwords, share critical alerts, or run voice-based marketing campaigns—all through a scalable and intelligent voice infrastructure.
            </p>
          </div>
          <div className={styles.useCasesVisual}>
            <div className={styles.voiceImageWrap}>
              <Image
                src="/voice1.png"
                alt="Voice calling interface – IVR and dial pad example"
                width={400}
                height={500}
                className={styles.voiceImage}
                sizes="(max-width: 768px) 260px, (max-width: 480px) 240px, 400px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.solutionsSection}>
        <h2 className={styles.solutionsHeading}>
          Versatile Solutions for Diverse Business Needs
        </h2>
        <div className={styles.solutionsGrid}>
          <div className={styles.solutionsColumn}>
            <div className={styles.solutionItem}>
              <h3 className={styles.solutionTitle}>Text-to-Speech Capabilities</h3>
              <p className={styles.solutionText}>
                Expand your outbound calling capacity by transforming written content into natural-sounding voice messages across multiple languages and regional accents. Capture and interpret customer responses in over 150 languages using advanced speech recognition technology.
              </p>
            </div>
            <div className={styles.solutionItem}>
              <h3 className={styles.solutionTitle}>Voice-Based OTP Verification</h3>
              <p className={styles.solutionText}>
                Authenticate new user sign-ups by delivering a one-time passcode through an automated voice call. A numeric code is read aloud, and users enter it to confirm their phone number.
              </p>
            </div>
            <div className={styles.solutionItem}>
              <h3 className={styles.solutionTitle}>Secure Number Masking</h3>
              <p className={styles.solutionText}>
                Enable seamless communication between two users without exposing their actual phone numbers. Our API protects personal contact details while maintaining uninterrupted connectivity.
              </p>
            </div>
          </div>
          <div className={styles.solutionsColumn}>
            <div className={styles.solutionItem}>
              <h3 className={styles.solutionTitle}>Smart IVR Call Routing System</h3>
              <p className={styles.solutionText}>
                Design automated voice workflows that manage inbound and outbound polling while routing calls dynamically through DTMF-based inputs to departments, users, or endpoints.
              </p>
            </div>
            <div className={styles.solutionItem}>
              <h3 className={styles.solutionTitle}>Flash Call Authentication</h3>
              <p className={styles.solutionText}>
                Verify mobile numbers instantly without requiring user input. The system captures digits from an incoming call and automatically populates the verification field for a frictionless login experience.
              </p>
            </div>
            <div className={styles.solutionItem}>
              <h3 className={styles.solutionTitle}>SIP Trunking</h3>
              <p className={styles.solutionText}>
                Enable internet-based voice connectivity to reach customers globally while optimizing operational costs and call efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.billingSection}>
        <div className={styles.billingCard}>
          <div className={styles.billingCardContent}>
            <div className={styles.billingColumn}>
              <h3 className={styles.billingCardTitle}>Precise Per-Second Billing</h3>
              <p className={styles.billingCardText}>
                Pay strictly for actual usage with second-by-second charging. Offered across most regions—connect with our Sales team for country-specific availability.
              </p>
            </div>
            <div className={styles.billingColumn}>
              <h3 className={styles.billingCardTitle}>Real-Time Route Optimization</h3>
              <p className={styles.billingCardText}>
              Our advanced routing infrastructure continuously evaluates carrier paths and traffic conditions, automatically selecting the most reliable route for superior call completion rates.
              </p>
            </div>
          </div>
          <div className={styles.billingCardActions}>
            <Link href="/contact" className={styles.billingCta}>Talk to an Expert</Link>
          </div>
        </div>
      </section>

      <section className={styles.engageSection}>
        <p className={styles.engageSubheading}>End-to-End Voice Engagement</p>
        <h2 className={styles.engageHeading}>
        Deliver consistent communication and proactive support across every phase of the customer lifecycle.
        </h2>
      </section>

      <section className={styles.featuresSection}>
        <div className={styles.featuresGrid}>
          <div className={styles.featuresColumn}>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Proactive Customer Communication</h3>
              <p className={styles.featureText}>
              Automate tailored reminders, event invitations, and mission-critical notifications to drive engagement and reliability.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Safe, Seamless Interactions</h3>
              <p className={styles.featureText}>
              Enable contactless communication for deliveries, curbside pickups, appointments, and on-site visits—simple, secure, and efficient.</p>
            </div>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Secure Sign-Ups, Safer Logins</h3>
              <p className={styles.featureText}>
              Protect accounts from day one by sending one-time codes and verification credentials via flexible delivery methods.
               </p>
            </div>
          </div>
          <div className={styles.featuresColumn}>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Support That’s Always Within Reach</h3>
              <p className={styles.featureText}>
              Enable real-time, two-way communication to resolve issues quickly and affordably.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Scalable Promotional Outreach</h3>
              <p className={styles.featureText}>
              Drive product awareness, automate follow-ups, and balance call center capacity with intelligent campaign management.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Turn Feedback into Growth</h3>
              <p className={styles.featureText}>
              Collect insights after every interaction to discover what customers love—and what needs improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.voiceCtaSection}>
        <div className={styles.voiceCtaCard}>
          <div className={styles.voiceCtaContent}>
            <h2 className={styles.voiceCtaHeading}>
              Start Engaging Your Audience Today
            </h2>
            <ul className={styles.voiceCtaList}>
              <li>Use powerful Voice APIs or launch quickly with a no-code interface.</li>
              <li>Connect with your CRM and third-party tools for seamless automation.</li>
            </ul>
          </div>
          <div className={styles.voiceCtaVisual}>
            <div className={styles.voiceCtaIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="12" y1="19" x2="12" y2="23" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="8" y1="23" x2="16" y2="23" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className={styles.voiceCtaWaves}>
              <span></span><span></span><span></span><span></span><span></span>
            </div>
            <Link href="/contact" className={styles.voiceCtaBtn}>Talk to an Expert</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
