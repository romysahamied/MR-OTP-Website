'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import styles from './SmsSolutionsIntegration.module.css'

const TABS = ['curl', 'node', 'python'] as const
type Tab = (typeof TABS)[number]

const TAB_LABELS: Record<Tab, string> = {
  curl: 'CURL',
  node: 'NODE',
  python: 'PYTHON',
}

/** Same payload as reference (image 1); papi.mr-otp.com SendSmsV2 */
const SNIPPETS: Record<Tab, string> = {
  curl: `curl -X 'POST' \\
  'https://papi.mr-otp.com/SendSmsV2' \\
  -H 'accept: text/plain' \\
  -H 'Content-Type: application/json-patch+json' \\
  -d '[
  {
    "apiToken": "APItdvv9900",
    "messageType": 1,
    "messageEncoding": 1,
    "destinationAddress": "91889900998",
    "sourceAddress": "Mr OTP",
    "messageText": "Hello World"
  }
]'`,
  node: `const res = await fetch('https://papi.mr-otp.com/SendSmsV2', {
  method: 'POST',
  headers: {
    accept: 'text/plain',
    'Content-Type': 'application/json-patch+json',
  },
  body: JSON.stringify([
    {
      apiToken: 'APItdvv9900',
      messageType: 1,
      messageEncoding: 1,
      destinationAddress: '91889900998',
      sourceAddress: 'Mr OTP',
      messageText: 'Hello World',
    },
  ]),
})
const body = await res.text()`,
  python: `import requests

url = "https://papi.mr-otp.com/SendSmsV2"
headers = {
    "accept": "text/plain",
    "Content-Type": "application/json-patch+json",
}
payload = [
    {
        "apiToken": "APItdvv9900",
        "messageType": 1,
        "messageEncoding": 1,
        "destinationAddress": "91889900998",
        "sourceAddress": "Mr OTP",
        "messageText": "Hello World",
    }
]
response = requests.post(url, json=payload, headers=headers)`,
}

const REWRITE_INTERVAL_MS = 20_000
const CHAR_INTERVAL_MS = 14

const features = [
  {
    tone: 'amber' as const,
    icon: '</>',
    title: 'Predictable REST calls',
    desc: 'Fire JSON over HTTPS—no proprietary socket stack—so any runtime that can POST can send.',
  },
  {
    tone: 'sky' as const,
    icon: '📄',
    title: 'Batch many recipients',
    desc: 'Pack numerous destinations into one payload to fan out promos or alerts without serial round-trips.',
  },
  {
    tone: 'mint' as const,
    icon: '⚡',
    title: 'Throughput-minded paths',
    desc: 'Routing tuned for latency keeps transactional traffic from piling up when volumes spike.',
  },
]

function useTypewriterCode(full: string, enabled: boolean) {
  const [out, setOut] = useState('')

  useEffect(() => {
    if (!enabled) {
      setOut(full)
      return
    }

    let charIndex = 0
    let typeTimer: number | null = null

    const stopTyping = () => {
      if (typeTimer !== null) {
        clearInterval(typeTimer)
        typeTimer = null
      }
    }

    const restart = () => {
      stopTyping()
      charIndex = 0
      setOut('')
      typeTimer = window.setInterval(() => {
        charIndex += 1
        setOut(full.slice(0, charIndex))
        if (charIndex >= full.length) stopTyping()
      }, CHAR_INTERVAL_MS)
    }

    restart()
    const cycleTimer = window.setInterval(restart, REWRITE_INTERVAL_MS)

    return () => {
      stopTyping()
      clearInterval(cycleTimer)
    }
  }, [full, enabled])

  return out
}

export default function SmsSolutionsIntegrationSection() {
  const [tab, setTab] = useState<Tab>('curl')
  const [reduceMotion, setReduceMotion] = useState(false)
  const [editorH, setEditorH] = useState<number | null>(null)
  const editorPaneRef = useRef<HTMLDivElement>(null)
  const measureLayerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReduceMotion(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  useLayoutEffect(() => {
    const pane = editorPaneRef.current
    const layer = measureLayerRef.current
    if (!pane || !layer) return

    const measure = () => {
      const pres = layer.querySelectorAll<HTMLElement>(':scope > pre[data-measure]')
      let max = 0
      pres.forEach((el) => {
        max = Math.max(max, el.getBoundingClientRect().height)
      })
      if (max > 0) setEditorH(Math.ceil(max) + 2)
    }

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(pane)
    const fonts = document.fonts
    let cancelled = false
    fonts?.ready?.then(() => {
      if (!cancelled) measure()
    })
    return () => {
      cancelled = true
      ro.disconnect()
    }
  }, [])

  const full = SNIPPETS[tab]
  const typed = useTypewriterCode(full, !reduceMotion)
  const codeDisplay = reduceMotion ? full : typed
  const showCaret = !reduceMotion && codeDisplay.length < full.length

  const panelStyle =
    editorH != null
      ? { height: editorH, minHeight: editorH, maxHeight: editorH }
      : undefined

  return (
    <section className={styles.section} aria-labelledby="sms-integration-heading">
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div>
            <p className={styles.kicker}>Developers</p>
            <h2 id="sms-integration-heading" className={styles.title}>
              Go live with a{' '}
              <span className={styles.titleAccent}>compact integration surface</span>
            </h2>
            <p className={styles.lead}>
              Push bulk SMS with one authenticated POST: hand the API an array of recipients and bodies,
              and the platform handles fan-out, retries, and delivery receipts on your behalf.
            </p>
            <ul className={styles.features}>
              {features.map((f) => (
                <li key={f.title} className={styles.feature} data-tone={f.tone}>
                  <span className={styles.iconBox} aria-hidden>
                    {f.icon}
                  </span>
                  <div>
                    <p className={styles.ftTitle}>{f.title}</p>
                    <p className={styles.ftDesc}>{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.codeShell}>
            <div className={styles.tabs} role="tablist" aria-label="Example code format">
              {TABS.map((t) => (
                <button
                  key={t}
                  type="button"
                  role="tab"
                  aria-selected={tab === t}
                  className={`${styles.tab} ${tab === t ? styles.tabActive : ''}`}
                  onClick={() => setTab(t)}
                >
                  {TAB_LABELS[t]}
                </button>
              ))}
            </div>
            <div ref={editorPaneRef} className={styles.editorPane}>
              <div ref={measureLayerRef} className={styles.measureLayer} aria-hidden>
                {TABS.map((t) => (
                  <pre key={t} data-measure="1" className={styles.measurePre}>
                    <code className={styles.code}>{SNIPPETS[t]}</code>
                  </pre>
                ))}
              </div>
              <pre className={styles.panel} tabIndex={0} style={panelStyle}>
                <code className={styles.code}>
                  {codeDisplay}
                  {showCaret ? <span className={styles.caret} aria-hidden /> : null}
                </code>
              </pre>
            </div>
            <p className={styles.note}>
              Illustrative endpoint and fields—swap keys and routes for your live project and region.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
