import styles from './BulkSmsZambiaEveryIndustry.module.css'

const industries = [
  {
    title: 'Fintech & Banking',
    cardTint: styles.cardTintBlue,
    iconAccent: styles.iconAccentBlue,
    description: 'Transaction alerts, OTP codes, fraud warnings',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </svg>
    ),
  },
  {
    title: 'E-commerce',
    cardTint: styles.cardTintPurple,
    iconAccent: styles.iconAccentPurple,
    description: 'Order updates, delivery tracking, promotions',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M3 3v18h18" />
        <path d="M18 9l-5 5-3-3-4 4" />
      </svg>
    ),
  },
  {
    title: 'Healthcare',
    cardTint: styles.cardTintRose,
    iconAccent: styles.iconAccentRose,
    description: 'Appointment reminders, test results, prescriptions',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Logistics',
    cardTint: styles.cardTintAmber,
    iconAccent: styles.iconAccentAmber,
    description: 'Package tracking, driver coordination, alerts',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
      </svg>
    ),
  },
] as const

export default function BulkSmsZambiaEveryIndustrySection() {
  return (
    <section className={styles.section} aria-labelledby="zambia-every-industry-heading">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="zambia-every-industry-heading" className={styles.title}>
            Trusted across every industry
          </h2>
          <p className={styles.subtitle}>
            From fintech to healthcare, businesses rely on Mr OTP for mission-critical
            communications.
          </p>
        </header>

        <div className={styles.grid}>
          {industries.map(({ title, description, icon, cardTint, iconAccent }) => (
            <article key={title} className={`${styles.card} ${cardTint}`}>
              <div className={`${styles.iconWrap} ${iconAccent}`}>{icon}</div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
