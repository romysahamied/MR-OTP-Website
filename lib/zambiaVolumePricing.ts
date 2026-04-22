/**
 * Zambia local bulk SMS volume tiers (commercial spreadsheet).
 *
 * - `eurPerSms` — column B, EUR reference per SMS
 * - `usdBookFromEur` — column C (fixed book relation to B; 1.363×)
 * - `internalZmwBasis` — column D (internal basis; not used for live display)
 * - `sellingUsdPerSms` — column "Selling" (E), customer USD per SMS
 * - `listZmwPerSms` — published ZMW list per SMS (shown for Kwacha; fixed, not FX-derived)
 */

export const ZAMBIA_SMS_VOLUME_TIERS = [
  {
    volumeLabel: 'Less than 49,999',
    /** Published list price per SMS in ZMW (Kwacha), shown in overview + ZMW column on pricing page */
    listZmwPerSms: 0.13,
    eurPerSms: 0.105,
    usdBookFromEur: 0.143115,
    internalZmwBasis: 0.00636,
    sellingUsdPerSms: 0.007,
  },
  {
    volumeLabel: '50,000 – 249,999',
    listZmwPerSms: 0.12,
    eurPerSms: 0.099,
    usdBookFromEur: 0.134937,
    internalZmwBasis: 0.00599,
    sellingUsdPerSms: 0.0065,
  },
  {
    volumeLabel: '250,000 – 499,999',
    listZmwPerSms: 0.12,
    eurPerSms: 0.092,
    usdBookFromEur: 0.125396,
    internalZmwBasis: 0.00557,
    sellingUsdPerSms: 0.0062,
  },
  {
    volumeLabel: '500,000 – 749,999',
    listZmwPerSms: 0.11,
    eurPerSms: 0.084,
    usdBookFromEur: 0.114492,
    internalZmwBasis: 0.00508,
    sellingUsdPerSms: 0.0058,
  },
  {
    volumeLabel: '750,000 – 999,999',
    listZmwPerSms: 0.11,
    eurPerSms: 0.074,
    usdBookFromEur: 0.100862,
    internalZmwBasis: 0.00448,
    sellingUsdPerSms: 0.0055,
  },
  {
    volumeLabel: '1,000,000 – 4,999,999',
    listZmwPerSms: 0.1,
    eurPerSms: 0.069,
    usdBookFromEur: 0.094047,
    internalZmwBasis: 0.00418,
    sellingUsdPerSms: 0.005,
  },
] as const

export type ZambiaSmsVolumeTier = (typeof ZAMBIA_SMS_VOLUME_TIERS)[number]

export type FxPair = { eurToZmw: number; eurToUsd: number }

export const ZAMBIA_FX_FALLBACK: FxPair = { eurToZmw: 28.5, eurToUsd: 1.09 }

/** Numeric display amount per tier for the selected currency (ZMW uses published list, not FX). */
export function tierPriceInDisplayCurrency(
  tier: ZambiaSmsVolumeTier,
  currency: 'eur' | 'usd' | 'zmw',
): number {
  if (currency === 'eur') return tier.eurPerSms
  if (currency === 'usd') return tier.sellingUsdPerSms
  return tier.listZmwPerSms
}

/** Display string for published Kwacha list (matches commercial “K 0.13” style). */
export function formatZmwListPrice(kwachaPerSms: number): string {
  return `K ${kwachaPerSms.toFixed(2)}`
}

export function entryTierTeaser(): string {
  const t = ZAMBIA_SMS_VOLUME_TIERS[0]
  return `From €${t.eurPerSms} / US$${t.sellingUsdPerSms} per SMS at entry volumes`
}
