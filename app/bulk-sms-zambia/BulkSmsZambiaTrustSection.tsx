import trustStyles from './BulkSmsZambiaTrust.module.css'

const industries = [
  { name: 'Banks', icon: '🏦', accent: trustStyles.accentBlue, cardTint: trustStyles.cardTintBlue },
  { name: 'Fintech', icon: '💳', accent: trustStyles.accentGreen, cardTint: trustStyles.cardTintGreen },
  { name: 'E-commerce', icon: '📈', accent: trustStyles.accentPurple, cardTint: trustStyles.cardTintPurple },
  { name: 'Healthcare', icon: '🛡️', accent: trustStyles.accentRed, cardTint: trustStyles.cardTintRed },
  { name: 'Education', icon: '🎓', accent: trustStyles.accentGold, cardTint: trustStyles.cardTintGold },
  { name: 'Logistics', icon: '📦', accent: trustStyles.accentOrange, cardTint: trustStyles.cardTintOrange },
  { name: 'Retail', icon: '🛒', accent: trustStyles.accentPink, cardTint: trustStyles.cardTintPink },
  { name: 'Government', icon: '🌐', accent: trustStyles.accentSlate, cardTint: trustStyles.cardTintSlate },
] as const

const bottomStats = [
  { value: '2,500+', label: 'Active businesses' },
  { value: '50M+', label: 'Messages / month' },
  { value: '99.2%', label: 'Delivery success' },
  { value: '50+', label: 'Countries served' },
] as const

export default function BulkSmsZambiaTrustSection() {
  return (
    <section className={trustStyles.trustSection} aria-labelledby="zambia-trust-heading">
      <div className={trustStyles.trustHeader}>
        <p className={trustStyles.trustBadge}>
          <span aria-hidden>★</span>
          Trusted across industries
        </p>
        <h2 id="zambia-trust-heading" className={trustStyles.trustTitle}>
          Trusted by leading African enterprises
        </h2>
        <p className={trustStyles.trustSub}>
          From growth-stage startups to established institutions, teams across the continent rely on
          Mr OTP for mission-critical SMS—OTP, alerts, campaigns, and API-driven messaging with
          operator-aware routing.
        </p>
      </div>

      <div className={trustStyles.industryGrid}>
        {industries.map(({ name, icon, accent, cardTint }) => (
          <article key={name} className={`${trustStyles.industryCard} ${cardTint}`}>
            <div className={`${trustStyles.iconBox} ${accent}`} aria-hidden>
              {icon}
            </div>
            <h3 className={trustStyles.industryName}>{name}</h3>
            <div className={trustStyles.verifiedRow}>
              <span className={trustStyles.verifiedIcon}>✓</span>
              Verified
            </div>
          </article>
        ))}
      </div>

      <div className={trustStyles.statRow}>
        {bottomStats.map(({ value, label }) => (
          <div key={label} className={trustStyles.statGlass}>
            <div className={trustStyles.statGlassValue}>{value}</div>
            <div className={trustStyles.statGlassLabel}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
