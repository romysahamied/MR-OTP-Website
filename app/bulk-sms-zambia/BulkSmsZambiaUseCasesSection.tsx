import styles from './BulkSmsZambiaUseCases.module.css'

const icons = {
  banking: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
    </svg>
  ),
  retail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M3 3v18h18" />
      <path d="M18 9l-5 5-3-3-4 4" />
    </svg>
  ),
  health: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  logistics: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M10 17h4V5H2v12h3" />
      <path d="M20 17h2v-3.34a1 1 0 0 0-.14-.51l-2.34-4.02A1 1 0 0 0 18.62 8H14" />
      <path d="M14 17h1" />
      <circle cx="7.5" cy="17.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  ),
} as const

const useCases = [
  {
    title: 'Banking & Fintech',
    cardClass: styles.cardBlue,
    icon: icons.banking,
    points: [
      'Transaction alerts and balance notifications',
      'Two-factor authentication and OTP codes',
      'Fraud detection and security alerts',
      'Loan application status updates',
      'Payment confirmations and receipts',
    ],
    stat: '500M+ financial alerts sent monthly',
  },
  {
    title: 'E-commerce & Retail',
    cardClass: styles.cardGreen,
    icon: icons.retail,
    points: [
      'Order confirmations and shipping updates',
      'Delivery tracking and notifications',
      'Promotional campaigns and flash sales',
      'Abandoned cart reminders',
      'Customer feedback requests',
    ],
    stat: '300M+ order notifications delivered',
  },
  {
    title: 'Healthcare & Wellness',
    cardClass: styles.cardRose,
    icon: icons.health,
    points: [
      'Appointment reminders and confirmations',
      'Prescription and medication reminders',
      'Test results and health updates',
      'Emergency alerts and notifications',
      'Patient engagement campaigns',
    ],
    stat: '50M+ healthcare messages sent',
  },
  {
    title: 'Logistics & Transportation',
    cardClass: styles.cardViolet,
    icon: icons.logistics,
    points: [
      'Real-time package tracking updates',
      'Driver coordination and dispatching',
      'Delivery confirmation notifications',
      'Route optimization alerts',
      'Customer pickup notifications',
    ],
    stat: '100M+ logistics updates sent',
  },
] as const

export default function BulkSmsZambiaUseCasesSection() {
  return (
    <section className={styles.section} aria-labelledby="zambia-use-cases-heading">
      <header className={styles.header}>
        <p className={styles.kicker}>Use cases</p>
        <h2 id="zambia-use-cases-heading" className={styles.title}>
          Real-world use cases
        </h2>
        <p className={styles.subtitle}>
          See how businesses across Africa use Mr-OTP to power their communications.
        </p>
      </header>

      <div className={styles.grid}>
        {useCases.map(({ title, cardClass, icon, points, stat }) => (
          <article key={title} className={`${styles.card} ${cardClass}`}>
            <div className={styles.cardHead}>
              <div className={styles.iconRing}>{icon}</div>
              <h3 className={styles.cardTitle}>{title}</h3>
            </div>
            <ul className={styles.list}>
              {points.map((text) => (
                <li key={text} className={styles.listItem}>
                  <span className={styles.check} aria-hidden>
                    ✓
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <hr className={styles.divider} />
            <p className={styles.stat}>
              <span className={styles.statDot} aria-hidden />
              {stat}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
