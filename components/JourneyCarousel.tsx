'use client'

import { useState, useCallback, useRef } from 'react'
import Image from 'next/image'
import styles from '@/app/rcs/Rcs.module.css'

const SLIDES = [
  {
    id: 'notifications',
    subheading: 'Notifications & Authentication',
    bullets: [
      'Deliver real-time transaction alerts, booking confirmations, and timely updates directly to your customers.',
      'Strengthen security with two-factor authentication and verified OTP delivery.',
    ],
    phone: 'sky-resort',
  },
  {
    id: 'support',
    subheading: 'Customer Support',
    bullets: [
      'Let customers reach out directly and respond quickly with rich, contextual help.',
      'Support conversations with images, links, videos, and more—all in one thread.',
    ],
    phone: 'tunebox',
  },
  {
    id: 'marketing',
    subheading: 'Marketing & Sales',
    bullets: [
      'Notify customers about new product launches, promotions, and personalized offers.',
      'Upsell and cross-sell to existing customers and keep them informed of your latest deals.',
    ],
    phone: 'abc-bank',
  },
]

const EXTENDED_SLIDES = [SLIDES[SLIDES.length - 1], ...SLIDES, SLIDES[0]]

export default function JourneyCarousel() {
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
                      {slide.phone === 'tunebox' ? (
                        <div className={styles.journeyImageWrap}>
                          <Image
                            src="/RCS-Customer.png"
                            alt="RCS Customer Support"
                            width={400}
                            height={500}
                            className={styles.journeyCarouselImage}
                          />
                        </div>
                      ) : (
                      <div className={styles.journeyPhone}>
                        <div className={styles.journeyScreen}>
                          {slide.phone === 'sky-resort' && (
                            <>
                      <div className={styles.journeyPhoneHeader}>
                        <span className={styles.journeyBack}>←</span>
                        <span className={styles.journeyProfile} aria-hidden />
                        <span className={styles.journeyChatName}>Sky Resort</span>
                        <span className={styles.journeyCheck}>✓</span>
                        <span className={styles.journeyMenu}>⋮</span>
                      </div>
                      <div className={styles.journeyMessage}>
                        <p className={styles.journeyMsgText}>
                          Hello Mark, looking forward to seeing you at our resort. Check in online 48h before arriving to avoid queuing. Your booking code is: HTS46LT. Download the app for more benefits.
                        </p>
                        <div className={styles.journeyMsgImage} />
                        <strong className={styles.journeyMsgTitle}>Sky Resort</strong>
                        <span className={styles.journeyMsgSubtitle}>Check In, Gear Up, Go!</span>
                        <button type="button" className={styles.journeyMsgBtn}>More info →</button>
                        <div className={styles.journeyActions}>
                          <button type="button" className={styles.journeyActionBtn}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18v-4M9 14h6" /></svg>
                            Open App
                          </button>
                          <button type="button" className={styles.journeyActionBtn}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                            Calendar
                          </button>
                        </div>
                      </div>
                            </>
                          )}
                          {slide.phone === 'abc-bank' && (
                            <>
                      <div className={styles.journeyPhoneHeader}>
                        <span className={styles.journeyBack}>←</span>
                        <span className={styles.journeyChatName}>ABC Bank</span>
                        <span className={styles.journeyCheck}>✓</span>
                        <span className={styles.journeyMenu}>⋮</span>
                      </div>
                      <div className={styles.journeyChat}>
                        <div className={styles.chatBubble}>
                          <span className={styles.chatIcon} aria-hidden>●</span>
                          Hey Eva, as a Gold Credit Card holder, choose from the benefits we&apos;ve prepared for you.
                        </div>
                        <div className={styles.journeyBankCarousel}>
                          <div className={styles.journeyBankCard}>
                            <div className={styles.journeyBankCardImg} />
                            <strong>Additional Kids Card</strong>
                            <span>Control the spending limit</span>
                            <button type="button" className={styles.journeyMsgBtn}>More info →</button>
                          </div>
                          <div className={styles.journeyBankCard}>
                            <div className={styles.journeyBankCardImg2} />
                            <strong>Travel Insurance</strong>
                            <span>Wander Far, Worry Less</span>
                            <button type="button" className={styles.journeyMsgBtn}>Register now →</button>
                          </div>
                        </div>
                      </div>
                          </>
                          )}
                          <div className={styles.journeyInput}>RCS Message</div>
                        </div>
                      </div>
                      )}
                    </div>
                    <div className={styles.journeyContent}>
                      <h2 className={styles.journeyHeading}>RCS for Every Step of the Journey</h2>
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
