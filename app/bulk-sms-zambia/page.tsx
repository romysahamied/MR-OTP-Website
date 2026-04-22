import Link from 'next/link'
import { withZambiaNavHref } from '@/components/zambiaNav'
import shellStyles from './BulkSmsZambiaShell.module.css'
import BulkSmsZambiaTrustSection from './BulkSmsZambiaTrustSection'
import BulkSmsZambiaPricingOverviewSection from './BulkSmsZambiaPricingOverviewSection'
import BulkSmsZambiaChannelsSection from './BulkSmsZambiaChannelsSection'
import BulkSmsZambiaGatewaySection from './BulkSmsZambiaGatewaySection'
import BulkSmsZambiaAfricaNeedsSection from './BulkSmsZambiaAfricaNeedsSection'
import BulkSmsZambiaEveryIndustrySection from './BulkSmsZambiaEveryIndustrySection'
import BulkSmsZambiaCoverageSection from './BulkSmsZambiaCoverageSection'
import BulkSmsZambiaUseCasesSection from './BulkSmsZambiaUseCasesSection'
import BulkSmsZambiaCompareSection from './BulkSmsZambiaCompareSection'
import BulkSmsZambiaMarketingSection from './BulkSmsZambiaMarketingSection'
import BulkSmsZambiaIntegrationSection from './BulkSmsZambiaIntegrationSection'
import BulkSmsZambiaPricingSection from './BulkSmsZambiaPricingSection'
import BulkSmsZambiaEnterpriseFeaturesSection from './BulkSmsZambiaEnterpriseFeaturesSection'
import BulkSmsZambiaQuickStartSection from './BulkSmsZambiaQuickStartSection'
import BulkSmsZambiaTestimonialsSection from './BulkSmsZambiaTestimonialsSection'
import BulkSmsZambiaFaqSection from './BulkSmsZambiaFaqSection'
import BulkSmsZambiaCtaSection from './BulkSmsZambiaCtaSection'

export default function BulkSmsZambiaHomePage() {
  return (
    <>
      <section className={shellStyles.hero}>
        <div className={shellStyles.badge}>
          <span className={shellStyles.badgeIcon} aria-hidden>
            ★
          </span>
          Trusted by 2,500+ businesses in emerging markets
        </div>
        <h1 className={shellStyles.heroTitle}>
          Messaging platform
          <span className={shellStyles.heroTitleAccent}>built for Africa</span>
        </h1>
        <p className={shellStyles.heroSub}>
          Enterprise SMS with resilient routing to Zambian networks, optional voice-ready workflows,
          and REST APIs your team can ship in days—not months. Transparent delivery reporting and
          onboarding support from day one.
        </p>
        <div className={shellStyles.heroCtas}>
          <Link href={withZambiaNavHref('/get-started?from=zambia', true)} className={shellStyles.btnPrimary}>
            Start free trial
            <span className={shellStyles.btnPrimaryArrow} aria-hidden>
              →
            </span>
          </Link>
        </div>
        <div className={shellStyles.trustRow}>
          <span className={shellStyles.trustItem}>
            <span className={shellStyles.check} aria-hidden>
              ✓
            </span>{' '}
            No credit card to explore
          </span>
          <span className={shellStyles.trustItem}>
            <span className={shellStyles.check} aria-hidden>
              ✓
            </span>{' '}
            Free sandbox credits
          </span>
          <span className={shellStyles.trustItem}>
            <span className={shellStyles.check} aria-hidden>
              ✓
            </span>{' '}
            Guided setup
          </span>
        </div>
      </section>

      <BulkSmsZambiaTrustSection />
      <BulkSmsZambiaPricingOverviewSection />
      <BulkSmsZambiaChannelsSection />
      <BulkSmsZambiaGatewaySection />
      <BulkSmsZambiaAfricaNeedsSection />
      <BulkSmsZambiaEveryIndustrySection />
      <BulkSmsZambiaCoverageSection />
      <BulkSmsZambiaUseCasesSection />
      <BulkSmsZambiaCompareSection />
      <BulkSmsZambiaMarketingSection />
      <BulkSmsZambiaIntegrationSection />
      <BulkSmsZambiaPricingSection />
      <BulkSmsZambiaEnterpriseFeaturesSection />
      <BulkSmsZambiaQuickStartSection />
      <BulkSmsZambiaTestimonialsSection />
      <BulkSmsZambiaFaqSection />
      <BulkSmsZambiaCtaSection />
    </>
  )
}
