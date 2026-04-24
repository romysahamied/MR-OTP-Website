import type { Metadata } from 'next'
import Link from 'next/link'
import { withZambiaNavHref } from '@/components/zambiaNav'
import styles from './SmsSolutions.module.css'
import SmsSolutionsCampaignsSection from './SmsSolutionsCampaignsSection'
import SmsSolutionsUseCasesSection from './SmsSolutionsUseCasesSection'
import SmsSolutionsTechnicalSection from './SmsSolutionsTechnicalSection'
import SmsSolutionsIntegrationSection from './SmsSolutionsIntegrationSection'
import SmsSolutionsPricingSnapshotSection from './SmsSolutionsPricingSnapshotSection'
import SmsSolutionsTestimonialsSection from './SmsSolutionsTestimonialsSection'
import SmsSolutionsFaqSection from './SmsSolutionsFaqSection'
import SmsSolutionsCtaBannerSection from './SmsSolutionsCtaBannerSection'

export const metadata: Metadata = {
  title: 'Bulk SMS Platform for African Enterprises | Mr OTP Zambia',
  description:
    'Enterprise bulk SMS across Africa — high delivery rates, instant sends, multi-country coverage, analytics, and scheduled campaigns. Built on direct operator routes.',
}

const benefits = [
  { accent: 'gold', icon: '✓', text: '99.7% delivery rate across Africa' },
  { accent: 'amber', icon: '⚡', text: 'Instant message delivery' },
  { accent: 'sky', icon: '🌍', text: '20+ African countries covered' },
  { accent: 'violet', icon: '👥', text: 'Unlimited contacts management' },
  { accent: 'olive', icon: '📊', text: 'Real-time delivery analytics' },
  { accent: 'slate', icon: '🕐', text: 'Schedule campaigns in advance' },
] as const

export default function BulkSmsZambiaSmsSolutionsPage() {
  const startHref = withZambiaNavHref('/get-started?from=zambia-sms-solutions', true)

  return (
    <>
      <section className={styles.section} aria-labelledby="sms-solutions-heading">
        <div className={styles.inner}>
          <div className={styles.grid}>
            <div>
              <p className={styles.badge}>
                <span className={styles.badgeDot} aria-hidden />
                SMS services
              </p>
              <h1 id="sms-solutions-heading" className={styles.title}>
                Bulk SMS platform for{' '}
                <span className={styles.titleAccent}>African enterprises</span>
              </h1>
              <p className={styles.lead}>
                Send millions of SMS messages across Africa with operator-grade reliability. Ideal for
                marketing broadcasts, transactional alerts, OTP, and promotional campaigns. Direct
                carrier connections help sustain strong delivery with low latency from send to handset.
              </p>
              <div className={styles.ctaRow}>
                <Link href={startHref} className={styles.btnPrimary}>
                  Start sending now
                  <span className={styles.btnPrimaryArrow} aria-hidden>
                    →
                  </span>
                </Link>
                <Link href="/bulk-sms-zambia/pricing" className={styles.btnGhost}>
                  View pricing
                </Link>
              </div>
              <p className={styles.note}>
                Same gateway and APIs as the main Mr OTP stack — sandbox-friendly onboarding for your
                team.
              </p>
            </div>

            <ul className={styles.benefits}>
              {benefits.map((b) => (
                <li
                  key={b.text}
                  className={styles.benefit}
                  data-accent={b.accent}
                >
                  <span className={styles.benefitIcon} aria-hidden>
                    {b.icon}
                  </span>
                  <p className={styles.benefitText}>{b.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <SmsSolutionsCampaignsSection />
      <SmsSolutionsUseCasesSection />
      <SmsSolutionsTechnicalSection />
      <SmsSolutionsIntegrationSection />
      <SmsSolutionsPricingSnapshotSection />
      <SmsSolutionsTestimonialsSection />
      <SmsSolutionsFaqSection />
      <SmsSolutionsCtaBannerSection />
    </>
  )
}
