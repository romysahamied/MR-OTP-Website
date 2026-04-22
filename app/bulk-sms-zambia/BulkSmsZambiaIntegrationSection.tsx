import styles from './BulkSmsZambiaIntegration.module.css'

const integrations = [
  {
    title: 'CRM & automation hubs',
    category: 'Workflows',
    description: 'Trigger SMS from your CRM, support desk, or Zapier-style flows—ideal for follow-ups and alerts.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: 'Commerce & billing',
    category: 'Operations',
    description: 'Order updates, OTP at checkout, and payment reminders—keep customers informed in real time.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <path d="M3 6h18M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    title: 'Data & engineering',
    category: 'Developers',
    description: 'REST, predictable payloads, and secure tokens—integrate from any stack with copy-paste examples.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
] as const

const sdkRows = [
  {
    badge: 'HT',
    badgeClass: styles.sdkBadgeA,
    name: 'HTTP API',
    cmd: 'POST https://papi.mr-otp.com/SendSmsV2',
  },
  {
    badge: 'WH',
    badgeClass: styles.sdkBadgeB,
    name: 'Delivery webhooks',
    cmd: 'HTTPS callback + signed payload',
  },
  {
    badge: 'PY',
    badgeClass: styles.sdkBadgeC,
    name: 'Python & scripts',
    cmd: 'pip install httpx  →  reuse our JSON shape',
  },
] as const

export default function BulkSmsZambiaIntegrationSection() {
  return (
    <section aria-labelledby="zambia-integration-heading">
      <div className={styles.wrap}>
        <header className={styles.header}>
          <p className={styles.kicker}>Developer experience</p>
          <h2 id="zambia-integration-heading" className={styles.title}>
            Fits the stack you already run
          </h2>
          <p className={styles.sub}>
            Same patterns your engineers know—HTTP, webhooks, and bulk tools—so Zambia routing ships without a rewrite.
          </p>
        </header>

        <div className={styles.cardGrid}>
          {integrations.map(({ title, category, description, icon }) => (
            <article key={title} className={styles.intCard}>
              <div className={styles.cardIconWrap}>{icon}</div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardCat}>{category}</p>
              <p className={styles.cardDesc}>{description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.showcaseOuter}>
        <div className={styles.showcase}>
          <div>
            <h3 className={styles.showLeftTitle}>Patterns that match production code</h3>
            <p className={styles.showLeftDesc}>
              Start with a single POST, add webhooks when you need delivery proofs, then scale uploads from CSV or your
              own jobs—no lock-in to one language.
            </p>
            <div className={styles.sdkList}>
              {sdkRows.map(({ badge, badgeClass, name, cmd }) => (
                <div key={badge} className={styles.sdkRow}>
                  <span className={`${styles.sdkBadge} ${badgeClass}`}>{badge}</span>
                  <div className={styles.sdkMid}>
                    <span className={styles.sdkName}>{name}</span>
                    <span className={styles.sdkCmd}>{cmd}</span>
                  </div>
                  <span className={styles.codeHint} title="Example snippet" aria-hidden>
                    {'<>'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.codeDock}>
            <div className={styles.webhookHeader}>
              <span className={styles.webhookTitle}>Webhook Example</span>
              <span className={styles.webhookLive}>
                <span className={styles.webhookLiveDot} aria-hidden />
                Live shape
              </span>
            </div>
            <div className={styles.codeBody}>
              <pre className={styles.codePre}>
                <code>
                  <span className={styles.jsonPunct}>{'{'}</span>
                  {'\n'}
                  {'  '}
                  <span className={styles.jsonKey}>&quot;event&quot;</span>
                  <span className={styles.jsonPunct}>: </span>
                  <span className={styles.jsonStr}>&quot;message.delivered&quot;</span>
                  <span className={styles.jsonPunct}>,</span>
                  {'\n'}
                  {'  '}
                  <span className={styles.jsonKey}>&quot;message_id&quot;</span>
                  <span className={styles.jsonPunct}>: </span>
                  <span className={styles.jsonStr}>&quot;msg_abc123&quot;</span>
                  <span className={styles.jsonPunct}>,</span>
                  {'\n'}
                  {'  '}
                  <span className={styles.jsonKey}>&quot;to&quot;</span>
                  <span className={styles.jsonPunct}>: </span>
                  <span className={styles.jsonStr}>&quot;+234800000000&quot;</span>
                  <span className={styles.jsonPunct}>,</span>
                  {'\n'}
                  {'  '}
                  <span className={styles.jsonKey}>&quot;status&quot;</span>
                  <span className={styles.jsonPunct}>: </span>
                  <span className={styles.jsonStr}>&quot;delivered&quot;</span>
                  <span className={styles.jsonPunct}>,</span>
                  {'\n'}
                  {'  '}
                  <span className={styles.jsonKey}>&quot;timestamp&quot;</span>
                  <span className={styles.jsonPunct}>: </span>
                  <span className={styles.jsonStr}>&quot;2024-01-15T10:30:00Z&quot;</span>
                  <span className={styles.jsonPunct}>,</span>
                  {'\n'}
                  {'  '}
                  <span className={styles.jsonKey}>&quot;operator&quot;</span>
                  <span className={styles.jsonPunct}>: </span>
                  <span className={styles.jsonStr}>&quot;MTN Nigeria&quot;</span>
                  <span className={styles.jsonPunct}>,</span>
                  {'\n'}
                  {'  '}
                  <span className={styles.jsonKey}>&quot;delivery_time&quot;</span>
                  <span className={styles.jsonPunct}>: </span>
                  <span className={styles.jsonStr}>&quot;2.4s&quot;</span>
                  {'\n'}
                  <span className={styles.jsonPunct}>{'}'}</span>
                </code>
              </pre>
            </div>
            <p className={styles.codeFooter}>
              Real-time webhooks keep your systems in sync with delivery status, replies, and events.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
