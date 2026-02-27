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
            Enhance Global Connections, One Call at a Time
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
              Voice – Accessible, Seamless & Personalized Communication
            </h2>
            <p className={styles.useCasesText}>
              With just a number you can reach anyone with a phone (mobile or landline) to ensure your brand&apos;s voice is heard loud anywhere in the world.
            </p>
            <p className={styles.useCasesText}>
              Mr-OTP Voice solutions let you add a personalized touch with <strong>local languages</strong> and stand out by including names and other personal details in the call, directly from your CRM system.
            </p>
            <p className={styles.useCasesText}>
              Enhance your support system, make calls, send OTPs, notifications or marketing messages.
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
          Multiple Solutions for Numerous Use Cases
        </h2>
        <div className={styles.solutionsGrid}>
          <div className={styles.solutionsColumn}>
            <div className={styles.solutionItem}>
              <h3 className={styles.solutionTitle}>Text-to-Speech</h3>
              <p className={styles.solutionText}>
                Scale calls by converting text to speech in multiple languages and dialects. Listen to users in 150+ languages with automatic speech recognition.
              </p>
            </div>
            <div className={styles.solutionItem}>
              <h3 className={styles.solutionTitle}>Voice OTP</h3>
              <p className={styles.solutionText}>
                Voice OTP verifies new user registrations on apps or websites. Play a sequence of digits; users confirm the sequence to verify their number.
              </p>
            </div>
            <div className={styles.solutionItem}>
              <h3 className={styles.solutionTitle}>Number Masking</h3>
              <p className={styles.solutionText}>
                Number Masking API enables communication between two parties without revealing their phone numbers, keeping personal data safe.
              </p>
            </div>
          </div>
          <div className={styles.solutionsColumn}>
            <div className={styles.solutionItem}>
              <h3 className={styles.solutionTitle}>Interactive Voice Response (IVR)</h3>
              <p className={styles.solutionText}>
                Run inbound and outbound polls and route calls via DTMF key prompts to users, departments, or mobile devices.
              </p>
            </div>
            <div className={styles.solutionItem}>
              <h3 className={styles.solutionTitle}>Flash Call</h3>
              <p className={styles.solutionText}>
                Flash call authenticates a mobile number without user action. The process uses digits from the incoming call as the passcode and auto-fills the field for a seamless experience.
              </p>
            </div>
            <div className={styles.solutionItem}>
              <h3 className={styles.solutionTitle}>SIP Trunking</h3>
              <p className={styles.solutionText}>
                SIP Trunking runs voice over an internet connection, so you can connect with customers worldwide with better cost control.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.billingSection}>
        <div className={styles.billingCard}>
          <div className={styles.billingCardContent}>
            <div className={styles.billingColumn}>
              <h3 className={styles.billingCardTitle}>Efficient Per-Second Billing</h3>
              <p className={styles.billingCardText}>
                Voice services are billed per second—pay only for the time you use. Available in most countries; contact Sales for details.
              </p>
            </div>
            <div className={styles.billingColumn}>
              <h3 className={styles.billingCardTitle}>Intelligent Automatic Routing</h3>
              <p className={styles.billingCardText}>
                Calls are routed through a proprietary system that evaluates routes in real time for optimal deliverability.
              </p>
            </div>
          </div>
          <div className={styles.billingCardActions}>
            <Link href="/contact" className={styles.billingCta}>Talk to an Expert</Link>
          </div>
        </div>
      </section>

      <section className={styles.engageSection}>
        <p className={styles.engageSubheading}>Voice for Every Step of the Way</p>
        <h2 className={styles.engageHeading}>
          Engage and Support Through the Customer Journey
        </h2>
      </section>

      <section className={styles.featuresSection}>
        <div className={styles.featuresGrid}>
          <div className={styles.featuresColumn}>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Customer Notifications</h3>
              <p className={styles.featureText}>
                Add value with personalized reminders, invites, and critical time-sensitive alerts.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Contactless Customer Service</h3>
              <p className={styles.featureText}>
                Keep interactions safe with convenient mobile connectivity for deliveries, pickups, viewings, and more.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Onboarding and Security</h3>
              <p className={styles.featureText}>
                Authenticate new and existing customers by delivering pins and passcodes in various ways.
              </p>
            </div>
          </div>
          <div className={styles.featuresColumn}>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Customer Support</h3>
              <p className={styles.featureText}>
                Provide an accessible, cost-efficient channel for two-way troubleshooting.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Promotions</h3>
              <p className={styles.featureText}>
                Promote special offers and new products, follow up with interested customers, and manage call center workload efficiently.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Surveys</h3>
              <p className={styles.featureText}>
                Collect feedback after a purchase or service. Learn what customers like or dislike to improve satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.voiceCtaSection}>
        <div className={styles.voiceCtaCard}>
          <div className={styles.voiceCtaContent}>
            <h2 className={styles.voiceCtaHeading}>
              Ready to Reach Your Audience?
            </h2>
            <ul className={styles.voiceCtaList}>
              <li>Choose between Voice API solutions and an easy-to-use no-code interface</li>
              <li>CRM and third-party integrations</li>
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
