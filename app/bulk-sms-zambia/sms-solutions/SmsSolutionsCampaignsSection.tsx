import styles from './SmsSolutionsCampaigns.module.css'

const features = [
  {
    tone: 'coral' as const,
    icon: '💬',
    title: 'Web portal & API access',
    paragraphs: [
      'A browser-based console lets teams upload CSV or Excel lists, preview messages, and launch sends without waiting on engineering.',
      'Developers get a predictable REST API plus examples and SDK-friendly patterns so you can embed SMS into billing, CRM, or custom stacks.',
    ],
  },
  {
    tone: 'azure' as const,
    icon: '👥',
    title: 'Contact management',
    paragraphs: [
      'Segment audiences into groups, import from common CRM exports, and de-duplicate numbers automatically before a campaign leaves the gate.',
      'Optional custom fields help tailor messages while keeping payloads structured for reporting and retries.',
    ],
  },
  {
    tone: 'sage' as const,
    icon: '🕐',
    title: 'Campaign scheduling',
    paragraphs: [
      'Schedule one-off or recurring sends with time-zone awareness so recipients see messages during local business hours.',
      'Plan around peak engagement windows informed by regional patterns—without maintaining separate spreadsheets per market.',
    ],
  },
  {
    tone: 'honey' as const,
    icon: '🌍',
    title: 'Multi-country support',
    paragraphs: [
      'Route across multiple African markets from one project, with routing that respects local numbering and operator conventions.',
      'Unicode support helps you deliver French, Arabic, Swahili, and other scripts where carriers and sender policies allow.',
    ],
  },
  {
    tone: 'orchid' as const,
    icon: '📊',
    title: 'Delivery analytics',
    paragraphs: [
      'Track submitted, delivered, and failed outcomes with granular DLR visibility and exports to CSV or Excel for finance and ops.',
      'Historical windows and API access (where enabled) make it easier to reconcile campaigns month over month.',
    ],
  },
  {
    tone: 'brass' as const,
    icon: '🛡️',
    title: 'Sender ID & branding',
    paragraphs: [
      'Use recognizable sender labels where regulators and carriers permit—often improving read rates versus anonymous short numbers.',
      'Registration and compliance steps for African jurisdictions can be coordinated with your onboarding so launches stay orderly.',
    ],
  },
]

export default function SmsSolutionsCampaignsSection() {
  return (
    <section
      className={styles.campaigns}
      aria-labelledby="sms-campaigns-heading"
    >
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowMark} aria-hidden />
            Campaign toolkit
          </p>
          <header className={styles.header}>
            <h2 id="sms-campaigns-heading" className={styles.title}>
              Power your SMS campaigns with{' '}
              <span className={styles.titleAccent}>everything required for success</span>.
            </h2>
            <p className={styles.lead}>
              A practical toolkit for African routes: portals for operators, APIs for engineers, and
              controls for compliance—without losing sight of delivery quality and reporting.
            </p>
          </header>
        </div>

        <div className={styles.grid}>
          {features.map((f) => (
            <article key={f.title} className={styles.card} data-tone={f.tone}>
              <div className={styles.iconWrap} aria-hidden>
                {f.icon}
              </div>
              <div className={styles.body}>
                <h3 className={styles.cardTitle}>{f.title}</h3>
                {f.paragraphs.map((p, i) => (
                  <p key={i} className={styles.copy}>
                    {p}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
