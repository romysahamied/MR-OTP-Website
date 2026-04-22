'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import styles from './BulkSmsZambiaTestimonials.module.css'

const TESTIMONIALS = [
  {
    quote:
      'We rolled out OTP and recharge alerts for Zambia and Malawi from one dashboard. Delivery reports finally match what finance sees in reconciliations.',
    name: 'Thandiwe Mulenga',
    role: 'Chief Technology Officer',
    industry: 'Mobile money',
  },
  {
    quote:
      'Fraud SMS used to take twelve minutes to reach customers. With Mr-OTP routing the median is under six seconds—our analysts watch it in Grafana.',
    name: 'Samuel Adeyemi',
    role: 'VP Engineering',
    industry: 'Banking',
  },
  {
    quote:
      'Our warehouse and driver pool rely on bilingual templates. We pushed 400k notifications last month without opening a single carrier ticket.',
    name: 'Leila Benkirane',
    role: 'Operations Director',
    industry: 'Logistics',
  },
  {
    quote:
      'The API matches the OpenAPI spec we reviewed at procurement. Onboarding was two calls and a sandbox key—rare for African aggregators.',
    name: 'David Osei',
    role: 'Head of Platform',
    industry: 'Enterprise IT',
  },
  {
    quote:
      'We run recurring dues reminders across four countries. Volume pricing tracked predictably and the finance team trusts the invoicing exports.',
    name: 'Nomsa Dlamini',
    role: 'Growth Lead',
    industry: 'Insurance',
  },
  {
    quote:
      'During peak election week our traffic spiked 8×. Messages queued cleanly and support stayed in the loop—we did not miss a compliance window.',
    name: 'Jean-Baptiste Uwimana',
    role: 'Communications Manager',
    industry: 'Public sector',
  },
] as const

const AUTO_MS = 20_000

function paginate<T>(items: readonly T[], pageSize: number): T[][] {
  const pages: T[][] = []
  for (let i = 0; i < items.length; i += pageSize) {
    pages.push(items.slice(i, i + pageSize) as T[])
  }
  return pages
}

function usePerView(): number {
  const [n, setN] = useState(1)

  useEffect(() => {
    const read = () => {
      const w = window.innerWidth
      if (w >= 1024) setN(3)
      else if (w >= 640) setN(2)
      else setN(1)
    }
    read()
    window.addEventListener('resize', read)
    return () => window.removeEventListener('resize', read)
  }, [])

  return n
}

export default function BulkSmsZambiaTestimonialsSection() {
  const perView = usePerView()
  const pages = useMemo(() => paginate(TESTIMONIALS, perView), [perView])
  const numPages = pages.length

  const [page, setPage] = useState(0)

  useEffect(() => {
    setPage((p) => Math.min(p, Math.max(0, numPages - 1)))
  }, [numPages])

  const go = useCallback(
    (delta: number) => {
      setPage((p) => {
        const next = p + delta
        if (next < 0) return numPages - 1
        if (next >= numPages) return 0
        return next
      })
    },
    [numPages],
  )

  useEffect(() => {
    if (numPages <= 1) return
    const id = window.setInterval(() => {
      setPage((p) => (p + 1 >= numPages ? 0 : p + 1))
    }, AUTO_MS)
    return () => window.clearInterval(id)
  }, [numPages])

  return (
    <section className={styles.section} aria-labelledby="zambia-testimonials-heading">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.kicker}>Testimonials</p>
          <h2 id="zambia-testimonials-heading" className={styles.title}>
            Teams across Africa run on this stack
          </h2>
          <p className={styles.sub}>
            Product, ops, and engineering leads who need receipts—not guesswork—when messaging hits millions of
            handsets.
          </p>
        </header>

        <div className={styles.carouselWrap} aria-roledescription="carousel" aria-label="Customer testimonials">
          <button
            type="button"
            className={`${styles.navBtn} ${styles.navPrev}`}
            aria-label="Previous testimonials"
            onClick={() => go(-1)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            className={`${styles.navBtn} ${styles.navNext}`}
            aria-label="Next testimonials"
            onClick={() => go(1)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className={styles.viewport}>
            <div
              className={styles.track}
              style={{ transform: `translateX(-${page * 100}%)` }}
              aria-live="polite"
            >
              {pages.map((group, pi) => (
                <div
                  key={pi}
                  className={styles.slide}
                  style={{ ['--pv' as string]: String(Math.max(1, group.length)) }}
                  aria-hidden={pi !== page}
                >
                  {group.map((t) => (
                    <article key={t.name} className={styles.card}>
                      <div className={styles.stars} aria-label="5 out of 5 stars">
                        {'★★★★★'}
                      </div>
                      <blockquote className={styles.quote}>
                        <span aria-hidden>&ldquo;</span>
                        {t.quote}
                        <span aria-hidden>&rdquo;</span>
                      </blockquote>
                      <div className={styles.divider} aria-hidden />
                      <p className={styles.name}>{t.name}</p>
                      <p className={styles.role}>{t.role}</p>
                      <span className={styles.badge}>{t.industry}</span>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {numPages > 1 ? (
            <div className={styles.dots} role="tablist" aria-label="Testimonial pages">
              {pages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === page}
                  aria-label={`Go to testimonial page ${i + 1} of ${numPages}`}
                  className={`${styles.dot} ${i === page ? styles.dotActive : ''}`}
                  onClick={() => setPage(i)}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
