'use client'

import { useCallback, useEffect, useState } from 'react'
import styles from './Integrations.module.css'

const editorOneCode = `curl -X 'POST' \\
  'https://papi.mr-otp.com/SendSmsV2' \\
  -H 'accept: text/plain' \\
  -H 'Content-Type: application/json-patch+json' \\
  -d '[
    {
      "apiToken": "APItdvv9900",
      "messageType": 1,
      "messageEncoding": 1,
      "destinationAddress": "91889900998",
      "sourceAddress": "MR-OTP",
      "messageText": "Hello World"
    }
  ]'`

const editorTwoCode = ` We offer robust and scalable SMPP integration designed for high-volume A2P messaging environments.
 
 • SMPP v3.4 compliant connectivity
 • High TPS support, optimized for enterprise-grade traffic
 • Multiple SMPP sessions per bind for load distribution
 • Multiple IP handling & whitelisting for secure connections
 • Low latency & high throughput message processing
 • Stable DLR handling with real-time delivery reports
 • 24×7 monitoring & NOC support

 Our SMPP setup is ideal for OTP, transactional, and bulk messaging use cases, ensuring reliability, speed, and seamless scalability as your traffic grows.`
function highlight(code: string) {
  return code
    // strings
    .replace(/"(.*?)"/g, '<span class="string">"$1"</span>')
    // numbers
    .replace(/\b\d+\b/g, '<span class="number">$&</span>')
    // curl keywords
    .replace(/\b(curl|POST|GET|PUT|DELETE)\b/g, '<span class="keyword">$1</span>')
    // flags
    .replace(/(-H|-d|-X)/g, '<span class="flag">$1</span>')
}

const RESTART_DELAY_MS = 30000 // 30 seconds after both finish before typing again

function TypingEditor({
  code,
  restartTrigger,
  onDone,
}: {
  code: string
  restartTrigger: number
  onDone: () => void
}) {
  const [text, setText] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDone(false)
    let i = 0

    const interval = setInterval(() => {
      setText(code.slice(0, i))
      i++

      if (i > code.length) {
        clearInterval(interval)
        setDone(true)
        onDone()
      }
    }, 18)

    return () => clearInterval(interval)
  }, [code, restartTrigger, onDone])

  return (
    <pre className={styles.editor}>
      <code
        dangerouslySetInnerHTML={{
          __html: highlight(text),
        }}
      />
      {!done && <span className={styles.cursor}>|</span>}
    </pre>
  )
}

export default function Integrations() {
  const [restartTrigger, setRestartTrigger] = useState(0)
  const [doneCount, setDoneCount] = useState(0)

  const onDone = useCallback(() => setDoneCount((c) => c + 1), [])

  useEffect(() => {
    if (doneCount < 2) return
    const id = setTimeout(() => {
      setRestartTrigger((r) => r + 1)
      setDoneCount(0)
    }, RESTART_DELAY_MS)
    return () => clearTimeout(id)
  }, [doneCount])

  useEffect(() => {
    setDoneCount(0)
  }, [restartTrigger])

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Integrations</h2>

      {/* Curly brace } – proper shape, points down at editors */}
      <div className={styles.curlyWrap}>
        <svg
          className={styles.curlyBracket}
          viewBox="0 0 300 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          {/* Closing brace: full width span */}
          <path
            d="M 18 60
               C 18 44 28 42 44 40
               L 122 34
               C 138 33 144 28 150 20
               C 156 28 162 33 178 34
               L 256 40
               C 272 42 282 44 282 60"
            stroke="url(#curlyGradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="curlyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f6e27a" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>
          </defs>
        </svg>
        <div className={styles.curlyLabels}>
          <span className={styles.curlyLabelLeft}>APIs Editor</span>
          <span className={styles.curlyLabelRight}>SMPP</span>
        </div>
      </div>

      <div className={styles.glassCard}>
        <div className={styles.editors}>
          <TypingEditor
            code={editorOneCode}
            restartTrigger={restartTrigger}
            onDone={onDone}
          />
          <TypingEditor
            code={editorTwoCode}
            restartTrigger={restartTrigger}
            onDone={onDone}
          />
        </div>
      </div>
    </section>
  )
}
