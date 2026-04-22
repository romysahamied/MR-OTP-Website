import Link from 'next/link'
import { withZambiaNavHref } from '@/components/zambiaNav'
import styles from './SmsSolutionsCtaBanner.module.css'

export default function SmsSolutionsCtaBannerSection() {
  const startHref = withZambiaNavHref('/get-started?from=zambia-sms-solutions', true)

  return (
    <section className={styles.section} aria-labelledby="sms-solutions-cta-h">
      <div className={styles.inner}>
        <h2 id="sms-solutions-cta-h" className={styles.title}>
          Start routing bulk SMS across Africa today
        </h2>
        <p className={styles.lead}>
          No activation levy, no enforced monthly quota, no multi-year lock-in. You align spend with
          delivered traffic—and trial credits help your team validate flows before production traffic.
        </p>
        <div className={styles.ctas}>
          <Link href={startHref} className={styles.btnPrimary}>
            Start free trial
          </Link>
          <Link href="/bulk-sms-zambia/pricing" className={styles.btnGhost}>
            Compare pricing
          </Link>
        </div>
      </div>
    </section>
  )
}
