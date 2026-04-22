'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './BulkSmsZambiaGateway.module.css'

const TITLE = "Africa's Most Reliable SMS Gateway"
const DESC =
  'Direct carrier connections to 50+ operators. Maximum deliverability for bulk SMS, OTP, and marketing campaigns across Africa.'

const TITLE_MS = 38
const DESC_MS = 22
const PAUSE_BEFORE_DESC_MS = 320

const stats = [
  { value: '10M+', suffix: '/hr', label: 'Capacity' },
  { value: '99.9%', label: 'Uptime' },
  { value: '<100ms', label: 'Response' },
  { value: '20+', label: 'Countries' },
] as const

const carriers = [
  'MTN',
  'Airtel',
  'Vodacom',
  'Orange',
  'Safaricom',
  '9mobile',
  'Etisalat',
] as const

const features = [
  { icon: '🌐', text: 'Direct operator connections' },
  { icon: '⚡', text: 'Intelligent routing' },
  { icon: '📡', text: 'Real-time DLR tracking' },
  { icon: '💬', text: 'Unicode & long SMS' },
  { icon: '🏅', text: 'Sender ID management' },
  { icon: '🕐', text: 'Message scheduling' },
] as const

type Phase = 'title' | 'pause' | 'desc' | 'done'

export default function BulkSmsZambiaGatewaySection() {
  const [titleShown, setTitleShown] = useState('')
  const [descShown, setDescShown] = useState('')
  const [phase, setPhase] = useState<Phase>('title')

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = []
    let cancelled = false

    const schedule = (fn: () => void, ms: number) => {
      const id = setTimeout(() => {
        if (!cancelled) fn()
      }, ms)
      timeouts.push(id)
    }

    const typeTitle = (i: number) => {
      if (cancelled) return
      if (i <= TITLE.length) {
        setTitleShown(TITLE.slice(0, i))
        schedule(() => typeTitle(i + 1), TITLE_MS)
      } else {
        setPhase('pause')
        schedule(() => {
          if (cancelled) return
          setPhase('desc')
          typeDesc(0)
        }, PAUSE_BEFORE_DESC_MS)
      }
    }

    const typeDesc = (j: number) => {
      if (cancelled) return
      if (j <= DESC.length) {
        setDescShown(DESC.slice(0, j))
        schedule(() => typeDesc(j + 1), DESC_MS)
      } else {
        setPhase('done')
      }
    }

    setTitleShown('')
    setDescShown('')
    setPhase('title')
    typeTitle(0)

    return () => {
      cancelled = true
      timeouts.forEach(clearTimeout)
    }
  }, [])

  return (
    <section
      className={styles.section}
      aria-labelledby="zambia-gateway-heading"
    >
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div>
            <p className={styles.badge}>SMS Gateway Africa</p>
            <h2 id="zambia-gateway-heading" className={styles.title}>
              {titleShown}
              {(phase === 'title' || phase === 'pause') && (
                <span className={styles.titleCursor}>|</span>
              )}
            </h2>
            <p className={styles.desc}>
              {descShown}
              {phase === 'desc' && <span className={styles.titleCursor}>|</span>}
            </p>

            <div className={styles.statsGrid}>
              {stats.map((s) => (
                <div key={s.label} className={styles.statCard}>
                  <div className={styles.statValueRow}>
                    <span className={styles.statValue}>{s.value}</span>
                    {'suffix' in s ? (
                      <span className={styles.statSuffix}>{s.suffix}</span>
                    ) : null}
                  </div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>

            <div className={styles.tagRow}>
              {carriers.map((c) => (
                <span key={c} className={styles.tag}>
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.featuresPanel}>
            <h3 className={styles.featuresTitle}>Gateway features</h3>
            <div className={styles.featureGrid}>
              {features.map((f) => (
                <div key={f.text} className={styles.featureCell}>
                  <span className={styles.featureIcon} aria-hidden>
                    {f.icon}
                  </span>
                  <span>{f.text}</span>
                </div>
              ))}
            </div>
            <Link
              href="/bulk-sms-zambia/sms-solutions"
              className={styles.exploreLink}
              prefetch
              scroll
            >
              Explore SMS solutions →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
