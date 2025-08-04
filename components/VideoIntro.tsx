"use client"

import { useState } from "react"
import { Play, Pause } from "lucide-react"

export default function VideoIntro() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="cyber-card p-6">
      <h2 className="font-orbitron text-cyber-blue text-2xl mb-4">60秒自我介绍</h2>

      <div className="relative aspect-video bg-gradient-to-br from-cyber-dark to-black rounded-lg overflow-hidden mb-4">
        {/* 视频占位符 - 实际项目中替换为真实视频 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 bg-cyber-blue/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              {isPlaying ? (
                <Pause className="w-8 h-8 text-cyber-blue" />
              ) : (
                <Play className="w-8 h-8 text-cyber-blue ml-1" />
              )}
            </div>
            <p className="text-gray-300 text-sm">点击播放自我介绍视频</p>
          </div>
        </div>

        {/* 赛博风格装饰 */}
        <div className="absolute top-4 left-4 right-4 h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent opacity-50"></div>
        <div className="absolute bottom-4 left-4 right-4 h-px bg-gradient-to-r from-transparent via-cyber-pink to-transparent opacity-50"></div>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute inset-0 w-full h-full bg-transparent hover:bg-cyber-blue/10 transition-colors"
        />
      </div>

      <div className="space-y-3 text-sm text-gray-300">
        <p className="font-semibold text-cyber-blue">视频脚本预览：</p>
        <p>
          "Hi，我是唐大强，专注智能科学与技术领域，深耕AI技术落地与产品化实践。
          在校期间主导的智能小车设计及AI开发实验是我的代表性项目..."
        </p>
        <div className="flex items-center gap-2 text-xs text-cyber-pink">
          <span className="w-2 h-2 bg-cyber-pink rounded-full"></span>
          <span>竖屏 1080×1920 | 字幕内嵌 | 赛博风格</span>
        </div>
      </div>
    </div>
  )
}
