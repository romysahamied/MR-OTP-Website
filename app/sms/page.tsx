import dynamic from 'next/dynamic'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from './Sms.module.css'

const SmsBubblesCarousel = dynamic(() => import('@/app/sms/SmsBubblesCarousel'), { ssr: true })

const Header = dynamic(() => import('@/components/Header'), { ssr: true })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true })

export const metadata: Metadata = {
  title: 'SMS for Every Business Need | Mr-OTP',
  description: "SMS is the world's most popular business messaging tool. 98% open rate, 30% response rate. Reach 7.4B users with OTP, alerts, reminders, and more.",
}

export default function SmsPage() {
  return (
    <main className={styles.wrapper}>
      <Header />
      <section className={styles.smsHero}>
        <div className={styles.smsHeroContent}>
          <h1 className={styles.smsHeroHeadline}>Power Your Growth with SMS</h1>
          <p className={styles.smsHeroSubtitle}>
            Engage customers effortlessly through our robust SMS API or easy-to-use platform.
          </p>
          <Link href="/get-started?from=sms" className={styles.smsHeroCta}>
            Get Started
          </Link>
        </div>
      </section>
      <article className={styles.content}>
        <section className={styles.introSection}>
          <h1 className={styles.mainHeading}>Power Every Customer Interaction with SMS</h1>
          <p className={styles.introText}>
            SMS remains one of the most effective and widely used communication channels worldwide. With Mr-OTP’s advanced SMS API, you can streamline notifications, appointment reminders, OTP delivery, and more—driving stronger engagement and measurable results.
          </p>
        </section>

        <section className={styles.bubblesSection}>
          <SmsBubblesCarousel />
        </section>

        <section className={styles.whySection}>
          <h2 className={styles.whyHeading}>WHY CHOOSE SMS FOR YOUR BUSINESS</h2>
          <div className={styles.whyColumns}>
            <div className={styles.whyColumn}>
              <h3 className={styles.whyColumnTitle}>Universal Reach</h3>
              <p className={styles.whyColumnText}>
                Text messaging works on virtually every mobile device, allowing you to connect with customers regardless of internet access or smartphone usage.
              </p>
            </div>
            <div className={styles.whyColumn}>
              <h3 className={styles.whyColumnTitle}> Budget-Friendly Impact</h3>
              <p className={styles.whyColumnText}>
                SMS delivers strong engagement at a minimal cost, helping businesses maximize outreach while maintaining an efficient communication budget.
              </p>
            </div>
            <div className={styles.whyColumn}>
              <h3 className={styles.whyColumnTitle}>Effortless Interaction</h3>
              <p className={styles.whyColumnText}>
                No apps, downloads, or data required—customers can easily receive and respond to messages anytime, anywhere.
              </p>
            </div>
            <div className={styles.whyColumn}>
              <h3 className={styles.whyColumnTitle}>Instant Delivery</h3>
              <p className={styles.whyColumnText}>
                Messages are transmitted within seconds, enabling real-time updates that keep customers informed and engaged when it matters most.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.statsSection}>
          <h2 className={styles.statsHeading}>Messaging That Moves the Metrics</h2>
          <p className={styles.statsSubtitle}>
            High open rates, instant delivery, measurable impact—SMS turns every message into opportunity.
          </p>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className={styles.statTitle}>98% Visibility Rate</h3>
              <p className={styles.statText}>Deliver messages worldwide with confidence—nearly every text gets seen.</p>
            </div>
            <div className={styles.statDivider} aria-hidden />
            <div className={styles.statCard}>
              <div className={`${styles.statIcon} ${styles.statIconSquare}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className={styles.statTitle}>30% Response Rate</h3>
              <p className={styles.statText}>Drive meaningful conversations and boost conversions through seamless two-way messaging.</p>
            </div>
            <div className={styles.statDivider} aria-hidden />
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className={styles.statTitle}>Worldwide Reach</h3>
              <p className={styles.statText}>Tap into a communication channel used by over 7.4 billion active mobile users across the globe.</p>
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </main>
  )
}
