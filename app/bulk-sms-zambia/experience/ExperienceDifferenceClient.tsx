'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import type { CSSProperties } from 'react'
import Link from 'next/link'
import { COUNTRY_CODES } from '@/lib/countryCodes'
import { withZambiaNavHref } from '@/components/zambiaNav'
import styles from './ExperienceDifference.module.css'

const COUNTRY_NAMES = [...new Set(COUNTRY_CODES.map((c) => c.name))].sort((a, b) =>
  a.localeCompare(b),
)

const TRUST_PILLARS = [
  {
    id: 'speed',
    title: 'Fast answers when it counts',
    body:
      'Replies move quickly across the channels you already use. Technical specialists are available day and night, with many urgent items picked up in about twelve minutes. Enterprise traffic is steered to priority handling.',
  },
  {
    id: 'local',
    title: 'African presences, local context',
    body:
      'We maintain specialist coverage in Lagos, Nairobi, Johannesburg, Cairo, and Accra. That means people who know carrier quirks, compliance expectations, and how business is run in each region—often in the language you prefer.',
  },
  {
    id: 'depth',
    title: 'Support that can read a trace',
    body:
      'You work with people who can inspect APIs and message logs, not a script. Engineers who build the product stay involved in harder cases so resolutions stick without a chain of handoffs.',
  },
  {
    id: 'dedicated',
    title: 'Named care for major programmes',
    body:
      'Larger agreements include a manager who reviews route health, suggests improvements, and keeps your stakeholders and our teams in sync long before a dip appears in your reports.',
  },
  {
    id: 'watch',
    title: 'Network visibility around the clock',
    body:
      'Our NOC keeps delivery, latency, and partner behaviour under continuous review. When a path weakens, we will often re-route or fix upstream before the impact reaches your own panels.',
  },
  {
    id: 'ramp',
    title: 'From sandbox to first send, quickly',
    body:
      'Many teams are sending meaningful tests the same day they start. Solid documentation, client libraries, a full sandbox, and direct access to integration help keep your production cutover short.',
  },
] as const

const JOURNEY_STEPS = [
  {
    step: 1,
    title: 'A prompt first response',
    body:
      'Sales usually reaches you within a quarter of an hour in business hours, with a dedicated line for after-hours priority cases. A short call confirms scope, volumes, and who should sit in the room.',
    badge: '<15 min',
  },
  {
    step: 2,
    title: 'A session built around you',
    body:
      'We schedule a walkthrough of the console and APIs against your own scenarios. You can exercise realistic sends in a sandbox and ask questions in real time, usually on the same day you get access.',
    badge: 'Same day',
  },
  {
    step: 3,
    title: 'Engineering at your side for integration',
    body:
      'You receive keys, contract-specific guidance, and a line to the team building the stack. Most teams move from sandbox to confident testing within a few focused hours, not a multi-week back-and-forth.',
    badge: '2–4 hours',
  },
  {
    step: 4,
    title: 'Live traffic with a safety net',
    body:
      'We promote you to production with active monitoring, tune routing with you as traffic grows, and keep an account lead close for changes in volume, regions, or compliance needs. Scale without losing a human contact.',
    badge: '24–48 hours',
  },
] as const

