"use client"

import type React from "react"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Text3D, Environment, Float } from "@react-three/drei"
import { motion, AnimatePresence } from "framer-motion"
import type * as THREE from "three"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Eye, Users } from "lucide-react"

interface PrototypeData {
  id: string
  name: string
  title: string
  description: string
  personality: string
  skills: string[]
  projects: Array<{
    name: string
    description: string
    tech: string[]
  }>
  icon: React.ReactNode
  color: string
}

const prototypes: PrototypeData[] = [
  {
    id: "explorer",
    name: "探索者",
    title: "敏捷试错者",
    description: "我不惧怕失败，通过快速原型、小步快跑的方式验证产品构想",
    personality: "在试错中找到通往成功的路径，享受探索未知领域的挑战",
    skills: ["快速原型", "MVP验证", "用户调研", "需求分析"],
    projects: [
      {
        name: "多模态智能交互小车",
        description: "校园场景AI原型开发，实现环境感知-身份识别-情感交互",
        tech: ["MindSpore", "ModelArts", "Python", "Jetson Nano"],
      },
    ],
    icon: <Zap className="w-6 h-6" />,
    color: "#00FFC0",
  },
  {
    id: "collaborator",
    name: "协同者",
    title: "落地攻坚者",
    description: "我不仅擅长创意，更专注于将技术与需求结合，推动产品落地",
    personality: "解决落地过程中的每一个难题，确保产品从概念走向现实",
    skills: ["技术选型", "团队协作", "项目管理", "质量把控"],
    projects: [
      {
        name: "边缘设备算力优化",
        description: "通过模型压缩和动态调度，将响应延迟从500ms降至200ms",
        tech: ["模型压缩", "动态调度", "性能优化", "边缘计算"],
      },
    ],
    icon: <Users className="w-6 h-6" />,
    color: "#0A2D4F",
  },
  {
    id: "perceiver",
    name: "感知者",
    title: "持续迭代者",
    description: "我坚信产品没有终点，而是持续优化的过程",
    personality: "通过用户反馈和数据分析，不断打磨产品体验",
    skills: ["用户体验", "数据分析", "产品迭代", "反馈收集"],
    projects: [
      {
        name: "人脸识别准确率提升",
        description: "通过多光线样本训练，将识别准确率从78%提升至98.3%",
        tech: ["计算机视觉", "模型训练", "A/B测试", "数据收集"],
      },
    ],
    icon: <Eye className="w-6 h-6" />,
    color: "#FF6B6B",
  },
]

function PrototypeModel({
  position,
  isActive,
  onClick,
  color,
}: {
  position: [number, number, number]
  isActive: boolean
  onClick: () => void
  color: string
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.05
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        position={position}
        scale={isActive ? 1.3 : hovered ? 1.1 : 1}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[1.5, 2, 0.8]} />
        <meshStandardMaterial
          color={isActive || hovered ? color : "#333"}
          metalness={0.8}
          roughness={0.2}
          emissive={isActive || hovered ? color : "#000"}
          emissiveIntensity={isActive || hovered ? 0.3 : 0}
        />
      </mesh>

      {/* Activation Effect */}
      {isActive && (
        <mesh position={[position[0], position[1] + 1.5, position[2]]}>
          <sphereGeometry args={[0.3]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} transparent opacity={0.7} />
        </mesh>
      )}
    </Float>
  )
}

export function EmbodiedPrototypes() {
  const [activePrototype, setActivePrototype] = useState<string | null>(null)

  const handlePrototypeClick = (id: string) => {
    setActivePrototype(activePrototype === id ? null : id)
  }

  const activeData = prototypes.find((p) => p.id === activePrototype)

  return (
    <div className="w-full h-full relative">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00FFC0" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0A2D4F" />
          <pointLight position={[0, 10, -10]} intensity={0.8} color="#FF6B6B" />

          {/* Prototype Models */}
          <PrototypeModel
            position={[-3, 0, 0]}
            isActive={activePrototype === "explorer"}
            onClick={() => handlePrototypeClick("explorer")}
            color="#00FFC0"
          />
          <PrototypeModel
            position={[0, -1, 0]}
            isActive={activePrototype === "collaborator"}
            onClick={() => handlePrototypeClick("collaborator")}
            color="#0A2D4F"
          />
          <PrototypeModel
            position={[3, 0, 0]}
            isActive={activePrototype === "perceiver"}
            onClick={() => handlePrototypeClick("perceiver")}
            color="#FF6B6B"
          />

          {/* Prototype Labels */}
          <Text3D font="/fonts/Geist_Bold.json" size={0.3} height={0.02} position={[-3, -2, 0]}>
            探索者
            <meshStandardMaterial color="#00FFC0" />
          </Text3D>

          <Text3D font="/fonts/Geist_Bold.json" size={0.3} height={0.02} position={[-0.5, -3, 0]}>
            协同者
            <meshStandardMaterial color="#0A2D4F" />
          </Text3D>

          <Text3D font="/fonts/Geist_Bold.json" size={0.3} height={0.02} position={[2.5, -2, 0]}>
            感知者
            <meshStandardMaterial color="#FF6B6B" />
          </Text3D>

          <Environment preset="night" />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      {/* Information Panel */}
      <AnimatePresence>
        {activeData && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="absolute right-8 top-1/2 transform -translate-y-1/2 w-96 z-20"
          >
            <div className="cyber-panel p-6 backdrop-blur-md">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div style={{ color: activeData.color }}>{activeData.icon}</div>
                  <div>
                    <h3 className="font-oxanium text-xl text-white">{activeData.name}</h3>
                    <p className="text-cyber-blue text-sm">{activeData.title}</p>
                  </div>
                </div>
                <button onClick={() => setActivePrototype(null)} className="text-gray-400 hover:text-white text-xl">
                  ×
                </button>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 font-inter leading-relaxed">{activeData.description}</p>

              <p className="text-gray-400 text-xs mb-4 font-inter">{activeData.personality}</p>

              {/* Skills */}
              <div className="mb-4">
                <h4 className="text-white text-sm font-oxanium mb-2">核心技能</h4>
                <div className="flex flex-wrap gap-1">
                  {activeData.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs border-cyber-blue/50 text-cyber-blue">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div className="mb-4">
                <h4 className="text-white text-sm font-oxanium mb-2">相关项目</h4>
                {activeData.projects.map((project, index) => (
                  <div key={index} className="border border-gray-700 rounded-lg p-3 mb-2">
                    <h5 className="text-white text-sm font-medium mb-1">{project.name}</h5>
                    <p className="text-gray-400 text-xs mb-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <Button className="w-full bg-cyber-blue hover:bg-cyber-blue/80 text-cyber-dark font-oxanium">
                深入了解 <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
