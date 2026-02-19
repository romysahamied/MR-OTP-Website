'use client'

import { useState, useEffect } from 'react'
import styles from './Sms.module.css'

const useCases = [
  { title: 'Customer Support', message: 'Our servers are temporarily down. Please try again later.' },
  { title: 'Mobile-Me Help', message: "We're here to help! What problem are you facing today?" },
  { title: 'Feedback', message: 'Thank you for your purchase! Would you recommend us to a friend?' },
  { title: 'Alerts', message: 'Your Balance is now $3.15' },
  { title: 'Reminders', message: 'Your invoice of $83.56 is due on 7/31.' },
  { title: 'One Time Passcode', message: 'Your temporary password is uX09W2' },
  { title: 'Appointments', message: "We'll see you at 3:00 pm on Thursday!" },
  { title: 'Confirmations', message: 'Your order has been received' },
  { title: 'Delivery Tracking', message: 'Your order will arrive by 8:15pm.' },
]

const CYCLE_DURATION_MS = 30000
const ITEM_DURATION_MS = 800
const INITIAL_DELAY_MS = 200
const PAUSE_AFTER_ALL_MS = CYCLE_DURATION_MS - useCases.length * ITEM_DURATION_MS

const BUBBLE_POSITIONS = [
  { top: '10%', left: '20%' },
  { top: '8%', left: '50%' },
  { top: '6%', left: '75%' },
  { top: '42%', left: '18%' },
  { top: '40%', left: '50%' },
  { top: '48%', left: '78%' },
  { top: '72%', left: '20%' },
  { top: '70%', left: '50%' },
  { top: '74%', left: '78%' },
]

function WhatsAppDoubleTick() {
  return (
    <span className={styles.doubleTick} aria-hidden>
      <svg viewBox="0 0 16 11" width="16" height="11">
        <path d="M1 5.5 L4 8.5 L9 2" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 5.5 L9 8.5 L15 2" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

export default function SmsBubblesCarousel() {
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | null = null
    let pauseTimeoutId: ReturnType<typeof setTimeout> | null = null
    let showFirstId: ReturnType<typeof setTimeout> | null = null

    const runCycle = () => {
      if (showFirstId) clearTimeout(showFirstId)
      setVisibleCount(0)
      showFirstId = setTimeout(() => {
        setVisibleCount(1)
        intervalId = setInterval(() => {
          setVisibleCount((prev) => {
            if (prev >= useCases.length) {
              if (intervalId) clearInterval(intervalId)
              intervalId = null
              pauseTimeoutId = setTimeout(runCycle, PAUSE_AFTER_ALL_MS)
              return prev
            }
            return prev + 1
          })
        }, ITEM_DURATION_MS)
      }, INITIAL_DELAY_MS)
    }

    runCycle()

    return () => {
      if (showFirstId) clearTimeout(showFirstId)
      if (intervalId) clearInterval(intervalId)
      if (pauseTimeoutId) clearTimeout(pauseTimeoutId)
    }
  }, [])

  return (
    <div className={styles.bubblesContainer}>
      {useCases.slice(0, visibleCount).map((item, index) => (
        <div
          key={item.title}
          className={`${styles.bubbleCard} ${styles.bubbleCardVisible}`}
          style={{
            top: BUBBLE_POSITIONS[index].top,
            left: BUBBLE_POSITIONS[index].left,
          }}
        >
          <h3 className={styles.bubbleTitle}>{item.title}</h3>
          <div className={styles.bubbleWrapper}>
            <div className={styles.bubble}>
              <p className={styles.bubbleMessage}>{item.message}</p>
            </div>
            <WhatsAppDoubleTick />
          </div>
        </div>
      ))}
    </div>
  )
}
