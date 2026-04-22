import styles from './BulkSmsZambiaAfricaNeeds.module.css'

const features = [
  {
    title: 'Pan-African Coverage',
    cardTint: styles.cardTintBlue,
    iconAccent: styles.iconAccentBlue,
    description:
      '20+ countries with direct operator connections. Consistent delivery rates across all networks.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: 'Enterprise Security',
    cardTint: styles.cardTintIndigo,
    iconAccent: styles.iconAccentIndigo,
    description:
      'ISO 27001 certified, GDPR compliant. Data stays in Africa with local data centers.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Lightning Fast',
    cardTint: styles.cardTintAmber,
    iconAccent: styles.iconAccentAmber,
    description:
      'Average delivery time under 3 seconds. Real-time status updates via webhooks.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: 'Advanced Analytics',
    cardTint: styles.cardTintPurple,
    iconAccent: styles.iconAccentPurple,
    description:
      'Detailed reports, operator breakdowns, and custom dashboards for business insights.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
  },
  {
    title: '24/7 Local Support',
    cardTint: styles.cardTintTeal,
    iconAccent: styles.iconAccentTeal,
    description:
      'African-based team in multiple languages. Sub-15 minute response times.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
  },
  {
    title: '99.7% Uptime SLA',
    cardTint: styles.cardTintEmerald,
    iconAccent: styles.iconAccentEmerald,
    description:
      'Enterprise-grade reliability with redundant infrastructure and automatic failover.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M3 3v18h18" />
        <path d="M18 9l-5 5-3-3-4 4" />
      </svg>
    ),
  },
] as const

export default function BulkSmsZambiaAfricaNeedsSection() {
  return (
    <section className={styles.section} aria-labelledby="zambia-africa-needs-heading">
      <header className={styles.header}>
        <h2 id="zambia-africa-needs-heading" className={styles.title}>
          Built for Africa&apos;s unique needs.
        </h2>
        <p className={styles.subtitle}>
          Local infrastructure, direct operator connections, and compliance with African
          regulations.
        </p>
      </header>

      <div className={styles.grid}>
        {features.map(({ title, description, icon, cardTint, iconAccent }) => (
          <article key={title} className={`${styles.card} ${cardTint}`}>
            <div className={`${styles.iconWrap} ${iconAccent}`}>{icon}</div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardBody}>{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
