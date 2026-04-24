'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { withZambiaNavHref } from '@/components/zambiaNav'
import styles from './BulkSmsZambiaPricingFollowup.module.css'

const BENEFITS = [
  {
    title: 'Clear quotes in EUR and ZMW',
    body: 'Reference rates map to live Kwacha and dollar displays so finance teams can budget without guesswork—no surprise line items on your first invoice.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Volume ladders that reward scale',
    body: 'As monthly verified traffic grows on Zambia routes, unit economics improve automatically—your account manager publishes the next tier before you ask.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M3 17l6-6 4 4 8-8" strokeLinecap="round" />
        <path d="M14 7h7v7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'No long lock-ins',
    body: 'Enterprise terms run on cycles you agree to; outside formal contracts you can scale down or pause top-ups with notice—built for seasonal campaigns.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v6l4 2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Operator-aware delivery',
    body: 'Direct and preferred paths toward Zamtel, MTN Zambia, and Airtel reduce grey routes and improve delivery reporting for OTP and alerts.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c0 .69.28 1.31.74 1.76z" />
      </svg>
    ),
  },
  {
    title: 'Hands-on onboarding',
    body: 'Solutions engineers help with sender registration, templates, and sandbox-to-production cutover—chat and email coverage across your local business day.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" strokeLinecap="round" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
  },
  {
    title: 'Fast sandbox access',
    body: 'Spin up API keys and trial credits quickly so your developers can fire test SMS into Zambia networks before commercials are finalised.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
] as const

const TESTIMONIALS = [
  {
    quote:
      'We finally got predictable SMS burn rates in Kwacha. Finance sees the same EUR backbone the ops team quotes, and settlement notes match the dashboard.',
    name: 'Chileshe Mutale',
    role: 'Head of Product · NeoPay Lusaka',
    tag: 'FinTech',
  },
  {
    quote:
      'Bulk alerts to rural agents used to bounce or arrive late. Mr OTP’s Zambia routing cut complaint tickets roughly in half within the first billing cycle.',
    name: 'Namwinga Chanda',
    role: 'Operations Director · AgriLink Co-op',
    tag: 'Agribusiness',
  },
  {
    quote:
      'The pricing page’s live FX saved us spreadsheet gymnastics. Procurement signs off faster when ZMW, EUR, and USD line up without manual refreshes.',
    name: 'Thandiwe Banda',
    role: 'Commercial Lead · CopperCart Retail',
    tag: 'E-commerce',
  },
  {
    quote:
      'Volume steps were documented before we signed—no opaque “contact us” wall. Engineering loved the REST docs; compliance loved the delivery logs.',
    name: 'Joseph Mwila',
    role: 'CTO · PulseNotify',
    tag: 'Telecommunications',
  },
] as const

const FAQS = [
  {
    q: 'How do EUR reference prices relate to what we pay in Zambian Kwacha?',
    a: 'We anchor planning numbers in euros, then your dashboard and this page convert using a live market rate. Invoices can be issued in the currency your contract specifies; we publish the FX snapshot used for each period.',
  },
  {
    q: 'Is there a minimum monthly spend for Zambia bulk SMS?',
    a: 'There is no mandatory monthly minimum on standard pay-as-you-go accounts. Enterprise agreements may include committed volumes in exchange for steeper discounts—your quote spells out whether a floor applies.',
  },
  {
    q: 'How do volume discounts work as we scale?',
    a: 'Verified monthly delivery tiers unlock lower per-SMS rates on Zambia local and selected international corridors. When you cross a threshold, the new tier applies from the next billing window (not retroactive unless agreed in writing).',
  },
  {
    q: 'Can we combine local Zambia sends and international routes in one account?',
    a: 'Yes. A single workspace can mix domestic Zambian traffic with cross-border sends. Reporting breaks out cost and delivery by corridor so finance can reconcile campaigns separately.',
  },
  {
    q: 'Are there hidden fees—DLR lookups, API calls, or portal seats?',
    a: 'Delivery receipts and core REST usage are included at published tiers. Optional add-ons (dedicated short codes, premium SLAs) are quoted separately before you enable them—nothing ships silently.',
  },
] as const

const AUTO_MS = 20_000

