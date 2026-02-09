'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Nebula() {
  const mat = useRef<THREE.MeshBasicMaterial>(null)

  useFrame(({ clock }) => {
    if (mat.current) {
      mat.current.opacity =
        0.25 + Math.sin(clock.elapsedTime * 0.3) * 0.08
    }
  })

  return (
    <mesh position={[0, 0, -80]}>
      <planeGeometry args={[200, 200]} />
      <meshBasicMaterial
        ref={mat}
        color="#6b7cff"
        transparent
        opacity={0.25}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  )
}
