import dynamic from 'next/dynamic'
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
      <article className={styles.content}>
        <section className={styles.introSection}>
          <h1 className={styles.mainHeading}>A MESSAGE FOR EVERY BUSINESS NEED</h1>
          <p className={styles.introText}>
            SMS is the world&apos;s most popular and highest-performing business messaging tool. With Mr-OTP, you can leverage our powerful SMS API to enhance your business communication. From delivery notifications and appointment scheduling to one-time passcodes, SMS offers a range of use cases that drive engagement and conversions.
          </p>
        </section>

        <section className={styles.bubblesSection}>
          <SmsBubblesCarousel />
        </section>

        <section className={styles.whySection}>
          <h2 className={styles.whyHeading}>WHY CHOOSE SMS FOR YOUR BUSINESS</h2>
          <div className={styles.whyColumns}>
            <div className={styles.whyColumn}>
              <h3 className={styles.whyColumnTitle}>ACCESSIBILITY</h3>
              <p className={styles.whyColumnText}>
                SMS is a widely accessible communication channel. This allows businesses to reach a wider audience, including customers who may not have access to other communication channels.
              </p>
            </div>
            <div className={styles.whyColumn}>
              <h3 className={styles.whyColumnTitle}>COST-EFFECTIVENESS</h3>
              <p className={styles.whyColumnText}>
                Compared to other channels, SMS is an efficient form of B2C communication. With low costs and high open rates, businesses can reach a large audience without breaking the bank.
              </p>
            </div>
            <div className={styles.whyColumn}>
              <h3 className={styles.whyColumnTitle}>CONVENIENCE</h3>
              <p className={styles.whyColumnText}>
                SMS allows customers to interact with businesses without the need for a data connection. This leads to improved customer satisfaction and increased engagement.
              </p>
            </div>
            <div className={styles.whyColumn}>
              <h3 className={styles.whyColumnTitle}>SPEED</h3>
              <p className={styles.whyColumnText}>
                In today&apos;s fast-paced world, customers expect timely communication. SMS allows businesses to deliver information almost instantly, improving the overall customer experience.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.statsSection}>
          <h2 className={styles.statsHeading}>THE STATS DON&apos;T LIE!</h2>
          <p className={styles.statsSubtitle}>
            The world&apos;s most popular and highest-performing business messaging tool is here to stay. Here&apos;s why.
          </p>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className={styles.statTitle}>98% Open Rate</h3>
              <p className={styles.statText}>Anywhere across the globe, send messages that get read</p>
            </div>
            <div className={styles.statDivider} aria-hidden />
            <div className={styles.statCard}>
              <div className={`${styles.statIcon} ${styles.statIconSquare}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className={styles.statTitle}>30% Response Rate</h3>
              <p className={styles.statText}>Increase engagement and conversions with 2-way interactions</p>
            </div>
            <div className={styles.statDivider} aria-hidden />
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className={styles.statTitle}>Global Ubiquity</h3>
              <p className={styles.statText}>Leverage the channel that reaches 7.4B active users</p>
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </main>
  )
}
