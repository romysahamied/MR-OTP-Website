import styles from './BulkSmsZambiaEnterpriseFeatures.module.css'

const features = [
  {
    title: 'Delivery webhooks',
    description: 'Push signed delivery and failure events to your HTTPS endpoints with zero polling.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: 'Live operational analytics',
    description: 'Watch throughput, error codes, and latency as traffic moves across African routes.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: 'Enterprise-ready security',
    description: 'TLS in transit, scoped API tokens, and patterns that satisfy security reviews.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Resilient availability',
    description: 'Redundant operator paths and architecture tuned for mission-critical sends.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <rect x="4" y="4" width="16" height="5" rx="1" />
        <rect x="4" y="12" width="16" height="5" rx="1" />
        <path d="M12 9v3" />
      </svg>
    ),
  },
  {
    title: 'Smart retry logic',
    description: 'Backoff and automatic replays when carriers return transient or busy signals.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M21 2v6h-6M3 12a9 9 0 0 1 15-6.7L21 8M3 22v-6h6M21 12a9 9 0 0 1-15 6.7L3 16" />
      </svg>
    ),
  },
  {
    title: 'REST & JSON APIs',
    description: 'Stable resources and examples your engineers can wire into CI without surprises.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M8 16l-4-4 4-4M16 8l4 4-4 4M13 5l-2 14" />
      </svg>
    ),
  },
  {
    title: 'Operator-aware routing',
    description: 'Route by country, operator, and traffic class to protect delivery and margin.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <circle cx="12" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" />
        <path d="M12 7v4M7.5 17.5l3-4M16.5 17.5l-3-4" />
      </svg>
    ),
  },
  {
    title: 'Sender ID governance',
    description: 'Register, stage, and rotate sender labels with approvals where regulators require it.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M12 15l-2 5 2-2 2 2-2-5z" />
        <path d="M6 3h12v7a6 6 0 0 1-12 0V3z" />
      </svg>
    ),
  },
  {
    title: 'Template control centre',
    description: 'Centralise OTP, alert, and promo copy with versioning your compliance team can audit.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" />
        <path d="M12 12l9-5M12 12v10M12 12L3 7" />
      </svg>
    ),
  },
] as const

export default function BulkSmsZambiaEnterpriseFeaturesSection() {
  return (
    <section className={styles.section} aria-labelledby="zambia-enterprise-features-heading">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.kicker}>Platform</p>
          <h2 id="zambia-enterprise-features-heading" className={styles.title}>
            Capabilities built for serious traffic
          </h2>
          <p className={styles.sub}>
            Everything you need to design, scale, and observe messaging workflows—from first API call to
            continent-wide rollouts.
          </p>
        </header>

        <div className={styles.grid}>
          {features.map(({ title, description, icon }) => (
            <article key={title} className={styles.card}>
              <div className={styles.iconHex}>{icon}</div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
