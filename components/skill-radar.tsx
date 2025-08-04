"use client"

import { useEffect, useRef } from "react"

const skills = [
  { name: "机器学习", value: 95 },
  { name: "机器人控制", value: 90 },
  { name: "计算机视觉", value: 88 },
  { name: "硬件集成", value: 85 },
  { name: "全栈开发", value: 92 },
  { name: "项目管理", value: 87 },
]

export function SkillRadar() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const maxRadius = Math.min(centerX, centerY) - 40

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw grid circles
    ctx.strokeStyle = "#00F5FF"
    ctx.lineWidth = 1
    ctx.globalAlpha = 0.3

    for (let i = 1; i <= 5; i++) {
      ctx.beginPath()
      ctx.arc(centerX, centerY, (maxRadius / 5) * i, 0, 2 * Math.PI)
      ctx.stroke()
    }

    // Draw grid lines
    const angleStep = (2 * Math.PI) / skills.length

    for (let i = 0; i < skills.length; i++) {
      const angle = i * angleStep - Math.PI / 2
      const x = centerX + Math.cos(angle) * maxRadius
      const y = centerY + Math.sin(angle) * maxRadius

      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(x, y)
      ctx.stroke()
    }

    // Draw skill polygon
    ctx.globalAlpha = 0.6
    ctx.fillStyle = "#FF0055"
    ctx.strokeStyle = "#FF0055"
    ctx.lineWidth = 2

    ctx.beginPath()

    for (let i = 0; i < skills.length; i++) {
      const angle = i * angleStep - Math.PI / 2
      const radius = (skills[i].value / 100) * maxRadius
      const x = centerX + Math.cos(angle) * radius
      const y = centerY + Math.sin(angle) * radius

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    }

    ctx.closePath()
    ctx.fill()
    ctx.stroke()

    // Draw skill points
    ctx.globalAlpha = 1
    ctx.fillStyle = "#00F5FF"

    for (let i = 0; i < skills.length; i++) {
      const angle = i * angleStep - Math.PI / 2
      const radius = (skills[i].value / 100) * maxRadius
      const x = centerX + Math.cos(angle) * radius
      const y = centerY + Math.sin(angle) * radius

      ctx.beginPath()
      ctx.arc(x, y, 4, 0, 2 * Math.PI)
      ctx.fill()
    }

    // Draw skill labels
    ctx.fillStyle = "#FFFFFF"
    ctx.font = "12px Inter"
    ctx.textAlign = "center"

    for (let i = 0; i < skills.length; i++) {
      const angle = i * angleStep - Math.PI / 2
      const labelRadius = maxRadius + 20
      const x = centerX + Math.cos(angle) * labelRadius
      const y = centerY + Math.sin(angle) * labelRadius

      ctx.fillText(skills[i].name, x, y + 4)
    }
  }, [])

  return (
    <div className="flex justify-center">
      <canvas ref={canvasRef} width={300} height={300} className="max-w-full h-auto" />
    </div>
  )
}
