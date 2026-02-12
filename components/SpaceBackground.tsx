'use client'

import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import ShootingStars from './ShootingStars'

export default function SpaceBackground({ isMobile }: { isMobile: boolean }) {
  const pointsRef = useRef<THREE.Points>(null)
  const { camera } = useThree()

  const STAR_COUNT = isMobile ? 1800 : 4000
  const DEPTH = 600
  const SPEED = 16

  const data = useMemo(() => {
    const positions = new Float32Array(STAR_COUNT * 3)
    const speeds = new Float32Array(STAR_COUNT)

    for (let i = 0; i < STAR_COUNT; i++) {
      resetStar(i, positions, speeds, true)
    }

    return { positions, speeds }
  }, [STAR_COUNT])

  function resetStar(
    i: number,
    positions: Float32Array,
    speeds: Float32Array,
    initial = false
  ) {
    const spread = 140

    positions[i * 3 + 0] = (Math.random() - 0.5) * spread
    positions[i * 3 + 1] = (Math.random() - 0.5) * spread
    positions[i * 3 + 2] = initial
      ? -Math.random() * DEPTH
      : -DEPTH

    speeds[i] = 0.4 + Math.random() * 1.6
  }

  useFrame((_, delta) => {
    const pos = pointsRef.current!.geometry.attributes.position as THREE.BufferAttribute

    for (let i = 0; i < STAR_COUNT; i++) {
      const zIndex = i * 3 + 2
      pos.array[zIndex] += SPEED * data.speeds[i] * delta

      if (pos.array[zIndex] > camera.position.z + 5) {
        resetStar(i, pos.array as Float32Array, data.speeds)
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
        color="#cfe9ff"
        size={0.2}
        transparent
        opacity={0.85}
        depthWrite={false}
        depthTest={true}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
      {/* <ShootingStars /> */}
    </points>
  )
}
