'use client'

import { useEffect, useState } from 'react'
import styles from './BulkSmsZambiaChannels.module.css'

/** Same snippet as `components/Integrations.tsx` `editorOneCode` */
export const ZAMBIA_API_CURL = `curl -X 'POST' \\
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
  ]'`

function highlight(code: string) {
  return code
    .replace(/"(.*?)"/g, '<span class="string">"$1"</span>')
    .replace(/\b\d+\b/g, '<span class="number">$&</span>')
    .replace(/\b(curl|POST|GET|PUT|DELETE)\b/g, '<span class="keyword">$1</span>')
    .replace(/(-H|-d|-X)/g, '<span class="flag">$1</span>')
}

/** Same as Integrations: 18ms per character, 30s pause before restart */
const TYPING_MS = 18
const RESTART_DELAY_MS = 30000

type Props = {
  codeLabel: string
}

export default function BulkSmsZambiaChannelsTypingCode({ codeLabel }: Props) {
  const [text, setText] = useState('')
  const [done, setDone] = useState(false)
  const [restartTrigger, setRestartTrigger] = useState(0)

  useEffect(() => {
    setDone(false)
    setText('')
    let i = 0

    const interval = setInterval(() => {
      setText(ZAMBIA_API_CURL.slice(0, i))
      i++

      if (i > ZAMBIA_API_CURL.length) {
        clearInterval(interval)
        setDone(true)
      }
    }, TYPING_MS)

    return () => clearInterval(interval)
  }, [restartTrigger])

  useEffect(() => {
    if (!done) return
    const id = setTimeout(() => {
      setRestartTrigger((r) => r + 1)
    }, RESTART_DELAY_MS)
    return () => clearTimeout(id)
  }, [done])

  return (
    <div className={styles.codeWrap}>
      <div className={styles.codeTitleBar}>
        <div className={styles.codeDots} aria-hidden>
          <span className={styles.dotRed} />
          <span className={styles.dotYellow} />
          <span className={styles.dotGreen} />
        </div>
        <span className={styles.codeLabel}>{codeLabel}</span>
      </div>
      <pre className={styles.codePre}>
        <code
          dangerouslySetInnerHTML={{
            __html: highlight(text),
          }}
        />
        {!done && <span className={styles.codeCursor}>|</span>}
      </pre>
    </div>
  )
}
