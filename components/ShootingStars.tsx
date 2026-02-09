'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

type Star = {
  speed: number
}

export default function ShootingStars() {
  const group = useRef<THREE.Group>(null)
  const stars = useRef<Star[]>([])

  useFrame((_, delta) => {
    group.current?.children.forEach((obj, i) => {
      obj.position.x += stars.current[i].speed * delta
      obj.position.y -= stars.current[i].speed * 0.6 * delta

      // Reset star when it leaves screen
      if (obj.position.x > 110 || obj.position.y < -50) {
        obj.position.set(
          -90 - Math.random() * 40,
          70 + Math.random() * 40,
          -80
        )
      }
    })
  })

  return (
    <group ref={group}>
      {Array.from({ length: 6 }).map((_, i) => {
        stars.current[i] = {
          speed: 12 + Math.random() * 30,
        }

        return (
          <group
            key={i}
            position={[
              -90 - Math.random() * 40,
              70 + Math.random() * 40,
              -80,
            ]}
            rotation={[0, 0, -0.65]}
          >
            {/* ⭐ Star Head */}
            <mesh>
              <sphereGeometry args={[0.45, 12, 12]} />
              <meshBasicMaterial
                color="#ffffff"
                transparent
                opacity={1}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
              />
            </mesh>

            {/* ➝ Tail */}
            <mesh position={[-6, 0, 0]}>
              <planeGeometry args={[12, 0.35]} />
              <meshBasicMaterial
                transparent
                opacity={0.7}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
              >
                <color attach="color" args={['#9ec4ff']} />
              </meshBasicMaterial>
            </mesh>
          </group>
        )
      })}
    </group>
  )
}
