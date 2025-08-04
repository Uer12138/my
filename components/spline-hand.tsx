"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Text3D, Environment } from "@react-three/drei"
import type * as THREE from "three"

function MechanicalHand() {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1
    }
  })

  return (
    <group>
      {/* Mechanical Hand Placeholder */}
      <mesh
        ref={meshRef}
        position={[0, 0, 0]}
        scale={clicked ? 1.2 : hovered ? 1.1 : 1}
        onClick={() => setClicked(!clicked)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[2, 3, 0.5]} />
        <meshStandardMaterial
          color={hovered ? "#00F5FF" : "#333"}
          metalness={0.8}
          roughness={0.2}
          emissive={hovered ? "#00F5FF" : "#000"}
          emissiveIntensity={hovered ? 0.2 : 0}
        />
      </mesh>

      {/* Robot Growth Animation */}
      {clicked && (
        <mesh position={[0, 2, 0]} scale={[0.5, 0.5, 0.5]}>
          <sphereGeometry args={[0.5]} />
          <meshStandardMaterial color="#FF0055" emissive="#FF0055" emissiveIntensity={0.3} />
        </mesh>
      )}

      {/* Floating Text */}
      <Text3D font="/fonts/Geist_Bold.json" size={0.2} height={0.02} position={[-1, -2, 0]}>
        手心里长出的机器人
        <meshStandardMaterial color="#00F5FF" />
      </Text3D>
    </group>
  )
}

export function SplineHand() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00F5FF" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF0055" />

        <MechanicalHand />

        <Environment preset="night" />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}
