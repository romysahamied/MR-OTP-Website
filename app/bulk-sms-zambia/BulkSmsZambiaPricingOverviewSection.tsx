import Link from 'next/link'
import { withZambiaNavHref } from '@/components/zambiaNav'
import { ZAMBIA_SMS_VOLUME_TIERS, formatZmwListPrice } from '@/lib/zambiaVolumePricing'
import styles from './BulkSmsZambiaPricingOverview.module.css'

const highlights = [
  {
    title: 'Network-specific rates',
    text: 'Published A2P rates for Zamtel, MTN Zambia, and Airtel—see costs per network before you send.',
  },
  {
    title: 'Kwacha list by volume',
    text: 'Published ZMW per SMS by monthly tier; use the full pricing page for EUR/USD reference columns and the interactive table.',
  },
  {
    title: 'Volume tiers',
    text: 'Launch through Enterprise tracks with clearer features as monthly SMS volume grows.',
  },
] as const

export default function BulkSmsZambiaPricingOverviewSection() {
  const pricingHref = withZambiaNavHref('/bulk-sms-zambia/pricing', true)

  return (
    <section className={styles.section} aria-labelledby="pricing-overview-heading">
      <div className={styles.inner}>
        <p className={styles.badge}>Pricing overview</p>
        <h2 id="pricing-overview-heading" className={styles.title}>
          How we price bulk SMS in Zambia
        </h2>
        <p className={styles.lede}>
          Transparent, operator-aware rates with multi-currency support. Compare networks, understand volume
          tiers, and use the interactive calculator on the full pricing page to model costs for your
          programme.
        </p>
        <div className={styles.tableWrap}>
          <table className={styles.priceTable} aria-label="Zambia bulk SMS ZMW list by monthly volume">
            <thead>
              <tr>
                <th scope="col">Monthly SMS volume</th>
                <th scope="col">Price per SMS (ZMW)</th>
              </tr>
            </thead>
            <tbody>
              {ZAMBIA_SMS_VOLUME_TIERS.map((row) => (
                <tr key={row.volumeLabel}>
                  <td>{row.volumeLabel}</td>
                  <td>
                    <span className={styles.priceCell}>{formatZmwListPrice(row.listZmwPerSms)}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className={styles.grid}>
          {highlights.map((item) => (
            <li key={item.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </li>
          ))}
        </ul>
        <div className={styles.ctaRow}>
          <Link href={pricingHref} className={styles.viewDetails}>
            View details
          </Link>
        </div>
      </div>
    </section>
  )
}
