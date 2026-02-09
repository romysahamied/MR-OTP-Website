'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from './Services.module.css'

const CAROUSEL_ITEMS = [
  {
    src: '/RCS W.png',
    title: 'RCS',
    description: 'Rich Communication Services for rich, interactive messaging with images, buttons, and carousels. Reach users with modern, app-like experiences on RCS-enabled devices.',
  },
  {
    src: '/TRX W.png',
    title: 'Transactional SMS',
    description: 'Reliable transactional messages for OTPs, alerts, order updates, and account notifications. High delivery rates and low latency for time-sensitive communications.',
  },
  {
    src: '/WA W.png',
    title: 'WhatsApp Business',
    description: 'WhatsApp Business API integration for customer support, notifications, and marketing. Engage users on the channel they use every day with templates and rich media.',
  },
  {
    src: '/OTP W.png',
    title: 'OTP SMS',
    description: 'Secure, fast OTP delivery for login, verification, and two-factor authentication. Built for high throughput and global reach with minimal latency.',
  },
  {
    src: '/Promo W.png',
    title: 'Promotional SMS',
    description: 'Bulk promotional and marketing SMS campaigns. Schedule, segment, and track campaigns with delivery reports and analytics.',
  },
]

const AUTO_ADVANCE_MS = 30000 // 30 seconds

export default function Services() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const autoAdvanceRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  const goTo = (index: number) => {
    const next = (index + CAROUSEL_ITEMS.length) % CAROUSEL_ITEMS.length
    setCarouselIndex(next)
  }

  useEffect(() => {
    autoAdvanceRef.current = setInterval(() => {
      setCarouselIndex((i) => (i + 1) % CAROUSEL_ITEMS.length)
    }, AUTO_ADVANCE_MS)
    return () => {
      if (autoAdvanceRef.current) clearInterval(autoAdvanceRef.current)
    }
  }, [])

  const handlePrev = () => {
    if (autoAdvanceRef.current) {
      clearInterval(autoAdvanceRef.current)
      autoAdvanceRef.current = setInterval(() => {
        setCarouselIndex((i) => (i + 1) % CAROUSEL_ITEMS.length)
      }, AUTO_ADVANCE_MS)
    }
    goTo(carouselIndex - 1)
  }

  const handleNext = () => {
    if (autoAdvanceRef.current) {
      clearInterval(autoAdvanceRef.current)
      autoAdvanceRef.current = setInterval(() => {
        setCarouselIndex((i) => (i + 1) % CAROUSEL_ITEMS.length)
      }, AUTO_ADVANCE_MS)
    }
    goTo(carouselIndex + 1)
  }

  const item = CAROUSEL_ITEMS[carouselIndex]

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Services</h2>
      <div
        ref={sectionRef}
        className={`${styles.carouselWrap} ${visible ? styles.visible : ''}`}
      >
        <div className={styles.carouselLeft}>
          <button
            type="button"
            className={styles.carouselArrow}
            onClick={handlePrev}
            aria-label="Previous"
          >
            <span className={styles.carouselArrowIcon}>‹</span>
          </button>
          <div className={styles.carouselTile}>
            <div className={styles.carouselImageWrap}>
              <Image
                key={item.src}
                src={item.src}
                alt={item.title}
                fill
                className={styles.carouselImage}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
          </div>
          <button
            type="button"
            className={styles.carouselArrow}
            onClick={handleNext}
            aria-label="Next"
          >
            <span className={styles.carouselArrowIcon}>›</span>
          </button>
        </div>
        <div className={styles.carouselText}>
          <h3 className={styles.carouselTitle}>{item.title}</h3>
          <p className={styles.carouselDescription}>{item.description}</p>
        </div>
      </div>
    </section>
  )
}