const TESTIMONIALS = [
  {
    id: 't1',
    quote:
      'Our contract spells out delivery expectations, periodic route health reviews, and a short chain to leadership when a metric drifts. External reviewers get paperwork that lines up with what we operate day to day.',
    name: 'Kemi A.',
    role: 'Chief Technology Officer',
    tag: 'Banking',
  },
  {
    id: 't2',
    quote:
      'A Nairobi-based crew means we hear about operator shifts and in-country policy nuance while it is still early. We still meet virtually most weeks, but face-to-face reviews when we travel have saved us avoidable detours.',
    name: 'Juma W.',
    role: 'Account Director',
    tag: 'Telecommunications',
  },
  {
    id: 't3',
    quote:
      'Before anything went live, technical pre-sales spun up a real sandbox, paired with our build team on samples, and stayed on the thread through launch. It felt like one squad, not a helpdesk queue with a new name every reply.',
    name: 'Amina K.',
    role: 'Solutions Architect',
    tag: 'Telecommunications',
  },
  {
    id: 't4',
    quote:
      'Heavy send weeks did not show up as drama in our dashboards, and the single time a hop looked fragile their operations side contacted us before we triaged the alert. That level of foresight is unusual.',
    name: 'Lethabo S.',
    role: 'Head of Operations',
    tag: 'FinTech',
  },
  {
    id: 't5',
    quote:
      'We had outgrown scripted tier-one answers. The people on this account open logs, talk sensible mitigations, and are reachable at hours when our releases actually land—not only when the sun is up in one timezone.',
    name: 'Yonas T.',
    role: 'Engineering Lead',
    tag: 'B2B SaaS',
  },
  {
    id: 't6',
    quote:
      'They untangled our residency questions and which countries we would pilot first before commercial paperwork, then shaped a staged rollout to match our security review cadence. It was tailored planning, not a template deck with our logo.',
    name: 'Zara I.',
    role: 'Product Director',
    tag: 'Healthcare',
  },
] as const

const FAQ_ITEMS = [
  {
    id: 'faq1',
    q: 'What is the usual timeline to go live?',
    a: 'Many teams run a first sandbox send the same week. Full production depends on your checks and volumes, but we keep technical and commercial steps in parallel so you are not waiting on handoffs.',
  },
  {
    id: 'faq2',
    q: 'What should I have ready before speaking to sales?',
    a: 'Rough send volumes, target countries, message types (OTP, alerts, campaigns), and any compliance or procurement steps your organisation requires. The more context, the faster we shape a proposal.',
  },
  {
    id: 'faq3',
    q: 'Do you provide hands-on help during integration?',
    a: 'Yes. Engineers who work on the product are available for API and console questions, not only first-line scripts. You can share payloads, webhooks, and error codes and get direct feedback.',
  },
  {
    id: 'faq4',
    q: 'Can we book a guided product walkthrough?',
    a: 'Absolutely. We typically run a session focused on your use cases—sandbox sends, dashboards, and failover—so stakeholders see the real flow, not a generic tour.',
  },
  {
    id: 'faq5',
    q: 'When is support available?',
    a: 'Technical coverage runs 24 hours a day for urgent delivery and routing issues. Commercial and onboarding follow regional business hours, with escalation paths for enterprise agreements.',
  },
  {
    id: 'faq6',
    q: 'How do I reach someone in a critical incident?',
    a: 'Enterprise customers receive documented escalation contacts, including after-hours paths. For general traffic, use the priority channel in your agreement or the number and email we assign at onboarding.',
  },
] as const

type TrustPillarId = (typeof TRUST_PILLARS)[number]['id']

function StarRow() {
  return (
    <div className={styles.starRow} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={styles.starChar}>
          ★
        </span>
      ))}
    </div>
  )
}

