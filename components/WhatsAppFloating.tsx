'use client'

import styles from './WhatsAppFloating.module.css'

export default function WhatsAppFloating() {
  return (
    <a
      href="https://wa.me/447360539406?text=Hi%20I%20am%20interested%20in%20your%20OTP%20services"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsapp}
      aria-label="Chat on WhatsApp"
    >
      <img src="/whatsapp.svg" alt="WhatsApp Chat" width={56} height={56} decoding="async" fetchPriority="high" />
    </a>
  )
}
