"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

const skills = [
  { name: "硬件选型", value: 9, color: "#00F5FF" },
  { name: "3D建模", value: 9, color: "#FF0055" },
  { name: "ROS开发", value: 10, color: "#00F5FF" },
  { name: "交互逻辑设计", value: 9, color: "#FF0055" },
  { name: "轻量化部署", value: 8, color: "#00F5FF" },
  { name: "场景需求拆解", value: 10, color: "#FF0055" },
]

export default function SkillRadar() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const maxRadius = Math.min(centerX, centerY) - 40

    // 清空画布
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // 绘制雷达网格
    for (let i = 1; i <= 5; i++) {
      const radius = (maxRadius / 5) * i
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.strokeStyle = "#00F5FF"
      ctx.globalAlpha = 0.2
      ctx.stroke()
    }

    // 绘制轴线
    const angleStep = (Math.PI * 2) / skills.length
    skills.forEach((_, index) => {
      const angle = angleStep * index - Math.PI / 2
      const x = centerX + Math.cos(angle) * maxRadius
      const y = centerY + Math.sin(angle) * maxRadius

      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(x, y)
      ctx.strokeStyle = "#00F5FF"
      ctx.globalAlpha = 0.3
      ctx.stroke()
    })

    // 绘制技能数据
    ctx.beginPath()
    skills.forEach((skill, index) => {
      const angle = angleStep * index - Math.PI / 2
      const radius = (maxRadius / 10) * skill.value
      const x = centerX + Math.cos(angle) * radius
      const y = centerY + Math.sin(angle) * radius

      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })
    ctx.closePath()
    ctx.fillStyle = "#00F5FF"
    ctx.globalAlpha = 0.2
    ctx.fill()
    ctx.strokeStyle = "#00F5FF"
    ctx.globalAlpha = 0.8
    ctx.lineWidth = 2
    ctx.stroke()

    // 绘制技能点
    skills.forEach((skill, index) => {
      const angle = angleStep * index - Math.PI / 2
      const radius = (maxRadius / 10) * skill.value
      const x = centerX + Math.cos(angle) * radius
      const y = centerY + Math.sin(angle) * radius

      ctx.beginPath()
      ctx.arc(x, y, 4, 0, Math.PI * 2)
      ctx.fillStyle = skill.color
      ctx.globalAlpha = 1
      ctx.fill()
    })

    // 绘制技能标签
    ctx.font = "12px Inter"
    ctx.textAlign = "center"
    skills.forEach((skill, index) => {
      const angle = angleStep * index - Math.PI / 2
      const labelRadius = maxRadius + 20
      const x = centerX + Math.cos(angle) * labelRadius
      const y = centerY + Math.sin(angle) * labelRadius

      ctx.fillStyle = "#FFFFFF"
      ctx.globalAlpha = 0.9
      ctx.fillText(skill.name, x, y)

      // 技能分数
      ctx.font = "10px monospace"
      ctx.fillStyle = skill.color
      ctx.fillText(`${skill.value}/10`, x, y + 15)
    })
  }, [])

  return (
    <div className="cyber-card p-6">
      <h2 className="font-orbitron text-cyber-blue text-2xl mb-4">技能雷达</h2>

      <div className="relative">
        <canvas ref={canvasRef} width={400} height={400} className="w-full max-w-sm mx-auto" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center"
        >
          <div className="text-xs text-gray-400">
            综合评分: <span className="text-cyber-blue font-mono">9.2/10</span>
          </div>
        </motion.div>
      </div>

      <div className="mt-6 space-y-2">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between text-sm"
          >
            <span className="text-gray-300">{skill.name}</span>
            <div className="flex items-center gap-2">
              <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.value * 10}%` }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
              <span className="text-xs font-mono w-8" style={{ color: skill.color }}>
                {skill.value}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
