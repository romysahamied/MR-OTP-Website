import Link from 'next/link'
import { entryTierTeaser } from '@/lib/zambiaVolumePricing'
import styles from './SmsSolutionsPricingSnapshot.module.css'

/** Which country cards to show. Add `'KE'` and `'ZA'` when re-enabling Kenya and South Africa. */
const VISIBLE_REGION_CODES: readonly string[] = ['ZM']

const regions = [
  {
    region: 'zambia' as const,
    code: 'ZM',
    name: 'Zambia',
    points: [
      entryTierTeaser(),
      'Major carriers on-net',
      'Branded sender labels',
      'Live delivery telemetry',
    ],
  },
  {
    region: 'kenya' as const,
    code: 'KE',
    name: 'Kenya',
    points: ['National route coverage', 'Branded sender labels', 'Live delivery telemetry'],
  },
  {
    region: 'za' as const,
    code: 'ZA',
    name: 'South Africa',
    points: ['Regional operator mix', 'Branded sender labels', 'Live delivery telemetry'],
  },
]

export default function SmsSolutionsPricingSnapshotSection() {
  const visibleRegions = regions.filter((r) => VISIBLE_REGION_CODES.includes(r.code))
  const singleColumn = visibleRegions.length <= 1

  return (
    <section className={styles.section} aria-labelledby="sms-pricing-snapshot-heading">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <h2 id="sms-pricing-snapshot-heading" className={styles.title}>
            Pricing that stays easy to explain
          </h2>
          <p className={styles.lead}>
            You are billed around successful delivery—without startup surcharges, forced monthly
            commits, or surprise line items buried in the invoice.
          </p>
        </div>

        <div className={`${styles.grid} ${singleColumn ? styles.gridSingle : ''}`}>
          {visibleRegions.map((r) => (
            <article key={r.code} className={styles.card} data-region={r.region}>
              <span className={styles.code} aria-hidden>
                {r.code}
              </span>
              <h3 className={styles.country}>{r.name}</h3>
              <ul className={styles.list}>
                {r.points.map((p) => (
                  <li key={p} className={styles.item}>
                    <span className={styles.check} aria-hidden>
                      ✓
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className={styles.footer}>
          <Link href="/bulk-sms-zambia/pricing" className={styles.link}>
            View rates in detail →
          </Link>
        </p>
      </div>
    </section>
  )
}
