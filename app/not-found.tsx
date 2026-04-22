import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.code}>404</h1>
      <h2 className={styles.title}>Page Not Found</h2>
      <p className={styles.body}>
        The page you&apos;re looking for doesn&apos;t exist. It might have been moved, deleted, or you
        entered the wrong URL.
      </p>
      <Link href="/" className={styles.cta}>
        Go Home
      </Link>
      <p className={styles.hint}>
        Looking for the client dashboard?{' '}
        <a href="https://dashboard.mr-otp.com" target="_blank" rel="noopener noreferrer">
          Open dashboard
        </a>
        {' '}
        — or use <Link href="/dashboard">/dashboard</Link> (redirects to the same place).
      </p>
    </div>
  )
}
