import styles from './SmsSolutionsUseCases.module.css'

const cases = [
  {
    tone: 'marigold' as const,
    icon: '📣',
    title: 'Marketing & promotions',
    copy:
      'Time-sensitive offers, seasonal pushes, and retail promos tend to earn far higher read rates than inbox email—so flash deals and member perks actually get seen. E-commerce teams often pair short codes with landing links to compare traction and refine the next send.',
  },
  {
    tone: 'clay' as const,
    icon: '🔔',
    title: 'Customer updates',
    copy:
      'Keep buyers in the loop with purchase acknowledgements, payment notices, and shipment milestones—cutting repetitive “where is my order?” traffic. Clinics, salons, and service desks also use gentle nudges to trim no-shows and last-minute cancellations.',
  },
  {
    tone: 'lagoon' as const,
    icon: '🎫',
    title: 'Events & gatherings',
    copy:
      'Confirm registrations, push agenda tweaks, and share venue or parking pointers in one thread. Follow-up prompts after the day ends help collect feedback while memories—and willingness to respond—are still fresh.',
  },
  {
    tone: 'mauve' as const,
    icon: '🏢',
    title: 'Workforce messaging',
    copy:
      'Reach frontline staff with roster changes, safety notices, or urgent bulletins—even when data apps are spotty. SMS remains one of the lightest channels for teams spread across sites, drivers, or intermittent connectivity.',
  },
  {
    tone: 'rust' as const,
    icon: '🗳️',
    title: 'Civic & campaign comms',
    copy:
      'Coordinate turnout reminders, polling-place guidance, and rally logistics in markets where basic handsets still dominate. Messaging should always follow local electoral rules and carrier obligations—plan content and frequency with compliance in mind.',
  },
  {
    tone: 'fern' as const,
    icon: '🤝',
    title: 'NGOs & public programmes',
    copy:
      'Support immunisation drives, health literacy bursts, or early-warning drills at a fraction of traditional media cost. For lean organisations, concise SMS waves can cover wide geographies without exhausting field budgets.',
  },
]

export default function SmsSolutionsUseCasesSection() {
  return (
    <section className={styles.section} aria-labelledby="sms-usecases-heading">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.kicker}>Use cases</p>
          <h2 id="sms-usecases-heading" className={styles.title}>
            Built for <span className={styles.titleAccent}>every industry and use case</span>
          </h2>
          <p className={styles.lead}>
            African teams—retail, healthcare, logistics, civic groups, and more—use dependable bulk SMS
            to stay close to customers and keep operations moving, without ripping out the systems they
            already trust.
          </p>
        </div>

        <div className={styles.grid}>
          {cases.map((c) => (
            <article key={c.title} className={styles.card} data-tone={c.tone}>
              <div className={styles.head}>
                <span className={styles.icon} aria-hidden>
                  {c.icon}
                </span>
                <h3 className={styles.cardTitle}>{c.title}</h3>
              </div>
              <p className={styles.copy}>{c.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
