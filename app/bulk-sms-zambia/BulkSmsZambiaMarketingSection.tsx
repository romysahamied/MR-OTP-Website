import styles from './BulkSmsZambiaMarketing.module.css'

const features = [
  {
    title: 'Smart audience segments',
    description:
      'Build precise groups from location, behaviour, and profile data—then send the right message to every list without manual juggling.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    bullets: ['Contact list management', 'CSV / Excel import', 'API integration', 'Dynamic segments'],
  },
  {
    title: 'Campaign performance insights',
    description:
      'Monitor delivery, engagement, and conversions in one view—so you can prove ROI and iterate fast.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M3 3v18h18" />
        <path d="M7 16l4-4 4 4 5-7" />
      </svg>
    ),
    bullets: ['Real-time reporting', 'Conversion tracking', 'A/B testing', 'Exportable reports'],
  },
  {
    title: 'Send-time optimisation',
    description:
      'Schedule sends around local time zones, quiet hours, and engagement patterns—ideal for promos and lifecycle series.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    bullets: ['Time zone detection', 'Optimal send windows', 'Recurring campaigns', 'Drip sequences'],
  },
] as const

const stats = [
  { value: '45%', label: 'Average open rate' },
  { value: '8–12%', label: 'Typical click rate' },
  { value: '3 min', label: 'Avg. engagement window' },
  { value: '98%', label: 'Read within 1 hour' },
] as const

const bestPractices = [
  'Keep messages concise and actionable (≈160 characters)',
  'Add a clear call-to-action with short, trackable links',
  'Personalise with name, segment, or recent activity',
  'Send in local business hours (e.g. 9 AM – 6 PM)',
  'Offer a simple opt-out path for compliance',
  'Pilot on a small list before full rollout',
] as const

export default function BulkSmsZambiaMarketingSection() {
  return (
    <section aria-labelledby="zambia-marketing-heading">
      <div className={styles.light}>
        <header className={styles.lightHeader}>
          <p className={styles.lightKicker}>Bulk SMS marketing</p>
          <h2 id="zambia-marketing-heading" className={styles.lightTitle}>
            Campaigns that scale with your funnel
          </h2>
          <p className={styles.lightSub}>
            Reach millions with targeted SMS—promos, launches, and lifecycle touches—with routing tuned
            for African networks.
          </p>
        </header>

        <div className={styles.cardGrid}>
          {features.map(({ title, description, icon, bullets }) => (
            <article key={title} className={styles.featureCard}>
              <div className={styles.cardTop}>
                <div className={styles.iconHex}>{icon}</div>
                <h3 className={styles.cardTitle}>{title}</h3>
              </div>
              <p className={styles.cardDesc}>{description}</p>
              <ul className={styles.bulletList}>
                {bullets.map((b) => (
                  <li key={b} className={styles.bulletRow}>
                    <span className={styles.miniCheck} aria-hidden>
                      ✓
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.dark}>
        <div className={styles.darkInner}>
          <div className={styles.darkPanel}>
            <div className={styles.split}>
              <div>
                <h3 className={styles.darkLeftTitle}>SMS marketing checklist</h3>
                <p className={styles.darkLeftDesc}>
                  Benchmarks and habits we see from high-performing teams in African markets.
                </p>
                <div className={styles.statGrid}>
                  {stats.map(({ value, label }) => (
                    <div key={label} className={styles.statCell}>
                      <span className={styles.statValue}>{value}</span>
                      <span className={styles.statLabel}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className={styles.tipsIntro}>Six essentials</p>
                <div className={styles.tipList}>
                  {bestPractices.map((text, i) => (
                    <div key={text} className={styles.tipRow}>
                      <span className={styles.tipNum} aria-hidden>
                        {i + 1}
                      </span>
                      <p className={styles.tipText}>{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
