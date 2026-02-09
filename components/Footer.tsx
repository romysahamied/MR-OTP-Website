import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <p className={styles.copyright}>© MR-OTP</p>
          <nav className={styles.footerNav}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}