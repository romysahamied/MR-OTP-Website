import Link from 'next/link'
import { withZambiaNavHref } from '@/components/zambiaNav'
import styles from './BulkSmsZambiaCompare.module.css'

type BoolRow = { kind: 'bool'; feature: string }
type TextRow = { kind: 'text'; feature: string; otp: string; global: string }

const rows: readonly (BoolRow | TextRow)[] = [
  { kind: 'bool', feature: 'Direct Operator Connections' },
  { kind: 'bool', feature: 'Africa-based Infrastructure' },
  { kind: 'bool', feature: 'Local Support Team' },
  {
    kind: 'text',
    feature: 'Average Delivery Time',
    otp: '< 3 seconds',
    global: '10–30 seconds',
  },
  { kind: 'text', feature: 'Delivery Rate', otp: '99.7%', global: '85–95%' },
  { kind: 'text', feature: 'Pricing for Africa', otp: 'Optimized', global: 'Premium' },
  { kind: 'text', feature: 'Regulatory Compliance', otp: 'Full', global: 'Limited' },
  { kind: 'text', feature: 'Currency Support', otp: 'Local + USD', global: 'USD only' },
] as const

function OtpCell({ row }: { row: BoolRow | TextRow }) {
  if (row.kind === 'bool') {
    return (
      <span className={styles.checkWrap}>
        <span className={styles.check} aria-hidden>
          ✓
        </span>
      </span>
    )
  }
  return <span className={styles.valOtp}>{row.otp}</span>
}

function GlobalCell({ row }: { row: BoolRow | TextRow }) {
  if (row.kind === 'bool') {
    return <span className={styles.dash}>—</span>
  }
  return <span className={styles.valGlobal}>{row.global}</span>
}

export default function BulkSmsZambiaCompareSection() {
  return (
    <section className={styles.section} aria-labelledby="zambia-compare-heading">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="zambia-compare-heading" className={styles.title}>
            Why choose Mr-OTP?
          </h2>
          <p className={styles.subtitle}>
            The difference between local expertise and global platforms
          </p>
        </header>

        <div className={styles.panel}>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.th}>Feature</th>
                  <th className={`${styles.th} ${styles.thCenter}`}>
                    <div className={styles.thStack}>
                      <span className={styles.thBrand}>
                        Mr-OTP
                        <span className={styles.badge}>Top pick</span>
                      </span>
                      <span className={styles.thSub}>Built for Africa</span>
                    </div>
                  </th>
                  <th className={`${styles.th} ${styles.thCenter}`}>
                    <div className={styles.thStack}>
                      Global providers
                      <span className={styles.thSub}>Generic solutions</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.feature}>
                    <td className={`${styles.td} ${styles.featureCell}`}>{row.feature}</td>
                    <td className={`${styles.td} ${styles.thCenter}`}>
                      <OtpCell row={row} />
                    </td>
                    <td className={`${styles.td} ${styles.thCenter}`}>
                      <GlobalCell row={row} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.cards} role="list">
            {rows.map((row) => (
              <article key={row.feature} className={styles.mCard} role="listitem">
                <h3 className={styles.mFeature}>{row.feature}</h3>
                <div className={styles.mRow}>
                  <span className={styles.mLabel}>Mr-OTP</span>
                  <div className={`${styles.mVal} ${row.kind === 'text' ? styles.valOtp : ''}`}>
                    {row.kind === 'bool' ? (
                      <span className={styles.check} aria-hidden>
                        ✓
                      </span>
                    ) : (
                      row.otp
                    )}
                  </div>
                </div>
                <div className={styles.mRow}>
                  <span className={styles.mLabel}>Global</span>
                  <div
                    className={`${styles.mVal} ${row.kind === 'text' ? styles.valGlobal : styles.dash}`}
                  >
                    {row.kind === 'bool' ? '—' : row.global}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.cta}>
          <Link href={withZambiaNavHref('/bulk-sms-zambia/experience', true)} className={styles.ctaLink}>
            Experience the difference
            <span className={styles.ctaArrow} aria-hidden>
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
