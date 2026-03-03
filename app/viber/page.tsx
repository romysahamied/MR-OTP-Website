import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from './Viber.module.css'

const Header = dynamic(() => import('@/components/Header'), { ssr: true })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true })

export const metadata: Metadata = {
  title: 'Viber Business | Messaging for Your Brand | Mr-OTP',
  description: 'The ultimate tool for business communication. Establish direct brand-to-consumer connections with Viber Business. Engage, support, and transact on one platform.',
}

export default function ViberPage() {
  return (
    <main className={styles.wrapper}>
      <Header />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeadline}>
            The Smarter Way to Power Business Conversations
          </h1>
          <p className={styles.heroSubheading}>
            Build Direct, High-Impact Customer Relationships
          </p>
          <p className={styles.heroSubtitle}>
            A unified communication platform designed to engage audiences, provide real-time support, and enable seamless transactions—driving brand visibility, long-term loyalty, and measurable conversions through both broadcast and interactive messaging, powered by intelligent automation.
          </p>
          <Link href="/get-started?from=viber" className={styles.ctaBtn}>
            Get Started
          </Link>
        </div>
      </section>

      <section className={styles.transactionalSection}>
        <div className={styles.transactionalGrid}>
          <div className={styles.transactionalContent}>
            <h2 className={styles.transactionalHeading}>
              Turn Every Interaction into Loyalty
            </h2>
            <p className={styles.transactionalText}>
              Customer experience drives retention. Connect with your audience through meaningful, personalized conversations delivered via our powerful Viber 2-way API or an easy-to-use platform.
            </p>
            <p className={styles.transactionalText}>
              From first contact to long-term retention, keep every message relevant—and every customer engaged. </p>
            <h3 className={styles.transactionalSubheading}>
              Enhanced Messaging with Interactive CTAs
            </h3>
            <p className={styles.transactionalText}>
              Transform standard text communication into visually compelling experiences by incorporating images and actionable buttons. Deliver structured, high-impact messages of up to 1,000 characters designed to increase engagement and response rates.
            </p>
          </div>
          <div className={styles.transactionalVisual}>
            <div className={styles.transactionalImageWrap}>
              <Image
                src="/viber1.png"
                alt="Viber Business transactional messaging example"
                width={400}
                height={500}
                className={styles.transactionalImage}
                sizes="(max-width: 768px) 260px, (max-width: 480px) 240px, 400px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.statsBanner}>
        <div className={styles.statsBannerContent}>
          <div className={styles.statsBannerIcon}>
            <Image
              src="/viber-icon.png"
              alt="Viber"
              width={48}
              height={48}
              className={styles.statsBannerIconImg}
              sizes="(max-width: 480px) 40px, (max-width: 768px) 44px, 48px"
            />
          </div>
          <div className={styles.statsBannerText}>
            <span className={styles.statsBannerValue}>A Worldwide Footprint Spanning 190+ Countries</span>
            <span className={styles.statsBannerSub}>Engaging over 1.1 billion Viber users across global markets.</span>
          </div>
          <Link href="/get-started?from=viber" className={styles.statsBannerCta}>
            Get Started
          </Link>
        </div>
      </section>

      <section className={styles.trustSection}>
        <h2 className={styles.trustMainHeading}>
          Powering Secure, Reliable Interactions Through Viber
        </h2>
        <div className={styles.trustGrid}>
          <div className={styles.trustContent}>
            <h3 className={styles.trustHeading}>
              Verified Business Presence on Viber
            </h3>
            <p className={styles.trustText}>
              Establish a recognized and authenticated business profile that strengthens customer confidence and reinforces your brand identity on Viber.
            </p>
            <p className={styles.trustText}>
              Your official account can be discovered directly within the platform, featuring a branded profile page complete with visuals, company details, contact information, website links, and an authentication indicator.
            </p>
            <p className={styles.trustText}>
              Enhance brand exposure, improve transparency, and stay consistently accessible to your audience throughout their entire journey.
            </p>
            <p className={styles.trustText}>
              Users can easily search for these accounts and view a dedicated page with images, website, contacts, description, and verification badge. Increase brand visibility and be there for your customers every step of the way.
            </p>
          </div>
          <div className={styles.trustVisual}>
            <div className={styles.trustImagesRow}>
              <div className={styles.trustImageWrap}>
                <Image
                  src="/viber2.png"
                  alt="Viber chat list with verified business"
                  width={280}
                  height={500}
                  className={styles.trustImage}
                  sizes="(max-width: 480px) 140px, (max-width: 768px) 200px, 280px"
                />
              </div>
              <div className={styles.trustImageWrap}>
                <Image
                  src="/viber3.png"
                  alt="Viber business profile page"
                  width={280}
                  height={500}
                  className={styles.trustImage}
                  sizes="(max-width: 480px) 140px, (max-width: 768px) 200px, 280px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.businessInboxSection}>
        <div className={styles.businessInboxGrid}>
          <div className={styles.businessInboxVisual}>
            <div className={styles.businessInboxImagesRow}>
              <div className={styles.businessInboxImageItem}>
                <Image
                  src="/viber4.png"
                  alt="Viber Chats screen with Business Inbox"
                  width={280}
                  height={500}
                  className={styles.businessInboxImage}
                  sizes="(max-width: 480px) 140px, (max-width: 768px) 200px, 280px"
                />
              </div>
              <div className={styles.businessInboxImageItem}>
                <Image
                  src="/viber5.png"
                  alt="Viber Business Inbox – messages from businesses in one place"
                  width={280}
                  height={500}
                  className={styles.businessInboxImage}
                  sizes="(max-width: 480px) 140px, (max-width: 768px) 200px, 280px"
                />
              </div>
            </div>
          </div>
          <div className={styles.businessInboxContent}>
            <h2 className={styles.businessInboxHeading}>
              Business Inbox – Designed for Seamless Customer Experience
            </h2>
            <p className={styles.businessInboxText}>
              A centralized folder within the primary chat interface where users can effortlessly access all brand interactions in one organized space.
            </p>
            <p className={styles.businessInboxText}>
              Positioned prominently and clearly separated from personal conversations, it simplifies navigation, improves discoverability, and creates a cleaner, more intuitive messaging experience.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.seamlessSection}>
        <h2 className={styles.seamlessHeading}>
          Next-Generation Communication Starts with Mr-OTP & Viber
        </h2>
        <div className={styles.seamlessCards}>
          <div className={styles.seamlessCard}>
            <div className={styles.seamlessCardIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h3 className={styles.seamlessCardTitle}>SMS Backup Delivery</h3>
            <p className={styles.seamlessCardText}>
              Activate SMS as a secondary channel to protect your most important communications. </p>
          </div>
          <div className={styles.seamlessCard}>
            <div className={styles.seamlessCardIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 20V10M12 20V4M6 20v-6" />
              </svg>
            </div>
            <h3 className={styles.seamlessCardTitle}> Turn Insights Into Results</h3>
            <p className={styles.seamlessCardText}>
              Access live engagement metrics—including sends, opens, and reads—to refine strategy and improve campaign ROI.
            </p>
          </div>
          <div className={styles.seamlessCard}>
            <div className={styles.seamlessCardIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </div>
            <h3 className={styles.seamlessCardTitle}>Seamless Martech Connectivity</h3>
            <p className={styles.seamlessCardText}>
              Connect the Viber Business API to your existing marketing technology stack to create a fully synchronized communication infrastructure.
            </p>
          </div>
          <div className={styles.seamlessCard}>
            <div className={styles.seamlessCardIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <path d="M8 10h.01M12 10h.01M16 10h.01" />
              </svg>
            </div>
            <h3 className={styles.seamlessCardTitle}>Smart Away Responses</h3>
            <p className={styles.seamlessCardText}>
              Keep conversations flowing even when you’re unavailable by providing instant, helpful updates automatically.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaSectionInner}>
          <h2 className={styles.ctaHeading}>
          Start Engaging Your Audience Today
          </h2>
          <p className={styles.ctaSubtext}>
          Deliver campaigns, service alerts, and real-time updates through Viber Business.
          </p>
          <Link href="/get-started?from=viber" className={styles.ctaButton}>
            Talk to an Expert
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
