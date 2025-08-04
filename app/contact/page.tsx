import Link from "next/link"
import { Calendar, MessageCircle, Mail, MapPin, Github, Phone } from "lucide-react"

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-cyan-500/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center">
                <span className="text-slate-900 font-bold">T</span>
              </div>
              <span className="text-xl font-bold text-white">CYBER_SEED</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-300 hover:text-white text-sm">
                首页
              </Link>
              <Link href="/projects" className="text-gray-300 hover:text-white text-sm">
                项目
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white text-sm">
                关于
              </Link>
              <Link href="/contact" className="text-cyan-400 text-sm">
                联系
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">CONNECT_PROTOCOL</h1>
            <p className="text-cyan-400 text-xl">探索具身智能的无限可能</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-8">
              <h2 className="text-xl text-white mb-6 flex items-center gap-2 font-semibold">
                <MessageCircle className="w-5 h-5 text-cyan-400" />
                发送消息
              </h2>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    姓名 *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full px-4 py-2 bg-slate-700 border border-cyan-500/30 rounded-md text-white focus:border-cyan-400 focus:outline-none"
                    placeholder="您的姓名"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    邮箱 *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full px-4 py-2 bg-slate-700 border border-cyan-500/30 rounded-md text-white focus:border-cyan-400 focus:outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    公司/组织
                  </label>
                  <input
                    id="company"
                    type="text"
                    className="w-full px-4 py-2 bg-slate-700 border border-cyan-500/30 rounded-md text-white focus:border-cyan-400 focus:outline-none"
                    placeholder="您的公司或组织（可选）"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    主题 *
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    className="w-full px-4 py-2 bg-slate-700 border border-cyan-500/30 rounded-md text-white focus:border-cyan-400 focus:outline-none"
                    placeholder="邮件主题"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    消息内容 *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full px-4 py-2 bg-slate-700 border border-cyan-500/30 rounded-md text-white focus:border-cyan-400 focus:outline-none"
                    placeholder="请描述您的项目需求、合作意向或想要讨论的技术问题..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyan-400 hover:bg-cyan-500 text-slate-900 px-4 py-2 rounded-md font-medium"
                >
                  发送消息
                </button>
              </form>

              <div className="mt-6 text-xs text-gray-400">* 必填字段。我通常在2小时内回复邮件。</div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6">
                <h2 className="text-xl text-white mb-4 flex items-center gap-2 font-semibold">
                  <Calendar className="w-5 h-5 text-pink-400" />
                  预约面试
                </h2>

                <p className="text-gray-300 mb-4">直接预约 30 分钟技术交流，深入讨论具身智能项目合作机会。</p>

                <button className="w-full bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md font-medium mb-6">
                  预约日历时间
                </button>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <a href="mailto:1627518646@qq.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                      1627518646@qq.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300">微信: cyber-seed-ai</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300">电话: +86 138-xxxx-xxxx</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300">西安 / 远程工作</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-cyan-400" />
                    <a
                      href="https://github.com/tangdaqiang/tangdaqiang.github.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      tangdaqiang.github.io
                    </a>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-4">
                <h3 className="text-lg text-white mb-3 font-semibold">响应时间</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">邮件回复</span>
                    <span className="text-cyan-400">{"< 2 小时"}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">微信回复</span>
                    <span className="text-cyan-400">{"< 30 分钟"}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">工作时间</span>
                    <span className="text-cyan-400">9:00 - 21:00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">时区</span>
                    <span className="text-cyan-400">GMT+8 (北京)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
