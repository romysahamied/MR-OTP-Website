'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  ZAMBIA_SMS_VOLUME_TIERS,
  ZAMBIA_FX_FALLBACK,
  tierPriceInDisplayCurrency,
  formatZmwListPrice,
} from '@/lib/zambiaVolumePricing'
import styles from './BulkSmsZambiaPricingInteractive.module.css'

type Currency = 'zmw' | 'eur' | 'usd'

type FxState = {
  eurToZmw: number
  eurToUsd: number
  fetchedAt: Date
  live: boolean
} | null

const FEATURES = [
  'No setup fees',
  'No monthly minimums',
  'Pay-as-you-go billing',
  'Free test credits',
  'Web portal access',
  'RESTful SMS API',
  'Real-time analytics',
  'Delivery reports',
  'Sender ID registration',
  '24/7 support',
  'Multi-country sending',
  'Unicode & long SMS',
] as const

function formatMoney(amount: number, currency: Currency): string {
  if (currency === 'eur') {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 3,
      maximumFractionDigits: 4,
    }).format(amount)
  }
  if (currency === 'usd') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 3,
      maximumFractionDigits: 4,
    }).format(amount)
  }
  return new Intl.NumberFormat('en-ZM', {
    style: 'currency',
    currency: 'ZMW',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

async function fetchEurRates(): Promise<{ zmw: number; usd: number } | null> {
  const urls = [
    'https://latest.currency-api.pages.dev/v1/currencies/eur.json',
    'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.min.json',
  ]
  for (const url of urls) {
    try {
      const res = await fetch(url, { cache: 'no-store' })
      if (!res.ok) continue
      const data = (await res.json()) as { eur?: Record<string, number> }
      const eur = data.eur
      if (!eur) continue
      const zmw = eur.zmw
      const usd = eur.usd
      if (typeof zmw === 'number' && zmw > 0 && typeof usd === 'number' && usd > 0) {
        return { zmw, usd }
      }
    } catch {
      /* try next */
    }
  }
  return null
}

export default function BulkSmsZambiaPricingInteractive() {
  const [currency, setCurrency] = useState<Currency>('zmw')
  const [fx, setFx] = useState<FxState>(null)
  const [fxError, setFxError] = useState(false)

  const loadRates = useCallback(async () => {
    setFxError(false)
    const rates = await fetchEurRates()
    if (rates) {
      setFx({
        eurToZmw: rates.zmw,
        eurToUsd: rates.usd,
        fetchedAt: new Date(),
        live: true,
      })
    } else {
      setFx(null)
      setFxError(true)
    }
  }, [])

  useEffect(() => {
    loadRates()
    const id = setInterval(loadRates, 5 * 60 * 1000)
    return () => clearInterval(id)
  }, [loadRates])

  const tierRows = useMemo(
    () =>
      ZAMBIA_SMS_VOLUME_TIERS.map((tier) => {
        const amount = tierPriceInDisplayCurrency(tier, currency)
        const display =
          currency === 'zmw' ? formatZmwListPrice(amount) : formatMoney(amount, currency)
        return { tier, display }
      }),
    [currency],
  )

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      /* ignore */
    }
  }

  const e2z = fx?.eurToZmw ?? ZAMBIA_FX_FALLBACK.eurToZmw
  const e2u = fx?.eurToUsd ?? ZAMBIA_FX_FALLBACK.eurToUsd
  const rateLine = fx?.live
    ? `FX: 1 EUR ≈ ${e2z.toFixed(2)} ZMW · ${e2u.toFixed(4)} USD · live @ ${fx.fetchedAt.toLocaleTimeString()}`
    : !fxError
      ? `Approximate FX: 1 EUR ≈ ${ZAMBIA_FX_FALLBACK.eurToZmw} ZMW · ${ZAMBIA_FX_FALLBACK.eurToUsd} USD (loading live rates…)`
      : `Approximate FX: 1 EUR ≈ ${ZAMBIA_FX_FALLBACK.eurToZmw} ZMW · ${ZAMBIA_FX_FALLBACK.eurToUsd} USD · live FX unavailable`

  const conversionNote =
    currency === 'eur'
      ? 'EUR column matches list reference (column B).'
      : currency === 'usd'
        ? 'USD shows published selling rates (column E).'
        : 'ZMW shows the published list price per SMS (fixed tiers; not derived from live FX).'

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.headline}>Pricing built for Zambia</h1>
        <p className={styles.subhead}>
          Zambia local A2P SMS by verified monthly send volume. EUR follows the reference column from our
          price list; USD shows the selling column; Kwacha uses published per-SMS list tiers below. Live FX
          below is for context when comparing EUR and USD.
        </p>
        <div className={styles.trustPill}>
          <span aria-hidden>✓</span>
          <span>No setup fees · No monthly minimums · Volume breaks available</span>
        </div>
      </header>

      <div className={styles.card}>
        <div className={styles.cardAccent} aria-hidden />
        <div className={styles.cardInner}>
          <div className={styles.countryRow}>
            <div className={styles.countryLeft}>
              <div className={styles.globeBadge} aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <div className={styles.countryLabels}>
                <p className={styles.kicker}>Destination</p>
                <p className={styles.name}>Zambia</p>
                <p className={styles.hint}>Operator-aware routing to Zamtel, MTN &amp; Airtel networks</p>
              </div>
            </div>
            <span className={styles.fixedTag}>Fixed · not selectable</span>
          </div>

          <div className={styles.smsOnlyBar}>
            <span className={styles.smsChip}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" />
              </svg>
              SMS only — bulk &amp; transactional
            </span>
          </div>

          <div className={styles.currencyRow}>
            <span className={styles.currencyLabel}>Display currency</span>
            <div className={styles.toggle} role="group" aria-label="Choose display currency">
              <button
                type="button"
                className={`${styles.currencyBtn} ${currency === 'zmw' ? styles.currencyBtnOn : ''}`}
                onClick={() => setCurrency('zmw')}
              >
                ZMW
              </button>
              <button
                type="button"
                className={`${styles.currencyBtn} ${currency === 'eur' ? styles.currencyBtnOn : ''}`}
                onClick={() => setCurrency('eur')}
              >
                EUR
              </button>
              <button
                type="button"
                className={`${styles.currencyBtn} ${currency === 'usd' ? styles.currencyBtnOn : ''}`}
                onClick={() => setCurrency('usd')}
              >
                USD
              </button>
            </div>
            <p className={styles.rateMeta}>{rateLine}</p>
            <p className={styles.rateMeta}>{conversionNote}</p>
          </div>

          {fxError ? (
            <div className={styles.errorBanner}>
              Live EUR/USD reference feed unavailable — ZMW list prices are unchanged; EUR/USD context lines
              use fallback rates.{' '}
              <button type="button" onClick={loadRates} style={{ fontWeight: 700, textDecoration: 'underline' }}>
                Retry
              </button>
            </div>
          ) : null}

          <div className={styles.tierSection}>
            <div className={styles.tierSectionHead}>
              <h2 className={styles.tierSectionTitle}>Volume tiers — Zambia local SMS</h2>
              <button
                type="button"
                className={styles.copyBtn}
                aria-label="Copy pricing table"
                onClick={() =>
                  copy(
                    [
                      `Volume (SMS / month)\t${currency.toUpperCase()} per SMS`,
                      ...tierRows.map((r) => `${r.tier.volumeLabel}\t${r.display}`),
                    ].join('\n'),
                  )
                }
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              </button>
            </div>
            <div className={styles.tierTableWrap}>
              <table className={styles.tierTable}>
                <thead>
                  <tr>
                    <th scope="col">Monthly SMS volume</th>
                    <th scope="col">Price per SMS ({currency.toUpperCase()})</th>
                  </tr>
                </thead>
                <tbody>
                  {tierRows.map(({ tier, display }) => (
                    <tr key={tier.volumeLabel}>
                      <td>{tier.volumeLabel}</td>
                      <td>
                        <span className={styles.tierPrice}>{display}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={styles.tierFootnote}>
              International and premium destination routes are quoted per corridor. Final invoices reflect your
              contract currency and the FX snapshot in effect for the billing period.
            </p>
          </div>

          <p className={styles.disclaimer}>
            Indicative unit rates for planning. Final commercial pricing depends on volume commits, message
            class, and sender registration. Our team confirms quotes before go-live.
          </p>
        </div>
      </div>

      <section className={styles.included}>
        <h2>Included with every Zambia programme</h2>
        <p className={styles.includedSub}>
          Same operational baseline whether you&apos;re piloting or scaling across the region.
        </p>
        <div className={styles.featureGrid}>
          {FEATURES.map((text) => (
            <div key={text} className={styles.featureItem}>
              <span className={styles.check} aria-hidden>
                ✓
              </span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
