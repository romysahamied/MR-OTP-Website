'use client'

import { useState, useCallback, useRef } from 'react'
import Image from 'next/image'
import styles from '@/app/rcs/Rcs.module.css'

const SLIDES = [
  {
    id: 'notifications',
    subheading: 'Transactional Messaging & Identity Verification',
    bullets: [
      'Deploy real-time transactional notifications including payment confirmations, booking updates, delivery alerts, and account activity—delivered instantly within the native messaging client.',
      'Enhance platform security with carrier-grade two-factor authentication (2FA) and verified one-time password (OTP) delivery, ensuring secure user verification and reduced fraud exposure.',
    ],
    phone: 'sky-resort',
  },
  {
    id: 'support',
    subheading: 'Support That Feels Effortless',
    bullets: [
      'Instant connection.',
      'Context-rich responses.',
      'Everything—images, links, videos—in one continuous conversation.',
    ],
    phone: 'tunebox',
  },
  {
    id: 'marketing',
    subheading: 'Marketing & Revenue Acceleration',
    bullets: [
      'Activate customers with targeted launch announcements, promotional campaigns, and dynamically personalized offers delivered directly within the messaging interface.',
      'Drive incremental revenue through intelligent upsell and cross-sell strategies, while maintaining continuous engagement with timely updates on new releases and exclusive deals.',
    ],
    phone: 'abc-bank',
  },
]

const EXTENDED_SLIDES = [SLIDES[SLIDES.length - 1], ...SLIDES, SLIDES[0]]

export default function RCSCarousel() {
  const [index, setIndex] = useState(1)
  const [noTransition, setNoTransition] = useState(false)
  const isTransitioning = useRef(false)

  const realIndex = index === 0 ? SLIDES.length - 1 : index === EXTENDED_SLIDES.length - 1 ? 0 : index - 1

  const goPrev = useCallback(() => {
    if (isTransitioning.current) return
    setIndex((i) => i - 1)
  }, [])

  const goNext = useCallback(() => {
    if (isTransitioning.current) return
    setIndex((i) => i + 1)
  }, [])

  const handleTransitionEnd = useCallback((e: React.TransitionEvent) => {
    if (e.target !== e.currentTarget) return
    if (index === 0) {
      isTransitioning.current = true
      setNoTransition(true)
      setIndex(EXTENDED_SLIDES.length - 2)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setNoTransition(false)
          isTransitioning.current = false
        })
      })
    } else if (index === EXTENDED_SLIDES.length - 1) {
      isTransitioning.current = true
      setNoTransition(true)
      setIndex(1)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setNoTransition(false)
          isTransitioning.current = false
        })
      })
    }
  }, [index])

  return (
    <section className={styles.journeySection}>
      <div className={styles.journeyFrostedCard}>
        <button
          type="button"
          className={styles.journeyArrow}
          onClick={goPrev}
          aria-label="Previous slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className={styles.journeyCarouselInner}>
          <div className={styles.journeySlidesWrapper}>
            <div
              className={styles.journeySlidesTrack}
              style={{
                transform: `translateX(-${index * 100}%)`,
                transition: noTransition ? 'none' : undefined,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {EXTENDED_SLIDES.map((slide, i) => (
                <div key={`${slide.id}-${i}`} className={styles.journeySlide}>
                  <div className={styles.journeyGrid}>
                    <div className={styles.journeyVisual}>
                      <div className={styles.journeyImageWrap}>
                        <Image
                          src={
                            slide.phone === 'tunebox'
                              ? '/RCS-Customer.png'
                              : slide.phone === 'abc-bank'
                                ? '/RCS-Marketting.png'
                                : '/RCS-Notification.png'
                          }
                          alt={slide.subheading}
                          width={400}
                          height={500}
                          className={styles.journeyCarouselImage}
                        />
                      </div>
                    </div>
                    <div className={styles.journeyContent}>
                      <h2 className={styles.journeyHeading}>Engage Customers at Every Step with RCS</h2>
                      <h3 className={styles.journeySubheading}>{slide.subheading}</h3>
                      <ul className={styles.journeyList}>
                        {slide.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          className={styles.journeyArrowRight}
          onClick={goNext}
          aria-label="Next slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div className={styles.journeyDots}>
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`${styles.journeyDot} ${i === realIndex ? styles.journeyDotActive : ''}`}
            onClick={() => {
              if (i === realIndex) return
              setIndex(i + 1)
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
