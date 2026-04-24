import styles from './BulkSmsZambiaChannels.module.css'
import BulkSmsZambiaChannelsTypingCode from './BulkSmsZambiaChannelsTypingCode'

const smsContent = {
  copyHeading: 'Enterprise SMS at scale',
  copyLead:
    'Send transactional alerts, OTP codes, marketing campaigns, and notifications with operator-aware routing across Africa. Direct routes help keep delivery fast and measurable.',
  features: [
    { title: 'Bulk SMS', desc: 'Send large volumes with throttling and scheduling.' },
    { title: 'SMS API', desc: 'REST API using the same JSON body as the Mr OTP platform.' },
    { title: 'OTP SMS', desc: 'Time-bound verification codes and templated payloads.' },
    { title: 'Two-way SMS', desc: 'Inbound handling where your use case supports it.' },
  ],
  codeTitle: 'SMS · curl',
}

export default function BulkSmsZambiaChannelsSection() {
  const c = smsContent

  return (
    <section className={styles.section} aria-labelledby="zambia-channels-heading">
      <div className={styles.header}>
        <h2 id="zambia-channels-heading" className={styles.title}>
          Communication channels your customers prefer
        </h2>
        <p className={styles.subtitle}>
          Reach customers on SMS with the same Mr OTP REST API used across your stack—reliable
          delivery and clear reporting.
        </p>
      </div>

      <div className={styles.tabBarWrap}>
        <div className={styles.tabBar} aria-hidden>
          <div className={`${styles.tab} ${styles.tabActive}`}>
            <span className={styles.tabIcon}>💬</span>
            SMS
          </div>
        </div>
      </div>

      <div className={styles.glassPanel}>
        <div className={styles.columns}>
          <div className={styles.copyCol}>
            <h3 className={styles.copyHeading}>{c.copyHeading}</h3>
            <p className={styles.copyLead}>{c.copyLead}</p>
            <ul className={styles.featureList}>
              {c.features.map((f) => (
                <li key={f.title} className={styles.featureItem}>
                  <span className={styles.featureCheck} aria-hidden>
                    ✓
                  </span>
                  <div>
                    <div className={styles.featureTitle}>{f.title}</div>
                    <div className={styles.featureDesc}>{f.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.codeCol}>
            <BulkSmsZambiaChannelsTypingCode codeLabel={c.codeTitle} />
          </div>
        </div>
      </div>
    </section>
  )
}
