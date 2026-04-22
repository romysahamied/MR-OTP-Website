import Image from 'next/image'
import Link from 'next/link'
import styles from './AboutPage.module.css'

const CORE_VALUES = [
  {
    title: 'Reliability at the core',
    body:
      'Your traffic is never “nice to have”—it runs login flows, alerts, and revenue moments. We engineer for predictable delivery: redundant paths, live monitoring, and tight operational discipline so APIs stay up when it matters.',
    icon: 'shield' as const,
    tone: 'rose' as const,
  },
  {
    title: 'Success is measured in your results',
    body:
      'We judge our work by whether your programmes launch cleanly and stay healthy. Support can go deep on routing and integration; account teams focus on outcomes, not quotas—when you grow, we grow.',
    icon: 'heart' as const,
    tone: 'sky' as const,
  },
  {
    title: 'Move quickly, ship deliberately',
    body:
      'Messaging stacks evolve fast; we keep pace with frequent improvements and short feedback loops from real production traffic. We adopt practical automation and smarter tooling so your team keeps an edge without extra chaos.',
    icon: 'bolt' as const,
    tone: 'amber' as const,
  },
] as const

const CORE_VALUE_TONE_CLASS: Record<(typeof CORE_VALUES)[number]['tone'], string> = {
  rose: styles.iconToneRose,
  sky: styles.iconToneSky,
  amber: styles.iconToneAmber,
}

const CORE_VALUE_CARD_CLASS: Record<(typeof CORE_VALUES)[number]['tone'], string> = {
  rose: styles.coreValueCardRose,
  sky: styles.coreValueCardSky,
  amber: styles.coreValueCardAmber,
}

const CORE_VALUE_TITLE_CLASS: Record<(typeof CORE_VALUES)[number]['tone'], string> = {
  rose: styles.coreValueTitleRose,
  sky: styles.coreValueTitleSky,
  amber: styles.coreValueTitleAmber,
}

const DELIVERY_METRICS = [
  { label: 'SMS delivery', value: 99.7, variant: 'sms' as const },
  { label: 'Voice call completion', value: 98.9, variant: 'voice' as const },
  { label: 'WhatsApp delivery', value: 99.1, variant: 'whatsapp' as const },
  { label: 'API uptime', value: 99.95, variant: 'api' as const },
] as const

const METRIC_CARD_CLASS: Record<(typeof DELIVERY_METRICS)[number]['variant'], string> = {
  sms: styles.metricCardSms,
  voice: styles.metricCardVoice,
  whatsapp: styles.metricCardWhatsapp,
  api: styles.metricCardApi,
}

const METRIC_BAR_CLASS: Record<(typeof DELIVERY_METRICS)[number]['variant'], string> = {
  sms: styles.metricBarFillSms,
  voice: styles.metricBarFillVoice,
  whatsapp: styles.metricBarFillWhatsapp,
  api: styles.metricBarFillApi,
}

const METRIC_VALUE_CLASS: Record<(typeof DELIVERY_METRICS)[number]['variant'], string> = {
  sms: styles.metricValueSms,
  voice: styles.metricValueVoice,
  whatsapp: styles.metricValueWhatsapp,
  api: styles.metricValueApi,
}

const REGIONAL_HUBS = [
  {
    id: 'ae',
    name: 'UAE',
    countryLabel: 'United Arab Emirates',
    company: 'Mr OTP LLC',
    addressLines: [
      'Shams Business Center, Sharjah Media City, Sharjah, United Arab Emirates',
    ],
    flagCode: 'ae',
    tel: '+12678055853',
    display: '+1 (267) 805-5853',
    registration: ['Business Liscence No: 2535738'],
  },
  {
    id: 'gb',
    name: 'UK',
    countryLabel: 'United Kingdom',
    company: 'Mr OTP LTD',
    addressLines: [
      '71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom',
    ],
    flagCode: 'gb',
    tel: '+447360539406',
    display: '+44 7360 539406',
    registration: ['Business Liscence No: 15553796'],
  },
  {
    id: 'zm',
    name: 'Zambia',
    countryLabel: 'Zambia',
    company: 'Mr OTP LTD',
    addressLines: [
      'Great North Business Centre, Elizabeth Villa, along Great North Road, Lusaka, Zambia',
    ],
    flagCode: 'zm',
    tel: '+260766879147',
    display: '+260 766 879 147',
    registration: ['Business Liscence No: 220250000516'],
  },
] as const

const ABOUT_COMPANY_STATS = [
  {
    value: '10,000+',
    title: 'Enterprise customers',
    sub: 'Organisations that lean on us for business-critical delivery across the African markets we serve',
    tone: 'warm' as const,
  },
  {
    value: '20+',
    title: 'African countries',
    sub: 'On-the-ground coverage with operator relationships you can route against with confidence',
    tone: 'honey' as const,
  },
  {
    value: '500M+',
    title: 'Monthly message volume',
    sub: 'Scale that remains steady when your peaks arrive—built for surges, not just slides',
    tone: 'sand' as const,
  },
] as const

