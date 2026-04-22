import Link from 'next/link'
import { withZambiaNavHref } from '@/components/zambiaNav'
import { entryTierTeaser } from '@/lib/zambiaVolumePricing'
import styles from './BulkSmsZambiaPricingSection.module.css'

const tiers = [
  {
    id: 'launch',
    name: 'Launch',
    description: 'Ideal for proofs-of-concept and light outbound volume.',
    featured: false,
    cta: { label: 'Start free trial', href: '/get-started?from=zambia-pricing' },
    features: [
      'Pay-as-you-go SMS',
      'Multi-country coverage across Africa',
      'A2P delivery with operator-aware routing',
      'REST SMS API access',
      'Sender ID where regulations allow',
      'Delivery reports in dashboard',
      'Email support',
      'Sandbox credits to validate flows',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    description: 'For teams with steady traffic and tighter SLAs on delivery.',
    featured: true,
    cta: { label: 'Start free trial', href: '/get-started?from=zambia-pricing' },
    features: [
      'Higher monthly SMS volumes',
      'Priority routing on busy routes',
      'Multi-country SMS (20+ markets)',
      'Advanced delivery analytics',
      'OTP & transactional messaging',
      'API access with optional SMPP',
      'Improved throughput tiers',
      'Priority email & chat support',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large programmes, custom terms, and always-on operations.',
    featured: false,
    cta: { label: 'Contact sales', href: '/contact-sales' },
    features: [
      'Very high or bespoke volume tiers',
      'Country-specific routing controls',
      'Dedicated / preferential SMS routes',
      'Sender registration & compliance support',
      'SLA-backed delivery targets',
      'Named account manager',
      '24/7 technical escalation',
      'Custom API & SMPP integration help',
    ],
  },
] as const

const included = [
  {
    title: 'No long lock-ins',
    meta: 'Leave when your contract cycle ends',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: 'Quick to go live',
    meta: 'Provision routes without weeks of paperwork',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: 'Balance safeguards',
    meta: 'Low-balance alerts & optional auto top-up',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M23 4v6h-6M20.49 15a9 9 0 1 1-.34-6.26L23 10" />
      </svg>
    ),
  },
  {
    title: 'Volume rewards',
    meta: 'Better unit rates as you scale sends',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
] as const

export default function BulkSmsZambiaPricingSection() {
  return (
    <section className={styles.wrap} aria-labelledby="zambia-pricing-tiers-heading">
      <header className={styles.header}>
        <p className={styles.kicker}>Plans</p>
        <h2 id="zambia-pricing-tiers-heading" className={styles.title}>
          Straightforward pricing, no surprise line items
        </h2>
        <p className={styles.sub}>
          No setup tax. You pay for delivered messaging and the routes you need—volume breaks apply as
          your programme grows across Zambia and the rest of the continent.
        </p>
        <p className={styles.volumeTeaser}>
          {entryTierTeaser()}.{' '}
          <Link href={withZambiaNavHref('/bulk-sms-zambia/pricing', true)} className={styles.volumeTeaserLink}>
            Full volume tier table →
          </Link>
        </p>
      </header>

      <div className={styles.tiers}>
        {tiers.map((tier) => (
          <article
            key={tier.id}
            className={`${styles.card} ${tier.featured ? styles.cardFeatured : ''}`}
          >
            {tier.featured ? <span className={styles.badge}>Most popular</span> : null}
            <h3 className={styles.cardTitle}>{tier.name}</h3>
            <p className={styles.cardDesc}>{tier.description}</p>
            <ul className={styles.list}>
              {tier.features.map((line) => (
                <li key={line}>
                  <span className={styles.check} aria-hidden>
                    ✓
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <Link href={withZambiaNavHref(tier.cta.href, true)} className={styles.btnPrimary}>
              {tier.cta.label}
            </Link>
          </article>
        ))}
      </div>

      <div className={styles.included}>
        <div className={styles.includedHeader}>
          <h3 className={styles.includedTitle}>Every tier ships with this baseline</h3>
          <p className={styles.includedSub}>
            Operational safeguards and commercial clarity—whether you&apos;re on Launch or Enterprise.
          </p>
        </div>
        <div className={styles.includedGrid}>
          {included.map(({ title, meta, icon }) => (
            <div key={title} className={styles.includedItem}>
              <div className={styles.iconHex}>{icon}</div>
              <div className={styles.itemBody}>
                <p className={styles.itemTitle}>{title}</p>
                <p className={styles.itemMeta}>{meta}</p>
              </div>
            </div>
          ))}
        </div>
        <p className={styles.detailLink}>
          <Link href="/bulk-sms-zambia/pricing">Destination-specific rates &amp; contract notes →</Link>
        </p>
      </div>
    </section>
  )
}
