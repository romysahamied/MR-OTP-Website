import dynamic from 'next/dynamic'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from '../SmsProduct.module.css'

const Header = dynamic(() => import('@/components/Header'), { ssr: true })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true })

export const metadata: Metadata = {
  title: 'OTP SMS | One-Time Password Verification | Mr-OTP',
  description: 'Mr-OTP delivers secure, reliable OTP SMS for two-factor authentication, login verification, and account security. Fast delivery, global reach, enterprise-grade API.',
}

export default function OtpSmsPage() {
  return (
    <main className={styles.wrapper}>
      <Header />
      <article className={styles.content}>
        <h1 className={styles.title}>We Are The Expert in OTP SMS Verification.</h1>
        <p className={styles.intro}>
          Mr-OTP provides secure, fast, and reliable One-Time Password SMS delivery for two-factor authentication, login verification, and account security across your applications.
        </p>

        <section className={styles.section}>
          <h2>Secure OTP SMS Service</h2>
          <p>
            OTP (One-Time Password) SMS is the backbone of modern authentication. Mr-OTP delivers time-sensitive verification codes to your users instantly and securely. Our platform ensures high delivery rates and minimal latency, so your users can complete login, signup, or transaction verification without friction.
          </p>
          <p>
            Whether you need OTP for banking apps, e-commerce checkout, healthcare portals, or SaaS platforms, Mr-OTP provides a robust API and global connectivity. Simple integration, real-time delivery status, and enterprise-grade reliability keep your authentication flow running smoothly.
          </p>
          <p>
            Mr-OTP is committed to security and compliance. Our OTP SMS infrastructure is designed for high availability and meets the demands of businesses that require dependable two-factor authentication at scale.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Two-Factor Authentication (2FA)</h2>
          <p>
            Strengthen your security with SMS-based 2FA. When users log in or perform sensitive actions, they receive a unique, time-limited code via SMS. This adds a critical layer of protection against unauthorized access, credential stuffing, and account takeover.
          </p>
          <p>
            Our 2FA OTP service integrates easily with your existing authentication flow. Support for custom message templates, configurable expiry times, and retry logic gives you full control over the user experience while maintaining security standards.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Transaction Verification</h2>
          <p>
            Protect financial transactions with OTP verification. Banks, payment gateways, and fintech apps use Mr-OTP to send verification codes before confirming transfers, card transactions, or account changes. Instant delivery and high reliability ensure users can complete their transactions without delay.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Account Recovery & Password Reset</h2>
          <p>
            When users forget their password or need to verify their identity, OTP SMS provides a trusted verification channel. Send one-time codes for password reset, email change verification, or account recovery flows. Our platform supports high-volume sends with consistent delivery performance.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Key Features</h2>
          <p>Mr-OTP OTP SMS service includes:</p>
          <ul>
            <li>REST API & SMPP integration</li>
            <li>Global delivery with local routing</li>
            <li>Real-time delivery status & webhooks</li>
            <li>Custom sender ID & message templates</li>
            <li>High availability & 99.9% uptime SLA</li>
            <li>Compliance-ready for regulated industries</li>
          </ul>
        </section>

        <section className={styles.ctaSection}>
          <h2>Ready to Get Started?</h2>
          <p>Contact us today to integrate OTP SMS into your application.</p>
          <Link href="/contact" className={styles.ctaButton}>
            Contact Sales
          </Link>
        </section>
      </article>
      <Footer />
    </main>
  )
}
