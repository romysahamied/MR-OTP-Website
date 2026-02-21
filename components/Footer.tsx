import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top: Logo + Contact */}
        <div className={styles.topSection}>
          <Link href="/" className={styles.logo}>
            <Image src="/logo_mrotp.png" alt="Mr-OTP" width={48} height={48} />
            {/* <span className={styles.logoText}>Mr-OTP</span> */}
          </Link>
          <div className={styles.contactColumns}>
            <div className={styles.contactBlock}>
              <h3 className={styles.contactHeading}>Contact Sales</h3>
              <a href="mailto:info@mr-otp.com" className={styles.contactLink}>
                info@mr-otp.com
              </a>
            </div>
            <div className={styles.contactBlock}>
              <h3 className={styles.contactHeading}>Contact Support</h3>
              <a href="mailto:support@mr-otp.com" className={styles.contactLink}>
                support@mr-otp.com
              </a>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        {/* Middle: Solutions + Channels + Headquarters */}
        <div className={styles.linksSection}>
          <div className={styles.linkColumn}>
            <h3 className={styles.columnHeading}>SOLUTIONS</h3>
            <ul className={styles.linkList}>
              <li><Link href="/sms/otp">OTP SMS</Link></li>
              <li><Link href="/sms/transactional">Transactional SMS</Link></li>
              <li><Link href="/sms/promotional">Promotional SMS</Link></li>
              <li><Link href="/sms/bulk">Bulk SMS</Link></li>
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <h3 className={styles.columnHeading}>CHANNELS</h3>
            <ul className={styles.linkList}>
              <li><Link href="/sms">SMS</Link></li>
              <li><Link href="/rcs">RCS</Link></li>
              <li><Link href="/#channels">Voice</Link></li>
              <li><Link href="/viber">Viber Business</Link></li>
              <li><Link href="/#channels">WhatsApp Business</Link></li>
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <h3 className={styles.columnHeading}>HEADQUARTERS</h3>
            <p className={styles.address}>
              Shams Business Center, Sharjah Media City, Sharjah, United Arab Emirates
            </p>
          </div>
        </div>

        <div className={styles.divider} />

        {/* Bottom: Copyright + Legal */}
        <div className={styles.bottomSection}>
          <p className={styles.copyright}>© 2026 Mr-OTP - All Rights Reserved.</p>
          <nav className={styles.legalLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <span className={styles.sep}>·</span>
            <Link href="/terms">Legal</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
