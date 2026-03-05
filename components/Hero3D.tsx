'use client'

import React, { useEffect, useState, Suspense } from 'react'
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

export default function Hero3D() {
  const [isMobile, setIsMobile] = useState(false)
  const [isSmallMobile, setIsSmallMobile] = useState(false)
  const [isSceneReady, setIsSceneReady] = useState(false)
  const [hasWebGLError, setHasWebGLError] = useState(false)

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


  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.globeWrapper}>
        {/* 🛟 Suspense protects async Three.js rendering */}
        <WebGLErrorBoundary onError={() => setHasWebGLError(true)}>
          <Suspense fallback={null}>
            <Canvas
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
                setIsSceneReady(true)
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

      {/* 📝 HERO TEXT – only show after globe/space are ready */}
      {(isSceneReady || hasWebGLError) && (
        <div className={styles.heroContentLeft}>
          <h1 className={styles.typingLineOne}>
            Instant OTPs,
          </h1>
          <h2 className={styles.typingLineTwo}>
            Global Reach
          </h2>
        </div>
      )}

      <ScrollDownButton />
    </section>
  )
}
