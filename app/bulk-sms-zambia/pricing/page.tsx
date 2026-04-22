import type { Metadata } from 'next'
import BulkSmsZambiaPricingInteractive from './BulkSmsZambiaPricingInteractive'
import BulkSmsZambiaPricingFollowup from './BulkSmsZambiaPricingFollowup'

export const metadata: Metadata = {
  title: 'Pricing | Bulk SMS Zambia | Mr-OTP',
  description:
    'Zambia local bulk SMS volume tiers in ZMW, EUR, and USD—with live FX on Kwacha. Published list rates for Zamtel, MTN, and Airtel A2P routes.',
}

export default function BulkSmsZambiaPricingPage() {
  return (
    <>
      <BulkSmsZambiaPricingInteractive />
      <BulkSmsZambiaPricingFollowup />
    </>
  )
}
