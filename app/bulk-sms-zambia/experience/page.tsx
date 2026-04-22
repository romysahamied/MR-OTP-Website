import type { Metadata } from 'next'
import ExperienceDifferenceClient from './ExperienceDifferenceClient'

export const metadata: Metadata = {
  title: 'Connect with Mr-OTP | Bulk SMS Zambia',
  description:
    'Reach our team for SMS coverage across Africa—enterprise routing, local support, and clear next steps for your programme.',
}

export default function BulkSmsZambiaExperiencePage() {
  return <ExperienceDifferenceClient />
}
