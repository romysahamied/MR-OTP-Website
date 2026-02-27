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
            The Ultimate Tool for Business Communication
          </h1>
          <p className={styles.heroSubheading}>
            Establish direct brand-to-consumer connections
          </p>
          <p className={styles.heroSubtitle}>
            One platform that engages, supports, and transacts—achieving awareness, loyalty, and conversion with one-way and two-way conversations, plus automated bots.
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
              Engage & Delight at Every Step of the Customer Journey
            </h2>
            <p className={styles.transactionalText}>
              Better customer experience equals loyal clients. Delight your customers through the entire journey with meaningful, personalized messages using our Viber for Business 2-way API or a user-friendly interface.
            </p>
            <h3 className={styles.transactionalSubheading}>
              Rich message and CTA content
            </h3>
            <p className={styles.transactionalText}>
              Augment your text messages with images and buttons to send better looking, more engaging messages up to 1,000 characters.
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
            <span className={styles.statsBannerValue}>1.1 Billion Viber users</span>
            <span className={styles.statsBannerSub}>worldwide in 190+ countries</span>
          </div>
          <Link href="/get-started?from=viber" className={styles.statsBannerCta}>
            Get Started
          </Link>
        </div>
      </section>

      <section className={styles.trustSection}>
        <h2 className={styles.trustMainHeading}>
          Viber Tools for Reliability and Trust
        </h2>
        <div className={styles.trustGrid}>
          <div className={styles.trustContent}>
            <h3 className={styles.trustHeading}>
              Trusted Commercial Account
            </h3>
            <p className={styles.trustText}>
              Build credibility and trust with customers through a verified commercial account that represents your business on Viber.
            </p>
            <p className={styles.trustText}>
              Users can easily search for these accounts and view a dedicated page with images, website, contacts, description, and verification badge. Increase brand visibility and be there for your customers every step of the way.
            </p>
          </div>
          <div className={styles.trustVisual}>
            <div className={styles.trustPhones}>
              <div className={`${styles.phoneMockup} ${styles.trustPhoneLeft}`}>
                <div className={styles.phoneStatusBar}>
                  <span>09:30</span>
                  <span>ABC Bank</span>
                </div>
                <div className={styles.trustPhoneTabs}>
                  <span className={styles.trustTabActive}>Chats</span>
                  <span>Messages</span>
                  <span>Channels</span>
                  <span>Businesses</span>
                </div>
                <div className={styles.trustChatList}>
                  <div className={styles.trustChatItem}>
                    <span>Amazing Cookies</span>
                    <span className={styles.trustChatDate}>28.08.2024</span>
                  </div>
                  <div className={`${styles.trustChatItem} ${styles.trustChatVerified}`}>
                    <span>ABC Bank ✓</span>
                    <span className={styles.trustChatDate}>19.07.2024</span>
                  </div>
                  <div className={styles.trustChatItem}>
                    <span>Apple Cobbler</span>
                  </div>
                </div>
              </div>
              <div className={`${styles.phoneMockup} ${styles.trustPhoneRight}`}>
                <div className={styles.phoneStatusBar}>
                  <span>09:30</span>
                  <span>ABC BANK</span>
                </div>
                <div className={styles.trustProfileHeader}>
                  <div className={styles.trustProfileLogo}>A</div>
                  <span>ABC BANK</span>
                </div>
                <div className={styles.trustProfileBanner}>ABC BANK Business Account</div>
                <div className={styles.trustProfileSection}>
                  <strong>Chats</strong>
                  <p>ABC BANK — Your Trust, Our Commitment.</p>
                </div>
                <div className={styles.trustProfileSection}>
                  <strong>Address</strong>
                  <p>Plaza, Northwest, Atlanta, GA 30313, USA</p>
                </div>
                <div className={styles.trustProfileSection}>
                  <strong>About</strong>
                  <p>We at ABC Bank believe in strong and personal connection with our customers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.businessInboxSection}>
        <div className={styles.businessInboxGrid}>
          <div className={styles.businessInboxVisual}>
            <div className={styles.businessInboxImageWrap}>
              <Image
                src="/viber-business-inbox.png"
                alt="Viber Business Inbox – messages from businesses in one place"
                width={600}
                height={400}
                className={styles.businessInboxImage}
                sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 550px"
              />
            </div>
          </div>
          <div className={styles.businessInboxContent}>
            <h2 className={styles.businessInboxHeading}>
              Business Inbox – Convenient for Users and Effective for Brands
            </h2>
            <p className={styles.businessInboxText}>
              A single end-user folder, accessible directly from the regular Chats screen, where users can keep all their brand conversations.
            </p>
            <p className={styles.businessInboxText}>
              <strong className={styles.businessInboxBold}>Always pinned to top, not competing with personal chats</strong> – easily discoverable for more open rates.
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
            <h3 className={styles.seamlessCardTitle}>SMS Fallback</h3>
            <p className={styles.seamlessCardText}>
              Guarantee deliverability of your most important messages by setting up a fallback to SMS.
            </p>
          </div>
          <div className={styles.seamlessCard}>
            <div className={styles.seamlessCardIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 20V10M12 20V4M6 20v-6" />
              </svg>
            </div>
            <h3 className={styles.seamlessCardTitle}>Measure Success</h3>
            <p className={styles.seamlessCardText}>
              Analyze your campaigns with dynamic open, delivery and read metrics.
            </p>
          </div>
          <div className={styles.seamlessCard}>
            <div className={styles.seamlessCardIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </div>
            <h3 className={styles.seamlessCardTitle}>Martech Integration</h3>
            <p className={styles.seamlessCardText}>
              Integrate Viber Business API with your existing Martech ecosystem for a unified communication strategy.
            </p>
          </div>
          <div className={styles.seamlessCard}>
            <div className={styles.seamlessCardIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <path d="M8 10h.01M12 10h.01M16 10h.01" />
              </svg>
            </div>
            <h3 className={styles.seamlessCardTitle}>Auto-Reply Message</h3>
            <p className={styles.seamlessCardText}>
              When unavailable, enable your customers to get the information they need in a different way.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaSectionInner}>
          <h2 className={styles.ctaHeading}>
            Ready to Reach Your Audience?
          </h2>
          <p className={styles.ctaSubtext}>
            Send promos, transactional messages & more with Viber Business.
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
