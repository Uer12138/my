"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function SplineHand() {
  const [isGrowing, setIsGrowing] = useState(false)
  const [robotType, setRobotType] = useState<"hardware" | "software" | "ai">("hardware")
  const [showInstructions, setShowInstructions] = useState(true)

  const handleHandInteraction = (type: "drag" | "voice", command?: string) => {
    setIsGrowing(true)
    setShowInstructions(false)

    // 根据交互类型决定机器人形态
    if (type === "drag") {
      setRobotType("hardware")
    } else if (command === "抓取") {
      setRobotType("software")
    } else if (command === "移动") {
      setRobotType("ai")
    }

    // 3秒后完成生长动画
    setTimeout(() => {
      setIsGrowing(false)
    }, 3000)
  }

  return (
    <div className="w-full h-screen relative bg-gradient-to-b from-cyber-dark to-black flex items-center justify-center">
      {/* CSS-based 3D Hand */}
      <motion.div
        className="relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Mechanical Hand Visualization */}
        <div className="relative w-64 h-64">
          {/* Palm */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              rotateY: isGrowing ? 360 : 0,
              scale: isGrowing ? 1.2 : 1,
            }}
            transition={{ duration: 2, repeat: isGrowing ? Number.POSITIVE_INFINITY : 0 }}
          >
            <div className="w-32 h-40 bg-gradient-to-br from-cyber-blue/20 to-cyber-pink/20 rounded-2xl border-2 border-cyber-blue/50 backdrop-blur-sm relative">
              {/* Palm Center Sensor */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-cyber-pink rounded-full animate-pulse shadow-lg shadow-cyber-pink/50"></div>

              {/* Circuit Lines */}
              <div className="absolute inset-2">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent opacity-60"></div>
                <div className="w-px h-full bg-gradient-to-b from-transparent via-cyber-blue to-transparent opacity-60 absolute left-1/2 top-0"></div>
              </div>
            </div>
          </motion.div>

          {/* Fingers */}
          {[0, 1, 2, 3, 4].map((finger) => (
            <motion.div
              key={finger}
              className="absolute cursor-pointer"
              style={{
                left: `${20 + finger * 15}%`,
                top: finger === 0 ? "60%" : "20%",
                transform: finger === 0 ? "rotate(-30deg)" : "none",
              }}
              whileHover={{ scale: 1.1 }}
              onClick={() => handleHandInteraction("drag")}
            >
              {/* Finger segments */}
              {[0, 1, 2].map((segment) => (
                <div
                  key={segment}
                  className="w-4 h-8 bg-gradient-to-b from-cyber-blue/30 to-cyber-blue/10 border border-cyber-blue/40 rounded-sm mb-1"
                  style={{
                    height: finger === 0 && segment > 1 ? "0px" : "32px",
                    opacity: finger === 4 && segment > 1 ? 0 : 1,
                  }}
                />
              ))}
            </motion.div>
          ))}

          {/* Connecting Wires */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-8 bg-gradient-to-b from-cyber-blue/60 to-transparent"
              style={{
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 60 + 20}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>

        {/* Robot Growth Animation */}
        <AnimatePresence>
          {isGrowing && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
            >
              <div className="relative">
                {robotType === "hardware" && (
                  <div className="space-y-4">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 80 }}
                      className="w-20 bg-gradient-to-b from-cyber-blue to-cyber-pink rounded-lg mx-auto"
                    />
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: 60 }}
                      transition={{ delay: 0.5 }}
                      className="h-4 bg-cyber-blue rounded-full mx-auto"
                    />
                  </div>
                )}

                {robotType === "software" && (
                  <div className="relative">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: 0 }}
                        animate={{ scale: 1, rotate: 360 }}
                        transition={{ delay: i * 0.2, duration: 1 }}
                        className="absolute w-8 h-8 border-2 border-cyber-pink rounded-full"
                        style={{
                          left: `${Math.cos((i * 60 * Math.PI) / 180) * 40 + 40}px`,
                          top: `${Math.sin((i * 60 * Math.PI) / 180) * 40 + 40}px`,
                        }}
                      />
                    ))}
                  </div>
                )}

                {robotType === "ai" && (
                  <div className="grid grid-cols-3 gap-2">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="w-4 h-4 bg-cyber-blue rounded-full animate-pulse"
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* 交互指引 */}
      <AnimatePresence>
        {showInstructions && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center"
          >
            <div className="cyber-card p-6 max-w-md">
              <h3 className="font-orbitron text-cyber-blue text-xl mb-4">🤖 机器人生长指南</h3>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-cyber-blue rounded-full"></span>
                  <span>点击指尖节点 → 硬件机器人（金属骨骼+传感器）</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-cyber-pink rounded-full"></span>
                  <span>语音"抓取" → 软件机器人（数据流缠绕结构）</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>语音"移动" → AI机器人（神经网络可视化）</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 语音输入按钮 */}
      <div className="absolute top-20 right-8 space-y-4">
        <button onClick={() => handleHandInteraction("voice", "抓取")} className="cyber-button-voice">
          🎤 "抓取"
        </button>
        <button onClick={() => handleHandInteraction("voice", "移动")} className="cyber-button-voice">
          🎤 "移动"
        </button>
      </div>
    </div>
  )
}
