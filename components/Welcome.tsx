'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from './Welcome.module.css'

export default function Welcome() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // animate only once
        }
      },
      { threshold: 0.35 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
   <section
  ref={sectionRef}
  className={styles.welcome}
>
  <div className={styles.container}>

    {/* TITLE */}
    <div className={styles.titleContainer}>
      <span className={styles.welcomeText}>Welcome to</span>
      <Image
        src="/goldenlogo.png"
        alt="MrOTP Logo"
        width={52}
        height={52}
        className={styles.inlineLogo}
      />
    </div>

    <p className={styles.subTitle}>
      Reliable OTP messaging for a connected world
    </p>

    <div className={styles.cardsWrapper}>
    <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <Image
                  src="/missionicon.png"
                  alt="Mission"
                  width={120}
                  height={120}
                  className={styles.icon}
                  priority
                />
              </div>

              <h3 className={styles.cardTitle}> Our Mission</h3>
              <div className={styles.cardContent}>
                <ul>
                  <li>
                    To deliver <strong>high-performance SMS routing</strong> with consistently strong DLR and conversion rates.
                  </li>
                  <li>
                    To ensure <strong>secure, compliant, and reliable OTP delivery</strong> across global networks.
                  </li>
                  <li>
                    To build <strong>long-term partnerships</strong> through transparency, trust, and operational excellence.
                  </li>
                  <li>
                    To continuously <strong>scale and optimize messaging infrastructure</strong> for speed, reliability, and growth.
                  </li>
                </ul>

              </div>

            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <Image
                  src="/visionicon.png"
                  alt="Vision"
                  width={350}
                  height={350}
                  className={styles.icon}
                  priority
                />
              </div>
              <h3 className={styles.cardTitle}>Our Vision</h3>
              <div className={styles.cardContent}>
                <ul>
                  <li>
                    To become a <strong>globally trusted SMS and OTP platform</strong> powering critical business communications at scale.
                  </li>
                  <li>
                    To deliver <strong>high-speed, secure, and reliable messaging infrastructure</strong> for authentication and transactional use cases.
                  </li>
                  <li>
                    To maintain <strong>industry-leading compliance, privacy, and security standards</strong> across all global routes.
                  </li>
                  <li>
                    To continuously <strong>innovate and optimize messaging technology</strong> for performance, scalability, and seamless connectivity.
                  </li>
                </ul>

              </div>
            </div>
    </div>

  </div>
</section>

  )
}
