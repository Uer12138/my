"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

export default function HeroSection() {
  return (
    <div className="absolute top-0 left-0 w-full h-screen z-10 pointer-events-none">
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-2xl"
        >
          <h1 className="font-orbitron text-4xl md:text-6xl font-bold text-cyber-blue mb-4 leading-tight">
            🧠 具身智能
            <br />
            <span className="text-cyber-pink">0→1 破局者</span>
          </h1>

          <div className="text-xl md:text-2xl text-cyber-blue/80 mb-6 h-16">
            <TypeAnimation
              sequence={[
                "用3D交互+轻量化技术",
                2000,
                "让具身智能原型落地效率提升50%",
                2000,
                "手心里长出的机器人",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-gray-300 text-lg mb-8 leading-relaxed"
          >
            我是<span className="text-cyber-blue font-semibold">唐大强</span>，专注智能科学与技术领域，
            深耕AI技术落地与产品化实践。基于MindSpore框架与华为云ModelArts平台，
            实现计算机视觉、自然语言处理的跨场景智能应用。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="flex flex-col sm:flex-row gap-4 pointer-events-auto"
          >
            <button className="cyber-button-primary">拖拽机械掌 → 生成机器人</button>
            <button className="cyber-button-secondary">语音指令："抓取"</button>
          </motion.div>
        </motion.div>

        {/* 个人标签浮动显示 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute bottom-8 right-8 text-right text-sm text-cyber-blue/60 pointer-events-auto"
        >
          <div className="space-y-1">
            <div>♑ 摩羯座 | ISFP 艺术家人格</div>
            <div>📱 13259800871</div>
            <div>📧 1627518646@qq.com</div>
            <div className="text-cyber-pink">🥟 饺子爱好者 | 🪁 社交达人</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
