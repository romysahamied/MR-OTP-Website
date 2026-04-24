'use client'

import { useCallback, useId, useState } from 'react'
import styles from './BulkSmsZambiaFaq.module.css'

const FAQ_ITEMS = [
  {
    q: 'What countries does Mr OTP cover?',
    a: 'Mr OTP routes traffic across 50+ countries with a strong focus on African operators—including Zambia, neighbouring markets, and global destinations for enterprises that need one API and consistent reporting.',
  },
  {
    q: 'How reliable is message delivery?',
    a: 'We use direct and preferred operator routes where available, active failover, and live delivery receipts (DLRs) so you can reconcile sends with finance and support. Typical transactional paths are engineered for high success rates and fast median latency.',
  },
  {
    q: 'What makes Mr OTP different from global providers?',
    a: 'You get operator-aware routing in emerging markets, practical onboarding with humans (not only docs), and pricing that scales with volume—plus REST APIs that mirror how African teams already build.',
  },
  {
    q: 'How quickly can I integrate Mr OTP APIs?',
    a: 'Most teams send a first sandbox message within a day using our REST endpoints and sample payloads. Production sender IDs and compliance steps vary by country; we guide you through each market.',
  },
  {
    q: 'What security measures protect my data?',
    a: 'Traffic uses TLS in transit, token-based authentication, rate limiting, and optional IP constraints. Message content is processed for delivery only; we align with standard enterprise expectations for logging and access control.',
  },
  {
    q: 'Can I test the platform before committing?',
    a: 'Yes—start with sandbox credits and explore delivery reports without a credit card. When you are ready, we help you move to production routes and sender registration for your target networks.',
  },
] as const

export default function BulkSmsZambiaFaqSection() {
  const baseId = useId()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = useCallback((i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i))
  }, [])

  return (
    <section className={styles.section} aria-labelledby={`${baseId}-faq-title`}>
      <div className={styles.inner}>
        <h2 id={`${baseId}-faq-title`} className={styles.title}>
          Frequently asked questions
        </h2>
        <ul className={styles.list}>
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i
            const triggerId = `${baseId}-t-${i}`
            const panelId = `${baseId}-p-${i}`
            return (
              <li
                key={item.q}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}
              >
                <button
                  type="button"
                  id={triggerId}
                  className={styles.trigger}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(i)}
                >
                  <span className={styles.question}>{item.q}</span>
                  <span className={styles.icon} aria-hidden>
                    <span className={isOpen ? styles.iconBarHHidden : styles.iconBarH} />
                    <span className={styles.iconBarV} />
                  </span>
                </button>
                <div
                  id={panelId}
                  className={`${styles.panel} ${isOpen ? styles.panelOpen : ''}`}
                  role="region"
                  aria-labelledby={triggerId}
                  aria-hidden={!isOpen}
                >
                  <div className={styles.panelInner}>
                    <p className={styles.answer}>{item.a}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
