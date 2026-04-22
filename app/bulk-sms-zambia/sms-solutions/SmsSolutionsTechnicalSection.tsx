import styles from './SmsSolutionsTechnical.module.css'

const cards = [
  {
    hue: 'rose' as const,
    title: 'Direct operator relationships',
    body:
      'Long-standing commercial and technical links with dozens of African MNOs shorten the path from your platform to the handset—fewer unnamed middle hops, snappier handoffs, and clearer accountability when something needs a second look.',
  },
  {
    hue: 'blue' as const,
    title: 'Live delivery visibility',
    body:
      'Submission stamps, final delivery timestamps, operator acknowledgements, and terminal states surface in one place so finance and compliance can trace a message end-to-end. Summaries can be exported when audits or reconciliation workflows call for it.',
  },
  {
    hue: 'jade' as const,
    title: 'Elastic message throughput',
    body:
      'The processing tier scales with traffic surges—whether you are clearing a bank-wide alert window or running a retail spike—so bursts queue cleanly instead of overwhelming the route.',
  },
]

export default function SmsSolutionsTechnicalSection() {
  return (
    <section className={styles.section} aria-labelledby="sms-technical-heading">
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div>
            <div className={styles.intro}>
              <h2 id="sms-technical-heading" className={styles.title}>
                Serious network engineering,{' '}
                <span className={styles.titleGold}>simple day-to-day operations</span>
              </h2>
              <p className={styles.sub}>
                Carrier-aware infrastructure shaped for African numbering, coverage quirks, and peak
                patterns—so your team spends less time firefighting routes and more time shipping
                product.
              </p>
            </div>

            <div className={styles.proseBlock}>
              <h3 className={styles.proseTitle}>Routing that chases the best path, not the cheapest guess</h3>
              <p className={styles.prose}>
                A rules-and-signal stack weighs direct links, historic performance on similar traffic,
                live capacity hints, and commercial constraints before each send. The objective is
                dependable arrival first—then efficient cost—rather than gambling on a single static
                table.
              </p>
              <p className={styles.prose}>
                Outcome data feeds back into the same system: when certain corridors underperform,
                policy shifts happen automatically so the next campaigns inherit the lesson. Teams
                typically see materially better completion once that loop is active versus a fixed
                “always use route A” setup.
              </p>
              <p className={styles.prose}>
                Spare capacity and disciplined queue behaviour mean brief upstream faults do not
                translate into silent drops—messages hold in a safe line and drain in order when the
                path is healthy again.
              </p>
            </div>
          </div>

          <div className={styles.cards}>
            {cards.map((c) => (
              <article key={c.title} className={styles.card} data-hue={c.hue}>
                <h4 className={styles.cardTitle}>{c.title}</h4>
                <p className={styles.cardBody}>{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