export default function BulkSmsZambiaPricingFollowup() {
  const [slide, setSlide] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const n = TESTIMONIALS.length

  const go = useCallback(
    (dir: -1 | 1) => {
      setSlide((i) => (i + dir + n) % n)
    },
    [n],
  )

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }
    timerRef.current = setInterval(() => {
      setSlide((i) => (i + 1) % n)
    }, AUTO_MS)
  }, [n])

  useEffect(() => {
    resetTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [resetTimer])

  const onPrev = () => {
    go(-1)
    resetTimer()
  }

  const onNext = () => {
    go(1)
    resetTimer()
  }

  const onDot = (i: number) => {
    setSlide(i)
    resetTimer()
  }

  return (
    <div className={styles.followRoot}>
      <section aria-labelledby="zambia-pricing-why">
        <header className={styles.sectionHead}>
          <h2 id="zambia-pricing-why" className={styles.sectionTitle}>
            Why teams standardise on Mr OTP in Zambia
          </h2>
          <p className={styles.sectionSub}>
            Beyond unit rates, you get transparent maths, route quality, and a partner that documents what
            “delivered” actually means on the ground.
          </p>
        </header>
        <div className={styles.benefitGrid}>
          {BENEFITS.map((b) => (
            <article key={b.title} className={styles.benefitCard}>
              <div className={styles.iconRing}>{b.icon}</div>
              <h3>{b.title}</h3>
              <p>{b.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.testimonialBlock} aria-labelledby="zambia-pricing-social">
        <header className={styles.sectionHead}>
          <h2 id="zambia-pricing-social" className={styles.sectionTitle}>
            Trusted by operators of real-world programmes
          </h2>
          <p className={styles.sectionSub}>
            Short feedback loops from Zambia-facing product, logistics, and commerce teams—we anonymise
            nothing in the quotes below.
          </p>
        </header>

        <div className={styles.carouselWrap}>
          <button type="button" className={`${styles.navBtn} ${styles.navPrev}`} aria-label="Previous testimonial" onClick={onPrev}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" />
            </svg>
          </button>
          <button type="button" className={`${styles.navBtn} ${styles.navNext}`} aria-label="Next testimonial" onClick={onNext}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" />
            </svg>
          </button>

          <div className={styles.cardViewport}>
            <div
              className={styles.cardTrack}
              style={{ transform: `translateX(-${slide * 100}%)` }}
            >
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className={styles.testimonialCard}>
                  <div className={styles.innerCard}>
                    <div className={styles.stars} aria-hidden>
                      {'★★★★★'}
                    </div>
                    <p className={styles.quote}>{t.quote}</p>
                    <div className={styles.divider} />
                    <p className={styles.authorName}>{t.name}</p>
                    <p className={styles.authorRole}>{t.role}</p>
                    <span className={styles.tagPill}>{t.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.dots} role="tablist" aria-label="Choose testimonial">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                type="button"
                role="tab"
                aria-selected={i === slide}
                aria-label={`Show testimonial ${i + 1}`}
                className={`${styles.dot} ${i === slide ? styles.dotActive : ''}`}
                onClick={() => onDot(i)}
              />
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="zambia-pricing-faq">
        <header className={styles.sectionHead}>
          <h2 id="zambia-pricing-faq" className={styles.sectionTitle}>
            Zambia pricing — common questions
          </h2>
          <p className={styles.sectionSub}>
            Straight answers on FX, commitments, and what shows up on your invoice—before you talk to sales.
          </p>
        </header>
        <div className={styles.faqList}>
          {FAQS.map((item, i) => {
            const open = openFaq === i
            return (
              <div key={item.q} className={styles.faqItem}>
                <button
                  type="button"
                  className={styles.faqQuestion}
                  aria-expanded={open}
                  id={`faq-q-${i}`}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpenFaq(open ? null : i)}
                >
                  {item.q}
                  <svg
                    className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" />
                  </svg>
                </button>
                {open ? (
                  <p className={styles.faqAnswer} id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`}>
                    {item.a}
                  </p>
                ) : null}
              </div>
            )
          })}
        </div>
      </section>

      <section className={styles.ctaBanner} aria-labelledby="zambia-pricing-cta">
        <h2 id="zambia-pricing-cta" className={styles.ctaTitle}>
          Ready to launch on Zambia networks?
        </h2>
        <p className={styles.ctaSub}>
          Sandbox credits included. No card required to explore—most teams send a first test in minutes.
        </p>
        <div className={styles.ctaActions}>
          <Link href={withZambiaNavHref('/get-started?from=zambia-pricing', true)} className={styles.ctaPrimary}>
            Start free trial
          </Link>
          <Link href={withZambiaNavHref('/contact-sales', true)} className={styles.ctaOutline}>
            Talk to sales
          </Link>
        </div>
      </section>
    </div>
  )
}
