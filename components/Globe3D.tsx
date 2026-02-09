'use client'

import { useRef, useMemo, useEffect } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { TextureLoader, AdditiveBlending } from 'three'

/* ---------------- HELPERS ---------------- */

function latLngToXYZ(lat: number, lng: number, r = 1.015) {
  const phi = (90 - lat) * Math.PI / 180
  const theta = (lng + 180) * Math.PI / 180

  return [
    -r * Math.sin(phi) * Math.cos(theta),
     r * Math.cos(phi),
     r * Math.sin(phi) * Math.sin(theta),
  ]
}

/* ---------------- COMPONENT ---------------- */

export default function Globe3D() {
  const groupRef = useRef<THREE.Group>(null)

  const earthMask = useLoader(TextureLoader, '/goldenglobe.png')

  /* ---------- LAND DOTS ---------- */

  const landDotsGeometry = useMemo(() => {
    if (!earthMask.image) return new THREE.BufferGeometry() // safety

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')!

    canvas.width = earthMask.image.width
    canvas.height = earthMask.image.height
    ctx.drawImage(earthMask.image, 0, 0)

    const img = ctx.getImageData(0, 0, canvas.width, canvas.height).data
    const positions: number[] = []

    for (let i = 0; i < img.length; i += 4) {
      if (img[i] > 180 && Math.random() < 0.08) {
        const px = (i / 4) % canvas.width
        const py = Math.floor(i / 4 / canvas.width)

        const lat = 90 - (py / canvas.height) * 180
        const lng = (px / canvas.width) * 360 - 180

        const [x, y, z] = latLngToXYZ(lat, lng)
        positions.push(x, y, z)
      }
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))

    return geo
  }, [earthMask]) // regenerate only when earthMask changes

  // ✅ Dispose geometry on unmount to prevent buffer errors
  useEffect(() => {
    return () => {
      landDotsGeometry.dispose()
    }
  }, [landDotsGeometry])

  /* ---------- ROTATION ---------- */

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.035
    }
  })

  /* ---------- RENDER ---------- */

  return (
    <group ref={groupRef} scale={2.6}>

      {/* 1️⃣ SOLID CORE — BLOCKS STARS */}
      <mesh renderOrder={1}>
        <sphereGeometry args={[1, 128, 128]} />
        <meshStandardMaterial
          color="#020409"
          roughness={0.95}
          metalness={0.05}
        />
      </mesh>

      {/* 2️⃣ GLOWING WORLD MAP */}
      <mesh renderOrder={2}>
        <sphereGeometry args={[1.01, 64, 64]} />
        <meshBasicMaterial
          map={earthMask}
          color="#8fdcff"
          transparent
          opacity={1}
          blending={AdditiveBlending}
          depthWrite={true}     
          depthTest={true}
        />
      </mesh>

      {/* 3️⃣ LAND DOTS */}
      <points geometry={landDotsGeometry} renderOrder={3}>
        <pointsMaterial
          size={0.012}
          color="#cfefff"
          transparent
          opacity={0.7}
          depthWrite={false}
          blending={AdditiveBlending}
          sizeAttenuation
        />
      </points>

      {/* 4️⃣ ATMOSPHERE RIM */}
      {/* <mesh renderOrder={4}>
        <sphereGeometry args={[1.08, 64, 64]} />
        <meshBasicMaterial
          color="#7fbfff"
          transparent
          opacity={0.08}
          blending={AdditiveBlending}
          depthWrite={false}
          side={THREE.BackSide}
        />
      </mesh> */}
      
    </group>
  )
}
