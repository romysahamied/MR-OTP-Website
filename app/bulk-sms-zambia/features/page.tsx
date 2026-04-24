import type { Metadata } from 'next'
import styles from '../BulkSmsZambia.module.css'

export const metadata: Metadata = {
  title: 'Features | Bulk SMS Zambia | Mr OTP',
  description: 'Bulk SMS features for Zambia — APIs, scheduling, analytics, and compliance-ready messaging.',
}

export default function BulkSmsZambiaFeaturesPage() {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Features</h1>
      <p className={styles.lead}>
        Tools built for teams that need predictable delivery and clear reporting across Zambia and
        beyond.
      </p>
      <div className={styles.section}>
        <h2>Messaging</h2>
        <p>
          Send single or bulk campaigns, schedule sends, and use short links or templates where your
          use case allows.
        </p>
      </div>
      <div className={styles.section}>
        <h2>Integration</h2>
        <p>
          REST APIs, webhooks, and documentation so your CRM, billing stack, or custom apps can
          trigger SMS reliably.
        </p>
      </div>
      <div className={styles.section}>
        <h2>Operations</h2>
        <p>Monitor delivery outcomes and iterate on content and timing with your operations team.</p>
      </div>
    </div>
  )
}
