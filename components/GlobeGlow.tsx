'use client'
import { extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'

const GlowMaterial = shaderMaterial(
  {
    color: new THREE.Color('#2aa6ff'),
    power: 2.6,
    intensity: 1.2,
  },
  `
    varying vec3 vNormal;
    varying vec3 vWorldPosition;

    void main() {
      vNormal = normalize(normalMatrix * normal);
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      gl_Position = projectionMatrix * viewMatrix * worldPosition;
    }
  `,
  `
    uniform vec3 color;
    uniform float power;
    uniform float intensity;

    varying vec3 vNormal;
    varying vec3 vWorldPosition;

    void main() {
      vec3 viewDir = normalize(cameraPosition - vWorldPosition);
      float fresnel = pow(1.0 - dot(viewDir, vNormal), power);
      gl_FragColor = vec4(color, fresnel * intensity);
    }
  `
)

extend({ GlowMaterial })

export default GlowMaterial
