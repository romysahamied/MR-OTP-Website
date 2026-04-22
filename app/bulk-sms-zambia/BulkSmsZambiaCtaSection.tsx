import Link from 'next/link'
import { withZambiaNavHref } from '@/components/zambiaNav'
import styles from './BulkSmsZambiaCta.module.css'

export default function BulkSmsZambiaCtaSection() {
  return (
    <section className={styles.section} aria-labelledby="zambia-cta-heading">
      <div className={styles.inner}>
        <p className={styles.kicker}>Get started</p>
        <h2 id="zambia-cta-heading" className={styles.title}>
          Ready to get started?
        </h2>
        <p className={styles.sub}>
          Join 2,500+ businesses sending reliable SMS across emerging markets—including Zambia. No credit
          card required to explore the sandbox.
        </p>
        <div className={styles.ctas}>
          <Link href={withZambiaNavHref('/get-started?from=zambia', true)} className={styles.btnPrimary}>
            Start free trial
            <span className={styles.btnPrimaryArrow} aria-hidden>
              →
            </span>
          </Link>
          <Link href="/bulk-sms-zambia/pricing" className={styles.btnSecondary}>
            View pricing
          </Link>
        </div>
      </div>
    </section>
  )
}
