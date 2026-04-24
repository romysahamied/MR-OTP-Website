'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useSearchParams } from 'next/navigation'
import styles from './Footer.module.css'
import {
  ZAMBIA_BASE_PATH,
  isZambiaMicrositePath,
  isZambiaNavContext,
  withZambiaNavHref,
} from './zambiaNav'

function FooterContent({ z }: { z: boolean }) {
  const h = (path: string) => (z ? withZambiaNavHref(path, true) : path)

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <Link href={z ? ZAMBIA_BASE_PATH : '/'} className={styles.logo}>
            <Image src="/logo_mrotp.png" alt="Mr OTP" width={52} height={52} className={styles.logoMark} />
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
              <a href="mailto:noc@mr-otp.com" className={styles.contactLink}>
                noc@mr-otp.com
              </a>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.linksSection}>
          <div className={styles.linkColumn}>
            <h3 className={styles.columnHeading}>COMPANY</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href={h('/about')}>About Us</Link>
              </li>
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <h3 className={styles.columnHeading}>SOLUTIONS</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href={h('/sms/otp')}>OTP SMS</Link>
              </li>
              <li>
                <Link href={h('/sms/transactional')}>Transactional SMS</Link>
              </li>
              <li>
                <Link href={h('/sms/promotional')}>Promotional SMS</Link>
              </li>
              <li>
                <Link href={h('/sms/bulk')}>Bulk SMS</Link>
              </li>
              <li>
                {z ? (
                  /* Plain `/` — do not append ?nav=zambia or the main site footer/header never “exits” Zambia mode */
                  <Link href="/" className={styles.micrositeLink}>
                    Main Mr OTP website
                  </Link>
                ) : (
                  <Link
                    href="/bulk-sms-zambia"
                    className={styles.micrositeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bulk SMS Zambia
                  </Link>
                )}
              </li>
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <h3 className={styles.columnHeading}>CHANNELS</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href={h('/sms')}>SMS</Link>
              </li>
              <li>
                <Link href={h('/rcs')}>RCS</Link>
              </li>
              <li>
                <Link href={h('/voice')}>Voice</Link>
              </li>
              <li>
                <Link href={h('/viber')}>Viber Business</Link>
              </li>
              <li>
                <Link href={h('/whatsapp')}>WhatsApp Business</Link>
              </li>
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

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>© 2026 Mr OTP All Rights Reserved | Incorporated in UK, UAE & Zambia</p>
          <nav className={styles.legalLinks}>
            <Link href={h('/privacy')}>Privacy Policy</Link>
            <span className={styles.sep}>·</span>
            <Link href={h('/terms')}>Legal</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

function FooterFallback() {
  const pathname = usePathname()
  const z = isZambiaMicrositePath(pathname)
  return <FooterContent z={z} />
}

function FooterWithQuery() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const z = isZambiaNavContext(pathname, searchParams)
  return <FooterContent z={z} />
}

export default function Footer() {
  return (
    <Suspense fallback={<FooterFallback />}>
      <FooterWithQuery />
    </Suspense>
  )
}
