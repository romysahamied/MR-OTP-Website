'use client'

import { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { TextureLoader, AdditiveBlending } from 'three'

export default function Globe3D({
  isMobile = false,
  isSmallMobile = false,
}: {
  isMobile?: boolean
  isSmallMobile?: boolean
}) {
  const groupRef = useRef<THREE.Group>(null)
  const scale = isSmallMobile ? 1.5 : isMobile ? 1.85 : 2.6

  const earthMask = useLoader(TextureLoader, '/golden-mesh.png')

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.035
    }
  })

  return (
    <group ref={groupRef} scale={scale}>
      {/* Glassy core — semi-transparent so stars show through */}
      <mesh renderOrder={1}>
        <sphereGeometry args={[1, 128, 128]} />
        <meshStandardMaterial
          color="#061018"
          roughness={0.4}
          metalness={0.15}
          transparent
          opacity={0.22}
          depthWrite={false}
        />
      </mesh>

      {/* Glowing world map */}
      <mesh renderOrder={2}>
        <sphereGeometry args={[1.01, 64, 64]} />
        <meshBasicMaterial
          map={earthMask}
          color="#8fdcff"
          transparent
          opacity={0.72}
          blending={AdditiveBlending}
          depthWrite={false}
          depthTest={true}
        />
      </mesh>
    </group>
  )
}
