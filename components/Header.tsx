'use client'

import { Suspense, useState, useEffect, useCallback, type MouseEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import styles from './Header.module.css'
import {
  ZAMBIA_NAV_QUERY_KEY,
  ZAMBIA_NAV_QUERY_VALUE,
  ZAMBIA_BASE_PATH,
  isZambiaMicrositePath,
  withZambiaNavHref,
} from './zambiaNav'

export {
  ZAMBIA_NAV_QUERY_KEY,
  ZAMBIA_NAV_QUERY_VALUE,
  ZAMBIA_BASE_PATH,
  withZambiaNavHref,
} from './zambiaNav'

type HeaderUIProps = { isZambiaNav: boolean; zambiaSolidHeader: boolean }

function HeaderUI({ isZambiaNav, zambiaSolidHeader }: HeaderUIProps) {
  const pathname = usePathname()

  /*
   * Zambia chrome: Home always means the Zambia hub (/bulk-sms-zambia), including when you opened
   * Contact sales etc. from Zambia (?nav=zambia) — not the main marketing `/` home.
   */
  const homeHref = !isZambiaNav ? '/' : ZAMBIA_BASE_PATH
  const logoHref = isZambiaNav ? ZAMBIA_BASE_PATH : '/'

  const link = useCallback((href: string) => withZambiaNavHref(href, isZambiaNav), [isZambiaNav])

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isClient, setIsClient] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    if (typeof window !== 'undefined') {
      setIsMenuOpen(!isMenuOpen)
    }
  }

  const handleDropdownEnter = () => {
    if (typeof window !== 'undefined') {
      setActiveDropdown('sms')
    }
  }

  const handleDropdownLeave = () => {
    if (typeof window !== 'undefined') {
      setActiveDropdown(null)
    }
  }

  const closeMenu = () => {
    if (typeof window !== 'undefined') {
      setIsMenuOpen(false)
      setActiveDropdown(null)
    }
  }

  /**
   * Same pathname + search as `href` → scroll instead of pushing (avoids RSC noise).
   * Compares ordered query keys so `?nav=zambia` matches regardless of param order.
   */
  const handleSamePathNav = useCallback((e: MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
    if (typeof window === 'undefined') return
    let url: URL
    try {
      url = new URL(href, window.location.origin)
    } catch {
      return
    }
    const targetPath = (url.pathname.replace(/\/$/, '') || '/').toLowerCase()
    const currentPath = ((pathname ?? '').replace(/\/$/, '') || '/').toLowerCase()
    if (targetPath !== currentPath) return
    const a = new URLSearchParams(url.search)
    const b = new URLSearchParams(window.location.search)
    if (a.toString() === b.toString()) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [pathname])

  const toggleSmsDropdown = () => {
    setActiveDropdown((prev) => (prev === 'sms' ? null : 'sms'))
  }

  const smsItems = [
    { label: 'OTP SMS', href: '/sms/otp' },
    { label: 'Transactional SMS', href: '/sms/transactional' },
    { label: 'Promotional SMS', href: '/sms/promotional' },
    { label: 'Bulk SMS', href: '/sms/bulk' },
  ]

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${isZambiaNav ? styles.headerZambia : ''} ${zambiaSolidHeader ? styles.headerZambiaSolid : ''}`}
    >
      <nav className={styles.nav}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link
              href={logoHref}
              className={styles.logoLink}
              scroll
              prefetch
              onClick={(e) => handleSamePathNav(e, logoHref)}
            >
              <Image
                src="/logo_mrotp.png"
                alt="Logo"
                width={48}
                height={48}
                className={styles.logoImage}
              />
            </Link>
          </div>

          <button
            className={styles.mobileMenuButton}
            onClick={isClient ? toggleMenu : undefined}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className={styles.hamburger}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          <ul className={`${styles.navList} ${isMenuOpen ? styles.menuOpen : ''}`}>
            <li>
              <Link href={homeHref} scroll prefetch onClick={(e) => handleSamePathNav(e, homeHref)}>
                Home
              </Link>
            </li>
            <li>
              <Link href={link('/about')} scroll prefetch onClick={() => (isClient ? closeMenu() : undefined)}>
                About Us
              </Link>
            </li>

            <li
              className={`${styles.dropdown} ${activeDropdown === 'sms' ? styles.dropdownOpen : ''}`}
              onMouseEnter={isClient ? handleDropdownEnter : undefined}
              onMouseLeave={isClient ? handleDropdownLeave : undefined}
            >
              <a
                href="#sms"
                onClick={(e) => {
                  if (isMenuOpen) {
                    e.preventDefault()
                    toggleSmsDropdown()
                  }
                }}
                aria-expanded={activeDropdown === 'sms'}
                aria-haspopup="true"
              >
                SMS <span className={styles.dropdownArrow}>▼</span>
              </a>
              <ul className={`${styles.dropdownMenu} ${activeDropdown === 'sms' ? styles.active : ''}`}>
                {smsItems.map((item) => {
                  const href = link(item.href)
                  return (
                    <li key={item.href}>
                      <Link href={href} scroll prefetch onClick={() => (isClient ? closeMenu() : undefined)}>
                        {item.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </li>

            <li>
              <Link
                href={link('/whatsapp')}
                scroll
                prefetch
                onClick={() => (isClient ? closeMenu() : undefined)}
              >
                WhatsApp Business
              </Link>
            </li>
            <li>
              <Link
                href={link('/contact')}
                scroll
                prefetch
                onClick={() => (isClient ? closeMenu() : undefined)}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link href={link('/blog')} scroll prefetch onClick={() => (isClient ? closeMenu() : undefined)}>
                Blog
              </Link>
            </li>
            <li className={styles.loginItem}>
              <a
                href="/dashboard"
                className={styles.loginLink}
                onClick={isClient ? closeMenu : undefined}
                target="_blank"
                rel="noopener noreferrer"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

function HeaderPathFallback() {
  const pathname = usePathname()
  const onZambiaPath = isZambiaMicrositePath(pathname)
  return <HeaderUI isZambiaNav={onZambiaPath} zambiaSolidHeader={onZambiaPath} />
}

function HeaderWithNavQuery() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const fromNavQuery = searchParams?.get(ZAMBIA_NAV_QUERY_KEY) === ZAMBIA_NAV_QUERY_VALUE
  const onZambiaPath = isZambiaMicrositePath(pathname)
  const isZambiaNav = onZambiaPath || fromNavQuery
  /* Solid Zambia bar on microsite plus main-site pages opened with ?nav=zambia */
  return <HeaderUI isZambiaNav={isZambiaNav} zambiaSolidHeader={isZambiaNav} />
}

export default function Header() {
  return (
    <Suspense fallback={<HeaderPathFallback />}>
      <HeaderWithNavQuery />
    </Suspense>
  )
}
