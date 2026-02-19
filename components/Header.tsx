'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Header.module.css'

export default function Header() {
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
    }
  }

  const smsItems = [
    { label: 'OTP SMS', href: '/sms/otp' },
    { label: 'Transactional SMS', href: '/sms/transactional' },
    { label: 'Promotional SMS', href: '/sms/promotional' },
    { label: 'Bulk SMS', href: '/sms/bulk' },
  ]

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <a href="/" className={styles.logoLink}>
              <Image
                src="/logo_mrotp.png"
                alt="Logo"
                width={48}
                height={48}
                className={styles.logoImage}
              />
            </a>
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
            <li><a href="/#hero" onClick={isClient ? closeMenu : undefined}>Home</a></li>
            
            <li
              className={styles.dropdown}
              onMouseEnter={isClient ? handleDropdownEnter : undefined}
              onMouseLeave={isClient ? handleDropdownLeave : undefined}
            >
              <a href="#sms">
                SMS <span className={styles.dropdownArrow}>▼</span>
              </a>
              <ul className={`${styles.dropdownMenu} ${activeDropdown === 'sms' ? styles.active : ''}`}>
                {smsItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} onClick={isClient ? closeMenu : undefined}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            
            <li><a href="#whatsapp" onClick={isClient ? closeMenu : undefined}>WhatsApp Business</a></li>
            <li><a href="/contact" onClick={isClient ? closeMenu : undefined}>Contact Us</a></li>
            <li><a href="#blog" onClick={isClient ? closeMenu : undefined}>Blog</a></li>
            <li><a href="http://dashboard.mr-otp.com" className={styles.loginLink} onClick={isClient ? closeMenu : undefined} target="_blank" rel="noopener noreferrer">Login</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}