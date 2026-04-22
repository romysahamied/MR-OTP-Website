import Link from 'next/link'
import styles from './BulkSmsZambiaCoverage.module.css'

/** Set to `true` to show the “Complete African Coverage” grid on the Zambia hub. */
const SHOW_AFRICAN_COVERAGE_SECTION = false

const countries = [
  { code: 'NG', name: 'Nigeria', operators: 4 },
  { code: 'KE', name: 'Kenya', operators: 4 },
  { code: 'ZA', name: 'South Africa', operators: 5 },
  { code: 'GH', name: 'Ghana', operators: 5 },
  { code: 'EG', name: 'Egypt', operators: 4 },
  { code: 'TZ', name: 'Tanzania', operators: 4 },
  { code: 'UG', name: 'Uganda', operators: 3 },
  { code: 'MA', name: 'Morocco', operators: 3 },
  { code: 'ET', name: 'Ethiopia', operators: 1 },
  { code: 'RW', name: 'Rwanda', operators: 2 },
  { code: 'SN', name: 'Senegal', operators: 3 },
  { code: 'ZM', name: 'Zambia', operators: 3 },
] as const

function CardArrow() {
  return (
    <svg className={styles.cardArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  )
}

export default function BulkSmsZambiaCoverageSection() {
  if (!SHOW_AFRICAN_COVERAGE_SECTION) {
    return null
  }

  return (
    <section className={styles.section} id="coverage" aria-labelledby="zambia-coverage-heading">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="zambia-coverage-heading" className={styles.title}>
            Complete African Coverage
          </h2>
          <p className={styles.subtitle}>
            Direct connections to 50+ mobile network operators across 20+ African countries
          </p>
        </header>

        <div className={styles.grid}>
          {countries.map(({ code, name, operators }) => (
            <article key={code} className={styles.card}>
              <CardArrow />
              <p className={styles.cardCode}>{code}</p>
              <h3 className={styles.cardName}>{name}</h3>
              <p className={styles.cardMeta}>
                {operators} {operators === 1 ? 'operator' : 'operators'}
              </p>
            </article>
          ))}
        </div>

        <div className={styles.footer}>
          <Link href="/bulk-sms-zambia/features" className={styles.viewAll}>
            View All Countries
            <span className={styles.viewAllArrow} aria-hidden>
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