function TrustIcon({ id }: { id: TrustPillarId }) {
  const c = { className: styles.trustIconSvg, viewBox: '0 0 24 24' as const, fill: 'none' as const, stroke: 'currentColor', strokeWidth: 2, 'aria-hidden': true as const }
  switch (id) {
    case 'speed':
      return (
        <svg {...c}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" strokeLinecap="round" />
        </svg>
      )
    case 'local':
      return (
        <svg {...c}>
          <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z" />
          <circle cx="12" cy="9" r="2" />
        </svg>
      )
    case 'depth':
      return (
        <svg {...c}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    case 'dedicated':
      return (
        <svg {...c}>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      )
    case 'watch':
      return (
        <svg {...c}>
          <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    case 'ramp':
      return (
        <svg {...c}>
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
  }
}

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function ExperienceDifferenceClient() {
  const enterpriseHref = useMemo(() => withZambiaNavHref('/contact-sales', true), [])
  const pricingHref = useMemo(() => withZambiaNavHref('/bulk-sms-zambia/pricing', true), [])
  const [tPerView, setTPerView] = useState(3)
  const [carouselPage, setCarouselPage] = useState(0)
  const [carouselTimerKey, setCarouselTimerKey] = useState(0)
  const [openFaqId, setOpenFaqId] = useState<string | null>(null)

  const tCount = TESTIMONIALS.length
  const tPageCount = Math.max(1, Math.ceil(tCount / tPerView))

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 640px)')
    const sync = () => setTPerView(mq.matches ? 3 : 1)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    setCarouselPage((p) => Math.min(p, tPageCount - 1))
  }, [tPageCount])

  const bumpCarouselTimer = useCallback(() => {
    setCarouselTimerKey((k) => k + 1)
  }, [])

  const goTPrev = useCallback(() => {
    setCarouselPage((p) => (p - 1 + tPageCount) % tPageCount)
    bumpCarouselTimer()
  }, [tPageCount, bumpCarouselTimer])

  const goTNext = useCallback(() => {
    setCarouselPage((p) => (p + 1) % tPageCount)
    bumpCarouselTimer()
  }, [tPageCount, bumpCarouselTimer])

  useEffect(() => {
    if (tPageCount <= 1) return
    const id = window.setInterval(() => {
      setCarouselPage((p) => (p + 1) % tPageCount)
    }, 15000)
    return () => window.clearInterval(id)
  }, [tPageCount, carouselTimerKey])

  const [workEmail, setWorkEmail] = useState('')
  const [company, setCompany] = useState('')
  const [fullName, setFullName] = useState('')
  const [country, setCountry] = useState('')
  const [notes, setNotes] = useState('')
  const [consent, setConsent] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const next: Record<string, string> = {}
    if (!fullName.trim()) next.fullName = 'Please enter your name'
    if (!workEmail.trim()) next.workEmail = 'Work email is required'
    else if (!validateEmail(workEmail)) next.workEmail = 'Enter a valid email address'
    if (!company.trim()) next.company = 'Company name is required'
    if (!country) next.country = 'Select a country'
    if (!consent) next.consent = 'Please accept to continue'

    setErrors(next)
    if (Object.keys(next).length > 0) {
      setStatus('')
      return
    }

    const extra = notes.trim()
    const message = [
      'Zambia experience page — lead request',
      '',
      `Full name: ${fullName.trim()}`,
      `Work email: ${workEmail.trim()}`,
      `Company: ${company.trim()}`,
      `Country: ${country}`,
      ...(extra ? ['', 'Additional details:', extra] : []),
      '',
      'Consent: agreed to receive follow-up from Mr OTP regarding this inquiry.',
    ].join('\n')

    setSubmitting(true)
    setStatus('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fullName.trim(),
          email: workEmail.trim(),
          message,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok) {
        setStatus('Thanks — we received your request and will be in touch shortly.')
        setWorkEmail('')
        setCompany('')
        setFullName('')
        setCountry('')
        setNotes('')
        setConsent(false)
      } else {
        setStatus(typeof data?.error === 'string' ? data.error : 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('Network error. You can also write to info@mr-otp.com')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <p className={styles.heroKicker}>Talk to our team</p>
        <h1 className={styles.heroTitle}>Bring your traffic closer to African subscribers</h1>
        <p className={styles.heroLead}>
          Whether you are piloting or scaling, we help you reach 20+ markets with SMS, voice-ready
          workflows, and WhatsApp—backed by people who understand local routing and compliance.
        </p>
      </header>

      <div className={styles.mainGrid}>
        <div className={styles.formShell}>
          <h2 className={styles.formTitle}>Tell us what you are planning to send</h2>
          <p className={styles.formSubtitle}>
            Share a few details—we will match you with the right commercial and technical contact.
          </p>

          <form onSubmit={handleSubmit} noValidate>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="exp-work-email">
                Work email<span className={styles.req}>*</span>
              </label>
              <input
                id="exp-work-email"
                name="workEmail"
                type="email"
                autoComplete="email"
                className={`${styles.input} ${errors.workEmail ? styles.inputError : ''}`}
                placeholder="you@company.com"
                value={workEmail}
                onChange={(e) => {
                  setWorkEmail(e.target.value)
                  if (errors.workEmail) setErrors((p) => ({ ...p, workEmail: '' }))
                }}
              />
              {errors.workEmail ? <p className={styles.fieldErr}>{errors.workEmail}</p> : null}
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="exp-company">
                Company<span className={styles.req}>*</span>
              </label>
              <input
                id="exp-company"
                name="company"
                type="text"
                autoComplete="organization"
                className={`${styles.input} ${errors.company ? styles.inputError : ''}`}
                placeholder="Your organisation"
                value={company}
                onChange={(e) => {
                  setCompany(e.target.value)
                  if (errors.company) setErrors((p) => ({ ...p, company: '' }))
                }}
              />
              {errors.company ? <p className={styles.fieldErr}>{errors.company}</p> : null}
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="exp-name">
                Full name<span className={styles.req}>*</span>
              </label>
              <input
                id="exp-name"
                name="fullName"
                type="text"
                autoComplete="name"
                className={`${styles.input} ${errors.fullName ? styles.inputError : ''}`}
                placeholder="Jane Doe"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value)
                  if (errors.fullName) setErrors((p) => ({ ...p, fullName: '' }))
                }}
              />
              {errors.fullName ? <p className={styles.fieldErr}>{errors.fullName}</p> : null}
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="exp-country">
                Country<span className={styles.req}>*</span>
              </label>
              <select
                id="exp-country"
                name="country"
                className={`${styles.select} ${errors.country ? styles.inputError : ''}`}
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value)
                  if (errors.country) setErrors((p) => ({ ...p, country: '' }))
                }}
              >
                <option value="">Select country</option>
                {COUNTRY_NAMES.map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
              {errors.country ? <p className={styles.fieldErr}>{errors.country}</p> : null}
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="exp-notes">
                Type message
              </label>
              <textarea
                id="exp-notes"
                name="notes"
                className={styles.textarea}
                rows={5}
                placeholder="Type something if you want…"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            <div className={styles.consentRow}>
              <input
                id="exp-consent"
                name="consent"
                type="checkbox"
                className={styles.checkbox}
                checked={consent}
                onChange={(e) => {
                  setConsent(e.target.checked)
                  if (errors.consent) setErrors((p) => ({ ...p, consent: '' }))
                }}
              />
              <label htmlFor="exp-consent" className={styles.consentText}>
                I agree that Mr OTP may contact me about this request. Submitting this form confirms
                you have read our{' '}
                <Link href="/privacy" className={styles.privacyLink}>
                  Privacy Policy
                </Link>
                .
              </label>
            </div>
            {errors.consent ? <p className={styles.fieldErr}>{errors.consent}</p> : null}

            <button type="submit" className={styles.submitBtn} disabled={submitting}>
              <svg
                className={styles.submitIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {submitting ? 'Sending…' : 'Submit request'}
            </button>

            {status ? (
              <p className={status.includes('Thanks') ? styles.statusOk : styles.statusErr}>{status}</p>
            ) : null}

            <p className={styles.trustFoot}>
              Data is handled under our retention and security practices; you can opt out of
              non-essential follow-ups at any time.
            </p>
          </form>
        </div>

        <aside className={styles.sideCol}>
          <article className={styles.card}>
            <div className={`${styles.cardIcon} ${styles.cardIconMail}`} aria-hidden>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <path d="m22 6-10 7L2 6" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Email the team</h3>
            <p className={styles.cardBody}>
              For general questions, onboarding help, or technical routing—we read every message.
            </p>
            <a className={`${styles.cardLink} ${styles.cardLinkMail}`} href="mailto:info@mr-otp.com">
              info@mr-otp.com
            </a>
          </article>

          <article className={styles.card}>
            <div className={`${styles.cardIcon} ${styles.cardIconPhone}`} aria-hidden>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Call Zambia</h3>
            <p className={styles.cardBody}>Speak with sales about coverage, pricing, and timelines.</p>
            <a className={`${styles.cardLink} ${styles.cardLinkTel}`} href="tel:+260766879147">
              +260 766 879 147
            </a>
          </article>

          <article className={styles.card}>
            <div className={`${styles.cardIcon} ${styles.cardIconPin}`} aria-hidden>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Visit &amp; regional hubs</h3>
            <p className={styles.addressBlock}>
              Great North Business Centre, Elizabeth Villa, along Great North Road, Lusaka, Zambia.
              We also coordinate delivery and support from hubs in Nairobi, Johannesburg, Cairo, and
              Accra.
            </p>
          </article>

          <div className={styles.enterprise}>
            <h3 className={styles.enterpriseTitle}>Volume commits &amp; SLAs</h3>
            <p className={styles.enterpriseBody}>
              Need bespoke pricing, a named escalation path, or contractual delivery targets? Our
              enterprise desk shapes programmes around your audit and procurement needs.
            </p>
            <Link href={enterpriseHref} className={styles.enterpriseBtn}>
              Contact sales
            </Link>
          </div>
        </aside>
      </div>

      <section className={styles.trustBand} aria-labelledby="exp-trust-heading">
        <div className={styles.trustInner}>
          <header className={styles.trustHeader}>
            <h2 id="exp-trust-heading" className={styles.trustTitle}>
              Why teams lean on our support
            </h2>
            <p className={styles.trustLead}>
              Regional specialists, consistent playbooks, and a service model built for real traffic.
            </p>
          </header>
          <div className={styles.trustGrid}>
            {TRUST_PILLARS.map((p) => (
              <article key={p.id} className={styles.trustCard}>
                <div className={styles.trustIconWrap} aria-hidden>
                  <TrustIcon id={p.id} />
                </div>
                <h3 className={styles.trustCardTitle}>{p.title}</h3>
                <p className={styles.trustCardBody}>{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.journeyBand} aria-labelledby="exp-journey-heading">
        <div className={styles.journeyInner}>
          <header className={styles.journeyHeader}>
            <h2 id="exp-journey-heading" className={styles.journeyTitle}>
              What happens after you get in touch
            </h2>
            <p className={styles.journeyLead}>
              A straightforward path from first reply to production—without hidden steps.
            </p>
          </header>
          <ol className={styles.journeyGrid}>
            {JOURNEY_STEPS.map((s) => (
              <li key={s.step} className={styles.journeyCard}>
                <div className={styles.journeyNum} aria-hidden>
                  {s.step}
                </div>
                <h3 className={styles.journeyCardTitle}>{s.title}</h3>
                <p className={styles.journeyCardBody}>{s.body}</p>
                <span className={styles.journeyBadge}>{s.badge}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.tStoriesBand} aria-labelledby="exp-stories-heading">
        <div className={styles.tStoriesInner}>
          <header className={styles.tStoriesHeader}>
            <h2 id="exp-stories-heading" className={styles.tStoriesTitle}>
              What our clients say
            </h2>
            <p className={styles.tStoriesLead}>
              Voices from banks, operators, and product teams—uptime, local depth, and integration
              support that does not end at a ticket number.
            </p>
          </header>

          <div
            className={tPageCount > 1 ? styles.tCarouselRow : styles.tCarouselRowSingle}
            aria-label="Testimonial carousel"
          >
            {tPageCount > 1 ? (
              <button
                type="button"
                className={styles.tNavSide}
                onClick={goTPrev}
                aria-label="Previous reviews"
              >
                <span className={styles.srOnly}>Previous</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            ) : null}

            <div className={styles.tStoriesViewport}>
              <ul
                className={styles.tStoriesTrack}
                style={
                  {
                    '--t-count': tCount,
                    '--t-per': tPerView,
                    '--t-page': carouselPage,
                  } as CSSProperties
                }
              >
                {TESTIMONIALS.map((t) => (
                  <li key={t.id} className={styles.tCard}>
                    <div className={styles.tCardAccent} aria-hidden />
                    <StarRow />
                    <blockquote className={styles.tQuote}>&ldquo;{t.quote}&rdquo;</blockquote>
                    <p className={styles.tName}>{t.name}</p>
                    <p className={styles.tRole}>{t.role}</p>
                    <span className={styles.tTag}>{t.tag}</span>
                  </li>
                ))}
              </ul>
            </div>

            {tPageCount > 1 ? (
              <button
                type="button"
                className={styles.tNavSide}
                onClick={goTNext}
                aria-label="Next reviews"
              >
                <span className={styles.srOnly}>Next</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            ) : null}
          </div>

          {tPageCount > 1 ? (
            <ul className={styles.tDots} role="group" aria-label="Review pages">
              {Array.from({ length: tPageCount }, (_, i) => (
                <li key={i}>
                  <button
                    type="button"
                    aria-current={i === carouselPage ? 'true' : undefined}
                    className={i === carouselPage ? styles.tDotActive : styles.tDot}
                    onClick={() => {
                      setCarouselPage(i)
                      bumpCarouselTimer()
                    }}
                    aria-label={`Show reviews page ${i + 1} of ${tPageCount}`}
                  />
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </section>

      <section className={styles.faqBand} aria-labelledby="exp-faq-heading">
        <div className={styles.faqInner}>
          <header className={styles.faqHeader}>
            <h2 id="exp-faq-heading" className={styles.faqTitle}>
              Questions we hear often
            </h2>
            <p className={styles.faqLead}>
              Straight answers on onboarding, support hours, and how to reach us when it matters.
            </p>
          </header>
          <ul className={styles.faqList}>
            {FAQ_ITEMS.map((item) => {
              const open = openFaqId === item.id
              return (
                <li key={item.id} className={styles.faqItem}>
                  <button
                    type="button"
                    className={styles.faqTrigger}
                    aria-expanded={open}
                    onClick={() => setOpenFaqId(open ? null : item.id)}
                    id={`faq-btn-${item.id}`}
                    aria-controls={`faq-panel-${item.id}`}
                  >
                    <span className={styles.faqQ}>{item.q}</span>
                    <span className={styles.faqChevronWrap} aria-hidden>
                      <svg
                        className={open ? styles.faqChevronOpen : styles.faqChevron}
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${item.id}`}
                    className={open ? styles.faqPanelOpen : styles.faqPanel}
                    hidden={!open}
                    aria-hidden={!open}
                  >
                    <p className={styles.faqA}>{item.a}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className={styles.ctaBand} aria-labelledby="exp-cta-heading">
        <div className={styles.ctaInner}>
          <div className={styles.ctaGlass}>
            <h2 id="exp-cta-heading" className={styles.ctaTitle}>
              Ready to refresh the way you reach customers?
            </h2>
            <p className={styles.ctaLead}>
              Thousands of teams across Africa already run traffic with us—begin with complimentary
              test credits and explore the console at your own pace.
            </p>
            <div className={styles.ctaActions}>
              <Link href={pricingHref} className={styles.ctaPrimary}>
                Explore plans &amp; rates
              </Link>
              <Link href={enterpriseHref} className={styles.ctaSecondary}>
                Contact sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
