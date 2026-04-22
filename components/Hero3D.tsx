'use client'

import React, { useCallback, useEffect, useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'

import Globe3D from './Globe3D'
import SpaceBackground from './SpaceBackground'
import ScrollDownButton from './ScrollDownButton'

import styles from './Hero.module.css'

class WebGLErrorBoundary extends React.Component<
  { children: React.ReactNode; onError: () => void },
  { hasError: boolean }
> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch() {
    this.props.onError()
  }

  render() {
    return this.state.hasError ? null : this.props.children
  }
}

/** After both hero typewriter lines finish (~3.6s), show CTA; faster when motion is reduced or on small viewports. */
const HERO_CTA_DELAY_AFTER_TYPING_MS = 3850
const HERO_CTA_DELAY_SHORT_MS = 700

export default function Hero3D() {
  const [isMobile, setIsMobile] = useState(false)
  const [isSmallMobile, setIsSmallMobile] = useState(false)
  const [showHeroCta, setShowHeroCta] = useState(false)

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth
      setIsMobile(w < 768)
      setIsSmallMobile(w < 480)
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const narrow = window.matchMedia('(max-width: 768px)').matches
    const delay = reduced || narrow ? HERO_CTA_DELAY_SHORT_MS : HERO_CTA_DELAY_AFTER_TYPING_MS
    const id = window.setTimeout(() => setShowHeroCta(true), delay)
    return () => window.clearTimeout(id)
  }, [])

  const openLetsTalk = useCallback(() => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', '#contact')
    }
    window.setTimeout(() => {
      document.getElementById('contact-name')?.focus()
    }, 500)
  }, [])


  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.globeWrapper}>
        {/* 🛟 Suspense protects async Three.js rendering */}
        <WebGLErrorBoundary onError={() => {}}>
          <Suspense fallback={null}>
            <Canvas
              style={{ width: '100%', height: '100%', display: 'block' }}
              camera={{
                position: [0, 0, isSmallMobile ? 8 : isMobile ? 7.5 : 6],
                fov: isMobile ? 50 : 55,
                near: 0.1,
                far: 200,
              }}
              gl={{ antialias: true, alpha: true }}
              onCreated={({ gl }) => {
                gl.setPixelRatio(Math.min(window.devicePixelRatio, 2))
                gl.toneMapping = THREE.ACESFilmicToneMapping
                gl.toneMappingExposure = 1
                gl.setClearColor(new THREE.Color('#020409'), 0)
              }}
            >
              {/* 🌌 BACKGROUND STARS */}
              <group renderOrder={0}>
                <SpaceBackground isMobile={isMobile} />
              </group>

              {/* 💡 LIGHTING */}
              <ambientLight intensity={0.25} />
              <directionalLight position={[6, 4, 6]} intensity={0.9} />

              {/* 🌍 GLOBE */}
              <group renderOrder={10}>
                <Globe3D isMobile={isMobile} isSmallMobile={isSmallMobile} />
              </group>
            </Canvas>
          </Suspense>
        </WebGLErrorBoundary>
      </div>

      {/* 📝 HERO TEXT — not gated on WebGL (avoids blank hero if Canvas is slow or fails) */}
      <div className={styles.heroContentLeft}>
        <h1 className={styles.typingLineOne}>Instant OTPs,</h1>
        <h2 className={styles.typingLineTwo}>Global Reach</h2>
        <div
          className={`${styles.heroCtaWrap} ${showHeroCta ? styles.heroCtaWrapVisible : ''}`}
          aria-hidden={!showHeroCta}
        >
          <button
            type="button"
            className={styles.heroCtaBtn}
            onClick={openLetsTalk}
            tabIndex={showHeroCta ? 0 : -1}
            aria-label="Open the Let's talk contact form"
          >
            Click here
          </button>
        </div>
      </div>

      <ScrollDownButton />
    </section>
  )
}
