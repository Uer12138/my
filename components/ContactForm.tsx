"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    type: "interview",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 这里可以集成真实的表单提交API
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
        type: "interview",
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="cyber-card p-6">
      <h2 className="font-orbitron text-cyber-blue text-2xl mb-6">快速联系</h2>

      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8"
        >
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h3 className="text-green-400 text-xl font-semibold mb-2">消息已发送！</h3>
          <p className="text-gray-300">感谢您的联系，我会在24小时内回复您</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-cyber-pink text-sm font-semibold mb-2">姓名 *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="cyber-input"
                placeholder="您的姓名"
              />
            </div>

            <div>
              <label className="block text-cyber-pink text-sm font-semibold mb-2">邮箱 *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="cyber-input"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-cyber-pink text-sm font-semibold mb-2">公司/组织</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="cyber-input"
              placeholder="您的公司或组织"
            />
          </div>

          <div>
            <label className="block text-cyber-pink text-sm font-semibold mb-2">联系目的</label>
            <select name="type" value={formData.type} onChange={handleChange} className="cyber-input">
              <option value="interview">面试邀请</option>
              <option value="collaboration">项目合作</option>
              <option value="consultation">技术咨询</option>
              <option value="other">其他</option>
            </select>
          </div>

          <div>
            <label className="block text-cyber-pink text-sm font-semibold mb-2">消息内容 *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="cyber-input resize-none"
              placeholder="请描述您的需求或问题..."
            />
          </div>

          <button type="submit" className="cyber-button-primary w-full flex items-center justify-center gap-2">
            <Send className="w-4 h-4" />
            发送消息
          </button>
        </form>
      )}
    </div>
  )
}
