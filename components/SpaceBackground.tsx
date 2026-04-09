'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/** Cap delta so tab resume / lag spikes do not break positions or skip resets. */
const MAX_DELTA = 0.05

export default function SpaceBackground({ isMobile }: { isMobile: boolean }) {
  const pointsRef = useRef<THREE.Points>(null)

  const STAR_COUNT = isMobile ? 1800 : 4000
  const DEPTH = 600
  const SPEED = 16

  const data = useMemo(() => {
    const positions = new Float32Array(STAR_COUNT * 3)
    const speeds = new Float32Array(STAR_COUNT)

    for (let i = 0; i < STAR_COUNT; i++) {
      resetStar(i, positions, speeds)
    }

    return { positions, speeds }
  }, [STAR_COUNT])

  function resetStar(i: number, positions: Float32Array, speeds: Float32Array) {
    const spread = 140

    positions[i * 3 + 0] = (Math.random() - 0.5) * spread
    positions[i * 3 + 1] = (Math.random() - 0.5) * spread
    // Random depth every time so stars never sync into one faint band at -DEPTH
    positions[i * 3 + 2] = -Math.random() * DEPTH

    speeds[i] = 0.4 + Math.random() * 1.6
  }

  useFrame((state, delta) => {
    const pts = pointsRef.current
    if (!pts) return

    const dt = Math.min(delta, MAX_DELTA)
    const resetZ = state.camera.position.z + 5

    const pos = pts.geometry.attributes.position as THREE.BufferAttribute
    const arr = pos.array as Float32Array

    for (let i = 0; i < STAR_COUNT; i++) {
      const zIndex = i * 3 + 2
      arr[zIndex] += SPEED * data.speeds[i] * dt

      if (arr[zIndex] > resetZ) {
        resetStar(i, arr, data.speeds)
      }
    }

    pos.needsUpdate = true
  })

  return (
    <points
      key={STAR_COUNT}
      ref={pointsRef}
      frustumCulled={false}
    >
      <bufferGeometry key={STAR_COUNT}>
        <bufferAttribute
          attach="attributes-position"
          array={data.positions}
          count={data.positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#e8c872"
        size={0.2}
        transparent
        opacity={0.9}
        depthWrite={false}
        depthTest={true}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  )
}