const ABOUT_STAT_TONE: Record<
  (typeof ABOUT_COMPANY_STATS)[number]['tone'],
  { card: string; value: string }
> = {
  warm: { card: styles.aboutStatCardWarm, value: styles.aboutStatValueWarm },
  honey: { card: styles.aboutStatCardHoney, value: styles.aboutStatValueHoney },
  sand: { card: styles.aboutStatCardSand, value: styles.aboutStatValueSand },
}

const WHY_POINTS = [
  'REST and SMPP-capable SMS APIs with documentation your developers can ship against quickly.',
  'OTP and transactional paths engineered for low latency and strong conversion on verification flows.',
  'Bulk and promotional sends with scheduling, analytics, and delivery transparency across major routes.',
  'Omnichannel expansion: WhatsApp Business and more—without fragmenting your operational playbooks.',
  'Global operator relationships and regional hubs (UAE, UK, Zambia) for responsive commercial and technical coverage.',
  'Commercial models that scale with volume—no surprise line items buried in fine print.',
] as const

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <section className={styles.heroBand} aria-labelledby="about-hero-heading">
        <div className={styles.heroBandCard}>
          <h1 id="about-hero-heading" className={styles.heroBandTitle}>
            <span className={styles.heroBandTitleLight}>Global reach,</span>{' '}
            <span className={styles.heroBandTitleAccent}>one message at a time</span>
          </h1>
          <p className={styles.heroBandLead}>
            Enterprise messaging you can run in production—built around real operator constraints,
            regional coverage patterns, and regulatory nuance, not a one-size-fits-all global template.
          </p>
        </div>
      </section>

      <div className={styles.inner}>
        <section className={styles.coreValues} aria-labelledby="core-values-heading">
          <header className={styles.coreValuesHeader}>
            <h2 id="core-values-heading" className={styles.coreValuesTitle}>
              Principles that steer everything we build
            </h2>
            <p className={styles.coreValuesLead}>
              From APIs to routing to how we answer the phone—these ideas shape how we design products,
              support customers, and invest in connectivity across regions and routes.
            </p>
          </header>
          <div className={styles.coreValuesGrid}>
            {CORE_VALUES.map((item) => (
              <article
                key={item.title}
                className={`${styles.coreValueCard} ${CORE_VALUE_CARD_CLASS[item.tone]}`}
              >
                <div
                  className={`${styles.coreValueIconWrap} ${CORE_VALUE_TONE_CLASS[item.tone]}`}
                  aria-hidden
                >
                  {item.icon === 'shield' && (
                    <svg className={styles.coreValueIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {item.icon === 'heart' && (
                    <svg className={styles.coreValueIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                      <path
                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  {item.icon === 'bolt' && (
                    <svg className={styles.coreValueIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <h3
                  className={`${styles.coreValueCardTitle} ${CORE_VALUE_TITLE_CLASS[item.tone]}`}
                >
                  {item.title}
                </h3>
                <p className={styles.coreValueCardText}>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.aboutCompany} aria-labelledby="about-company-heading">
          <div className={styles.aboutCompanyGrid}>
            <div className={styles.splitText}>
              <h2 id="about-company-heading">About our company</h2>
              <p>
                <strong>
                  Your users expect messages that show up on time, every time—that expectation starts with
                  connectivity you can run in production, not a demo.
                </strong>{' '}
                Mr-OTP offers A2P SMS and the adjacent channels you need to verify people, nudge customers, and
                power campaigns, from one well-documented surface that behaves predictably when traffic
                grows.
              </p>
              <p>
                We are incorporated in the{' '}
                <strong>United Arab Emirates, United Kingdom, and Zambia</strong> and we work alongside
                operators and aggregators around the world to ensure smooth, high-performance message delivery across regions.
              </p>
              <p>
                Our platform uses intelligent routing and failover systems to maintain speed and reliability, even under heavy load. With real-time insights and easy API integration, you get full control and visibility over every message.
              </p>
              <p>
              Transparency is at the core of our platform. Real-time delivery insights, detailed logs, and webhook support give you full visibility into every message—helping you monitor performance, debug issues, and optimize campaigns.
              </p>
            </div>
            <div className={styles.aboutStatStack} aria-label="Key figures">
              {ABOUT_COMPANY_STATS.map((item) => {
                const t = ABOUT_STAT_TONE[item.tone]
                return (
                  <article
                    key={item.title}
                    className={`${styles.aboutStatCard} ${t.card}`}
                  >
                    <p className={`${styles.aboutStatValue} ${t.value}`}>{item.value}</p>
                    <h3 className={styles.aboutStatTitle}>{item.title}</h3>
                    <p className={styles.aboutStatSub}>{item.sub}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className={styles.regionalHubs} aria-labelledby="regional-hubs-heading">
          <h2 id="regional-hubs-heading" className={styles.regionalHubsTitle}>
            Incorporated in
          </h2>
          <ul className={styles.regionalHubsGrid}>
            {REGIONAL_HUBS.map((hub) => (
              <li key={hub.id} className={styles.regionalCard}>
                <div
                  className={styles.regionalCardTop}
                  title={hub.countryLabel}
                >
                  <span className={styles.regionalFlagWrap}>
                    <Image
                      src={`https://flagcdn.com/w80/${hub.flagCode}.png`}
                      alt=""
                      width={40}
                      height={30}
                      className={styles.regionalFlagImg}
                      sizes="40px"
                      aria-hidden
                    />
                  </span>
                  <span className={styles.regionalName}>{hub.name}</span>
                </div>
                <p className={styles.regionalCompany}>{hub.company}</p>
                <address className={styles.regionalAddress}>
                  {hub.addressLines.map((line) => (
                    <span key={line} className={styles.regionalAddressLine}>
                      {line}
                    </span>
                  ))}
                </address>
                <a href={`tel:${hub.tel}`} className={styles.regionalPhone}>
                  <span className={styles.regionalPhoneIcon} aria-hidden>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <span className={styles.regionalPhoneText}>{hub.display}</span>
                </a>
                <div
                  className={styles.regionalReg}
                  role="group"
                  aria-label={`${hub.countryLabel} company registration`}
                >
                  {hub.registration.map((line) => (
                    <p key={line} className={styles.regionalRegLine}>
                      {line}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.deliveryExcellence} aria-labelledby="delivery-excellence-heading">
          <header className={styles.deliveryHeader}>
            <h2 id="delivery-excellence-heading" className={styles.deliveryTitle}>
              Committed to delivery excellence
            </h2>
            <p className={styles.deliveryLead}>
              Completion rates are more than a KPI on a slide—each point reflects whether your
              verifications, alerts, and campaigns actually reach the handset when it matters.
            </p>
          </header>
          <div className={styles.deliveryRow}>
            <div className={styles.deliveryCopy}>
              <h3 className={styles.deliverySubheading}>SMS delivery that holds up—route by route, worldwide</h3>
              <p>
                Mobile networks across the continent are not uniform: coverage, regulations,
                and carrier behaviour vary significantly by country and even by region within
                a country. Maintaining consistently high delivery rates therefore depends on
                building long-term operator relationships, staying aligned with evolving local
                requirements, and continuously revisiting routing logic as conditions
                shift—this is not a one-time setup but an ongoing process that requires
                active attention and refinement.
              </p>
              <p>
                Our network operations centre monitors live performance around the clock,
                providing real-time visibility into delivery health across all routes.
                When a route begins to show signs of strain or degradation, automated systems
                intelligently shift traffic to healthier paths, often before any issue becomes
                noticeable to end users or downstream systems.
              </p>
              <p>
                We also refresh delivery statistics at a frequent cadence, ensuring that the
                data reflects current performance rather than outdated trends. Enterprise teams
                can access these insights directly in the console, enabling product, engineering,
                and operations teams to work from a single, transparent, and accurate view of what
                was actually delivered and where improvements may be needed.
              </p>
            </div>
            <div className={styles.deliveryMetrics}>
              {DELIVERY_METRICS.map((m) => (
                <article key={m.label} className={`${styles.metricCard} ${METRIC_CARD_CLASS[m.variant]}`}>
                  <div className={styles.metricCardBody}>
                    <p className={styles.metricLabel}>{m.label}</p>
                    <p className={`${styles.metricValue} ${METRIC_VALUE_CLASS[m.variant]}`}>
                      {m.value}
                      <span className={styles.metricValuePct} aria-hidden>
                        %
                      </span>
                    </p>
                  </div>
                  <div className={styles.metricBarTrack} aria-hidden>
                    <div
                      className={`${styles.metricBarFill} ${METRIC_BAR_CLASS[m.variant]}`}
                      style={{ width: `${Math.min(100, m.value)}%` }}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.why} aria-labelledby="why-heading">
          <div>
            <p className={styles.whyHeading} id="why-heading">
              Why teams choose Mr-OTP
            </p>
            <ul className={styles.whyList}>
              {WHY_POINTS.map((line) => (
                <li key={line}>
                  <span className={styles.check} aria-hidden>
                    ✓
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.whyVisual}>
            <Image
              src="/aboutcompany.png"
              alt="Mr-OTP platform: APIs, messaging integrations, and secure workflows"
              width={1536}
              height={1024}
              sizes="(max-width: 899px) 100vw, min(42vw, 640px)"
              className={styles.whyVisualImage}
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        <section className={styles.cta} aria-labelledby="about-cta-heading">
          <h2 id="about-cta-heading">Start the conversation</h2>
          <p>
            Tell us about your volumes, destinations, and timelines—we&apos;ll map a path that fits your
            stack and compliance needs.
          </p>
          <div className={styles.ctaActions}>
            <Link href="/contact-sales" className={styles.btnPrimary}>
              Contact sales
            </Link>
            <Link href="/get-started?from=about" className={styles.btnGhost}>
              Request a trial
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
