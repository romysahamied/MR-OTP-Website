'use client'

import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

type StarData = {
  phase: number
  speed: number
}

export default function TwinklingStars({ count = 1200 }: { count?: number }) {
  const points = useRef<THREE.Points>(null)
  const stars = useRef<StarData[]>([])

  const geometry = useMemo(() => {
    const positions: number[] = []
    const sizes: number[] = []

    for (let i = 0; i < count; i++) {
      positions.push(
        (Math.random() - 0.5) * 160,
        (Math.random() - 0.5) * 120,
        -90 - Math.random() * 40
      )

      sizes.push(Math.random())
      stars.current.push({
        phase: Math.random() * Math.PI * 2,
        speed: 0.4 + Math.random() * 0.8,
      })
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    geo.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1))
    return geo
  }, [count])

  useFrame(({ clock }) => {
    if (!points.current) return

    const t = clock.elapsedTime
    const sizes = points.current.geometry.attributes.size

    for (let i = 0; i < sizes.count; i++) {
      const s = stars.current[i]
      sizes.setX(i, 0.6 + Math.sin(t * s.speed + s.phase) * 0.35)
    }

    sizes.needsUpdate = true
  })

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial
        color="#ffffff"
        size={1.1}
        sizeAttenuation
        transparent
        opacity={0.85}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
