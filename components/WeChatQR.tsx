"use client"

import { motion } from "framer-motion"

export default function WeChatQR() {
  return (
    <div className="cyber-card p-6">
      <h2 className="font-orbitron text-cyber-blue text-2xl mb-6 text-center">微信联系</h2>

      <div className="relative">
        {/* 赛博风格边框装饰 */}
        <div className="absolute -inset-4 bg-gradient-to-r from-cyber-blue via-cyber-pink to-cyber-blue opacity-20 blur-lg rounded-lg"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative bg-white p-4 rounded-lg mx-auto w-fit"
        >
          {/* 二维码占位符 - 实际项目中替换为真实二维码 */}
          <div className="w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-300 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-600">
              <div className="text-4xl mb-2">📱</div>
              <div className="text-sm font-semibold">微信二维码</div>
              <div className="text-xs mt-1">扫码添加好友</div>
            </div>
          </div>

          {/* 机械掌剪影背景 */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="w-full h-full bg-gradient-to-br from-cyber-blue to-cyber-pink rounded-lg"></div>
          </div>
        </motion.div>

        {/* 电蓝霓虹边框 */}
        <div className="absolute inset-0 border-2 border-cyber-blue rounded-lg opacity-50 animate-pulse"></div>
      </div>

      <div className="text-center mt-6 space-y-2">
        <p className="text-gray-300 text-sm">扫码添加微信，获取更多项目详情</p>
        <div className="flex items-center justify-center gap-2 text-xs text-cyber-blue">
          <span className="w-2 h-2 bg-cyber-blue rounded-full animate-pulse"></span>
          <span>通常2小时内回复</span>
        </div>
      </div>
    </div>
  )
}
