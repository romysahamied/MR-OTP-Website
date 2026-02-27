import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from './WhatsApp.module.css'

const Header = dynamic(() => import('@/components/Header'), { ssr: true })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true })

export const metadata: Metadata = {
  title: 'WhatsApp Business | Mr-OTP',
  description: 'Transform your customer engagement with WhatsApp Business API. Automate and personalize interactions on the world\'s most popular messaging platform.',
}

export default function WhatsAppPage() {
  return (
    <main className={styles.wrapper}>
      <Header />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeadline}>
            End-to-end customer communication built on Security, Stability, and Trust
          </h1>
          <p className={styles.heroSubtitle}>
          Redefine the way you connect with customers using the WhatsApp Business API — streamline communication through intelligent automation while delivering tailored experiences on the world’s leading chat platform.
          </p>
          <p className={styles.heroSubtext}>
          Expand your presence and interact meaningfully with more than two billion users worldwide.
          </p>
          <Link href="/get-started?from=whatsapp" className={styles.ctaBtn}>
            Get Started
          </Link>
        </div>
      </section>

      <section className={styles.messagingSection}>
        <div className={styles.messagingGrid}>
          <div className={styles.messagingContent}>
            <h2 className={styles.messagingHeading}>
            Secure and Feature-Rich Messaging Built for Personalized Client Connections
            </h2>
            <p className={styles.messagingText}>
            Engage customers on the platform they prefer at every stage of their journey—effortlessly, safely, and consistently. Share rich media like images, videos, and links to craft interactive, tailored messages that inspire action.
            </p>
          </div>
          <div className={styles.messagingVisual}>
            <div className={styles.messagingImages}>
              <div className={styles.messagingImageWrap}>
                <Image
                  src="/whatsapp1.png"
                  alt="WhatsApp Business example 1"
                  width={280}
                  height={350}
                  className={styles.messagingImage}
                  sizes="280px"
                />
              </div>
              <div className={styles.messagingImageWrap}>
                <Image
                  src="/whatsapp2.png"
                  alt="WhatsApp Business example 2"
                  width={280}
                  height={350}
                  className={styles.messagingImage}
                  sizes="280px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.specialSection}>
        <h2 className={styles.specialMainHeading}>
        What Makes WhatsApp Business Stand Out from the Rest?
        </h2>
        <div className={styles.specialGrid}>
          <div className={styles.specialContent}>
            <div className={styles.specialBlock}>
              <div className={styles.specialBlockIcon} aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className={styles.specialBlockTitle}> Elevated, Bespoke Customer Engagement</h3>
              <p className={styles.specialBlockText}>
             Create exceptional moments across the entire customer lifecycle with thoughtfully crafted, one-to-one communication. Deliver responsive two-way support, share exclusive updates with subscribed audiences, and provide essential notifications—from purchase confirmations to delivery milestones—through seamless, personalized interactions designed to strengthen loyalty and drive growth.
              </p>
            </div>
            <div className={styles.specialBlock}>
              <div className={styles.specialBlockIcon} aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className={styles.specialBlockTitle}>Interactive Multimedia Messaging</h3>
              <p className={styles.specialBlockText}>
              Blend compelling copy with visuals and action-driven buttons to create impactful, easy-to-understand communication. Craft detailed messages of up to 1,000 characters that capture attention, encourage response, and guide customers toward meaningful action.
              </p>
            </div>
          </div>
          <div className={styles.specialVisual}>
            <Image
              src="/whatsapp3.png"
              alt="WhatsApp Business chat example"
              width={280}
              height={350}
              className={styles.specialImage}
              sizes="(max-width: 768px) 260px, (max-width: 480px) 240px, 280px"
            />
          </div>
        </div>
      </section>

      <section className={styles.supportSection}>
        <h2 className={styles.supportMainHeading}>
          Efficient Customer Support
        </h2>
        <div className={styles.supportGrid}>
          <div className={styles.supportCard}>
            <Image
              src="/whatsapp4.png"
              alt="WhatsApp Business automated conversation example"
              width={220}
              height={275}
              className={styles.supportCardImage}
              sizes="(max-width: 768px) 200px, (max-width: 480px) 180px, 220px"
            />
            <h3 className={styles.supportCardTitle}>Intelligent Chat Automation</h3>
            <p className={styles.supportCardText}>
            Leverage smart virtual assistants to instantly resolve routine inquiries, allowing your team to dedicate their expertise to high-value, complex customer needs.
            </p>
          </div>
          <div className={styles.supportCard}>
            <Image
              src="/whatsapp5.png"
              alt="WhatsApp Business 24/7 support example"
              width={220}
              height={275}
              className={styles.supportCardImage}
              sizes="(max-width: 768px) 200px, (max-width: 480px) 180px, 220px"
            />
            <h3 className={styles.supportCardTitle}>24/7 Assisstance</h3>
            <p className={styles.supportCardText}>
            Provide continuous assistance day and night to minimize wait times and elevate the overall customer experience with faster, more responsive service.
            </p>
          </div>
          <div className={styles.supportCard}>
            <Image
              src="/whatsapp6.png"
              alt="WhatsApp Business tools example"
              width={220}
              height={275}
              className={styles.supportCardImage}
              sizes="(max-width: 768px) 200px, (max-width: 480px) 180px, 220px"
            />
            <h3 className={styles.supportCardTitle}>Smart Business Features</h3>
            <p className={styles.supportCardText}>
            Activate automated welcomes, instant reply shortcuts, and smart availability messages to engage customers faster, reduce friction, and turn conversations into measurable results. </p>
          </div>
        </div>
      </section>

      <section className={styles.securitySection}>
        <h2 className={styles.securityMainHeading}>
        Built on Privacy and Reliability
        </h2>
        <div className={styles.securityGrid}>
          <div className={styles.securityContent}>
            <div className={styles.securityFeature}>
              <div className={styles.securityFeatureIcon} aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className={styles.securityFeatureTitle}>Authentic Business Identity</h3>
              <p className={styles.securityFeatureText}>
              Showcase your brand with a confirmed identity, giving customers quick access to accurate and trustworthy company details.
              </p>
            </div>
            <div className={styles.securityFeature}>
              <div className={styles.securityFeatureIcon} aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className={styles.securityFeatureTitle}>Conversations Protected at Every Touchpoint</h3>
              <p className={styles.securityFeatureText}>
              Protect every message with private, encrypted delivery so conversations stay strictly between you and your customers.
              </p>
            </div>
          </div>
          <div className={styles.securityVisual}>
            <Image
              src="/whatsapp7.png"
              alt="WhatsApp Business Security and Trust"
              width={400}
              height={500}
              className={styles.securityImage}
              sizes="(max-width: 768px) 260px, (max-width: 480px) 240px, 400px"
            />
          </div>
        </div>
      </section>

      <section className={styles.powerfulSection}>
        <div className={styles.powerfulInner}>
          <h2 className={styles.powerfulMainHeading}>
          Power Every Customer Interaction with Mr-OTP and WhatsApp
          </h2>
          <div className={styles.powerfulGrid}>
          <div className={styles.powerfulCard}>
            <h3 className={styles.powerfulCardTitle}>Automated Multi-Channel Failover</h3>
            <p className={styles.powerfulCardText}>
            If WhatsApp transmission fails, Mr-OTP reroutes the message via SMS, maintaining delivery continuity and engagement reliability.
            </p>
          </div>
          <div className={styles.powerfulCard}>
            <h3 className={styles.powerfulCardTitle}> Integrated Martech Ecosystem </h3>
            <p className={styles.powerfulCardText}>
            Embed WhatsApp Business API into your existing marketing infrastructure to enable synchronized, data-driven customer engagement.
            </p>
          </div>
          <div className={styles.powerfulCard}>
            <h3 className={styles.powerfulCardTitle}>Intelligent Performance Tracking</h3>
            <p className={styles.powerfulCardText}>
            Gain clarity through robust analytics that empower continuous improvement and sustained campaign success.
            </p>
          </div>
          <div className={styles.powerfulCard}>
            <h3 className={styles.powerfulCardTitle}>Built for Developers</h3>
            <p className={styles.powerfulCardText}>
            Deploy WhatsApp Business quickly using structured API references, clear integration guides, and ongoing engineering support.
            </p>
          </div>
        </div>
        </div>
      </section>

      <section className={styles.experienceSection}>
        <h2 className={styles.experienceMainHeading}>
        Drive Customer Excellence and Operational Productivity
        </h2>
        <p className={styles.experienceSubtext}>
        Centralize every customer conversation within a single, unified engagement hub.
        </p>
        <div className={styles.experienceGrid}>
          <div className={styles.experienceCard}>
            <div className={styles.experienceCardIcon} aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className={styles.experienceCardText}>Optimize multi-agent coordination and smooth conversation routing.</p>
          </div>
          <div className={styles.experienceCard}>
            <div className={styles.experienceCardIcon} aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className={styles.experienceCardText}>Organize your channels, design message templates, and keep conversations running 24/7 with smart automation.
            </p>
          </div>
          <div className={styles.experienceCard}>
            <div className={styles.experienceCardIcon} aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className={styles.experienceCardText}>Enable rapid replies and seamless access to supporting documentation.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.simplerSection}>
        <div className={styles.simplerInner}>
          <div className={styles.simplerContent}>
            <h2 className={styles.simplerHeading}>
            Unlock the Full Potential of WhatsApp Business
            </h2>
            <p className={styles.simplerSubtext}>
            Our intelligent communication solutions give you the capabilities needed to accelerate growth and achieve your targets.
            </p>
          </div>
          <Link href="/get-started?from=whatsapp" className={styles.simplerCta}>
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
