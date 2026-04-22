import Link from 'next/link'
import { withZambiaNavHref } from '@/components/zambiaNav'
import styles from './BulkSmsZambiaQuickStart.module.css'

const steps = [
  {
    n: 1,
    title: 'Create your workspace',
    meta: 'Register in about a minute—no billing details to browse the sandbox.',
  },
  {
    n: 2,
    title: 'Copy live credentials',
    meta: 'Generate API tokens, test OTP flows, then flip the same keys to production.',
  },
  {
    n: 3,
    title: 'Dispatch with confidence',
    meta: 'Send from the dashboard or your stack; scale volume when routes are proven.',
  },
] as const

export default function BulkSmsZambiaQuickStartSection() {
  return (
    <section className={styles.section} aria-labelledby="zambia-quickstart-heading">
      <div className={styles.inner}>
        <div className={styles.split}>
          <div>
            <h2 id="zambia-quickstart-heading" className={styles.title}>
              Ship your first messages without the crawl
            </h2>
            <p className={styles.sub}>
              A straight path from account to traffic—REST where you want it, webhooks when you need proofs,
              and humans on chat if something blocks you.
            </p>
            <div className={styles.stepList}>
              {steps.map(({ n, title, meta }) => (
                <div key={n} className={styles.stepRow}>
                  <span className={styles.stepNum}>{n}</span>
                  <div className={styles.stepBody}>
                    <p className={styles.stepTitle}>{title}</p>
                    <p className={styles.stepMeta}>{meta}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.editor}>
              <div className={styles.editorHeader}>
                <span className={styles.editorTitle}>Webhook Example</span>
                <span className={styles.editorLive}>
                  <span className={styles.editorLiveDot} aria-hidden />
                  Live shape
                </span>
              </div>
              <div className={styles.editorBody}>
                <pre className={styles.editorPre}>
                  <code>
                    <span className={styles.jsonPunct}>{'{'}</span>
                    {'\n'}
                    {'  '}
                    <span className={styles.jsonKey}>&quot;event&quot;</span>
                    <span className={styles.jsonPunct}>: </span>
                    <span className={styles.jsonStr}>&quot;message.delivered&quot;</span>
                    <span className={styles.jsonPunct}>,</span>
                    {'\n'}
                    {'  '}
                    <span className={styles.jsonKey}>&quot;message_id&quot;</span>
                    <span className={styles.jsonPunct}>: </span>
                    <span className={styles.jsonStr}>&quot;msg_abc123&quot;</span>
                    <span className={styles.jsonPunct}>,</span>
                    {'\n'}
                    {'  '}
                    <span className={styles.jsonKey}>&quot;to&quot;</span>
                    <span className={styles.jsonPunct}>: </span>
                    <span className={styles.jsonStr}>&quot;+234800000000&quot;</span>
                    <span className={styles.jsonPunct}>,</span>
                    {'\n'}
                    {'  '}
                    <span className={styles.jsonKey}>&quot;status&quot;</span>
                    <span className={styles.jsonPunct}>: </span>
                    <span className={styles.jsonStr}>&quot;delivered&quot;</span>
                    <span className={styles.jsonPunct}>,</span>
                    {'\n'}
                    {'  '}
                    <span className={styles.jsonKey}>&quot;timestamp&quot;</span>
                    <span className={styles.jsonPunct}>: </span>
                    <span className={styles.jsonStr}>&quot;2024-01-15T10:30:00Z&quot;</span>
                    <span className={styles.jsonPunct}>,</span>
                    {'\n'}
                    {'  '}
                    <span className={styles.jsonKey}>&quot;operator&quot;</span>
                    <span className={styles.jsonPunct}>: </span>
                    <span className={styles.jsonStr}>&quot;MTN Nigeria&quot;</span>
                    <span className={styles.jsonPunct}>,</span>
                    {'\n'}
                    {'  '}
                    <span className={styles.jsonKey}>&quot;delivery_time&quot;</span>
                    <span className={styles.jsonPunct}>: </span>
                    <span className={styles.jsonStr}>&quot;2.4s&quot;</span>
                    {'\n'}
                    <span className={styles.jsonPunct}>{'}'}</span>
                  </code>
                </pre>
              </div>
              <p className={styles.editorFooter}>
                Real-time webhooks keep your systems in sync with delivery status, replies, and events.
              </p>
            </div>

            <div className={styles.ctaBlock}>
              <ul className={styles.perks}>
                <li>
                  <span className={styles.perkCheck} aria-hidden>
                    ✓
                  </span>
                  Sandbox credits included
                </li>
                <li>
                  <span className={styles.perkCheck} aria-hidden>
                    ✓
                  </span>
                  No card required to explore
                </li>
                <li>
                  <span className={styles.perkCheck} aria-hidden>
                    ✓
                  </span>
                  On-call support when you need it
                </li>
              </ul>
              <Link href={withZambiaNavHref('/get-started?from=zambia', true)} className={styles.ctaBtn}>
                Start free trial
              </Link>
              <p className={styles.ctaMicro}>Most teams send a first test in under five minutes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
