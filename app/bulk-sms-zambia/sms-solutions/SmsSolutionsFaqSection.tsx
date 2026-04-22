'use client'

import { useCallback, useState } from 'react'
import styles from './SmsSolutionsFaq.module.css'

const FAQ_HEADING_ID = 'sms-solutions-faq-heading'

const faqs = [
  {
    q: 'Is there a ceiling on how many recipients I can include in one blast?',
    a: 'Practical limits depend on your account tier and carrier policies, but batches are built for large audiences: you can queue extensive lists as long as payloads stay within documented size caps and throttling rules.',
  },
  {
    q: 'How quickly do handsets typically see the message?',
    a: 'Time-to-handset is usually seconds on healthy routes, though traffic spikes and operator maintenance can introduce short delays—dashboard telemetry shows submission vs. delivery timestamps so you can spot slowdowns.',
  },
  {
    q: 'What happens when a handset never confirms delivery?',
    a: 'Failed and expired states are surfaced with reason codes where carriers provide them. You can retry eligible numbers, route around persistently noisy ranges, and reconcile lists before the next wave.',
  },
  {
    q: 'Can we message in French, Swahili, Arabic, or other scripts?',
    a: 'Unicode is supported where downstream operators and sender rules allow—ideal for accented Latin, Arabic script, or emoji. Very long encodings consume more segments per send, which billing reflects.',
  },
  {
    q: 'How do we provision a recognizable sender label?',
    a: 'Apply with the identifiers you want vetted; the onboarding team coordinates registrations that satisfy regulator and MNO requirements before you promote traffic on that header.',
  },
  {
    q: 'How is “bulk console” sending different from hitting the API?',
    a: 'The portal suits marketers uploading spreadsheets and launching in minutes; the HTTP API suits products that generate traffic from code. Both ride the same routing core—only the entry surface changes.',
  },
]

export default function SmsSolutionsFaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  const toggle = useCallback((i: number) => {
    setOpen((prev) => (prev === i ? null : i))
  }, [])

  return (
    <section className={styles.section} aria-labelledby={FAQ_HEADING_ID}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <h2 id={FAQ_HEADING_ID} className={styles.title}>
            Bulk SMS questions, answered plainly
          </h2>
          <p className={styles.lead}>
            Straight answers on throughput, languages, sender IDs, and how the product fits your stack.
          </p>
        </div>

        <ul className={styles.list}>
          {faqs.map((item, i) => {
            const isOpen = open === i
            const panelId = `sms-solutions-faq-panel-${i}`
            const headerId = `sms-solutions-faq-q-${i}`
            return (
              <li
                key={item.q}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}
              >
                <button
                  type="button"
                  id={headerId}
                  className={styles.trigger}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(i)}
                >
                  <span className={styles.question}>{item.q}</span>
                  <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`} aria-hidden>
                    ▼
                  </span>
                </button>
                {isOpen ? (
                  <div id={panelId} className={styles.panel} role="region" aria-labelledby={headerId}>
                    <p className={styles.answer}>{item.a}</p>
                  </div>
                ) : null}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
