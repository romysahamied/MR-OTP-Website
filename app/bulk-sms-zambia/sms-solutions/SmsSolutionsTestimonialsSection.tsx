'use client'

import { useCallback, useEffect, useState } from 'react'
import styles from './SmsSolutionsTestimonials.module.css'

const AUTO_ADVANCE_MS = 20 * 60 * 1000

type Item = {
  quote: string
  name: string
  role: string
  tag: string
}

/** Two slides × three cards (matches bar + dot pagination). */
const pages: Item[][] = [
  [
    {
      quote:
        'Regulatory-ready sender registration and clear route metrics mean our compliance pack is defensible every quarter—no last-minute spreadsheet archaeology.',
      name: 'Chipo Banda',
      role: 'Head of product platforms',
      tag: 'Mobile money',
    },
    {
      quote:
        'We pipe OTP and balance alerts at serious scale; latency stays boringly predictable and finance can reconcile delivery down to the cent.',
      name: 'Nabil El-Osman',
      role: 'Director of core channels',
      tag: 'Banking',
    },
    {
      quote:
        'Dispatch notices and POD confirmations hit drivers’ handsets before they call the office—fewer “where is my load?” escalations across the corridor.',
      name: 'Rumbidzai Moyo',
      role: 'Supply-chain digitization lead',
      tag: 'Logistics',
    },
  ],
  [
    {
      quote:
        'Roaming segments and prepaid nudges land in local languages without a separate vendor stack; marketing finally trusts the same numbers ops uses.',
      name: 'Aminata Diallo',
      role: 'Customer experience director',
      tag: 'Telecommunications',
    },
    {
      quote:
        'Policy renewals and claim check-ins used to jam the call centre—now SMS carries the light touch reminders and agents pick up real complexity.',
      name: 'Kwame Asante',
      role: 'Digital channels owner',
      tag: 'Insurance',
    },
    {
      quote:
        'Settlement notices and chargeback windows need an immutable trail—the API plus DLR exports slot straight into our existing audit tooling.',
      name: 'Larissa Van der Berg',
      role: 'Compliance operations lead',
      tag: 'Payments',
    },
  ],
]

const STARS = '★★★★★'
const PAGE_COUNT = pages.length

export default function SmsSolutionsTestimonialsSection() {
  const [page, setPage] = useState(0)

  const prev = useCallback(() => {
    setPage((p) => (p - 1 + PAGE_COUNT) % PAGE_COUNT)
  }, [])

  const next = useCallback(() => {
    setPage((p) => (p + 1) % PAGE_COUNT)
  }, [])

  useEffect(() => {
    const id = window.setInterval(() => {
      setPage((p) => (p + 1) % PAGE_COUNT)
    }, AUTO_ADVANCE_MS)
    return () => window.clearInterval(id)
  }, [])

  const visible = pages[page]

  return (
    <section className={styles.section} aria-labelledby="sms-testimonials-heading">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <h2 id="sms-testimonials-heading" className={styles.title}>
            Teams across Africa rely on this stack
          </h2>
          <p className={styles.lead}>
            A snapshot of how operators, banks, and digital wallets use reliable bulk SMS to keep
            customers informed and campaigns measurable.
          </p>
        </div>

        <div className={styles.carousel} aria-live="polite">
          <div className={styles.trackWrap}>
            <button
              type="button"
              className={`${styles.arrow} ${styles.arrowLeft}`}
              aria-label="Previous testimonials"
              onClick={prev}
            >
              <span className={styles.arrowIcon} aria-hidden>
                ‹
              </span>
            </button>
            <button
              type="button"
              className={`${styles.arrow} ${styles.arrowRight}`}
              aria-label="Next testimonials"
              onClick={next}
            >
              <span className={styles.arrowIcon} aria-hidden>
                ›
              </span>
            </button>

            <div className={styles.track} role="list">
              {visible.map((t) => (
                <article key={`${page}-${t.name}`} className={styles.card} role="listitem">
                  <p className={styles.stars} aria-hidden>
                    {STARS}
                  </p>
                  <p className={styles.quote}>
                    <span className={styles.quoteMark} aria-hidden>
                      &ldquo;
                    </span>
                    {t.quote}
                    <span className={styles.quoteMark} aria-hidden>
                      &rdquo;
                    </span>
                  </p>
                  <p className={styles.name}>{t.name}</p>
                  <p className={styles.role}>{t.role}</p>
                  <span className={styles.tag}>{t.tag}</span>
                </article>
              ))}
            </div>
          </div>

          <div className={styles.pagination} role="tablist" aria-label="Testimonial pages">
            {Array.from({ length: PAGE_COUNT }, (_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === page}
                aria-label={`Slide ${i + 1} of ${PAGE_COUNT}`}
                className={i === page ? styles.pageIndicatorActive : styles.pageIndicator}
                onClick={() => setPage(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
