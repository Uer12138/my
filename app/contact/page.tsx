import { Navigation } from "@/components/navigation"
import { Calendar, MessageCircle, Mail, MapPin, GitlabIcon as GitHub, Phone, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <div className="min-h-screen bg-cyber-dark">
      <Navigation />

      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-oxanium text-4xl md:text-6xl font-bold text-white mb-4">CONNECT_PROTOCOL</h1>
            <p className="text-cyber-blue text-xl font-inter">探索具身智能的无限可能</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="cyber-panel p-8">
              <h2 className="font-oxanium text-xl text-white mb-6 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-cyber-blue" />
                发送消息
              </h2>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    姓名 *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    className="bg-black/50 border-cyber-blue/30 text-white focus:border-cyber-blue"
                    placeholder="您的姓名"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    邮箱 *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="bg-black/50 border-cyber-blue/30 text-white focus:border-cyber-blue"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    公司/组织
                  </label>
                  <Input
                    id="company"
                    type="text"
                    className="bg-black/50 border-cyber-blue/30 text-white focus:border-cyber-blue"
                    placeholder="您的公司或组织（可选）"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    主题 *
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    required
                    className="bg-black/50 border-cyber-blue/30 text-white focus:border-cyber-blue"
                    placeholder="邮件主题"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    消息内容 *
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    required
                    className="bg-black/50 border-cyber-blue/30 text-white focus:border-cyber-blue"
                    placeholder="请描述您的项目需求、合作意向或想要讨论的技术问题..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-cyber-blue hover:bg-cyber-blue/80 text-cyber-dark font-oxanium"
                >
                  发送消息
                </Button>
              </form>

              <div className="mt-6 text-xs text-gray-400 font-inter">* 必填字段。我通常在2小时内回复邮件。</div>
            </div>

            {/* Contact Info & Quick Actions */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <div className="cyber-panel p-6">
                <h2 className="font-oxanium text-xl text-white mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-cyber-pink" />
                  预约面试
                </h2>

                <p className="text-gray-300 mb-4 font-inter">
                  直接预约 30 分钟技术交流，深入讨论具身智能项目合作机会。
                </p>

                <Button className="w-full bg-cyber-pink hover:bg-cyber-pink/80 text-white font-oxanium mb-6">
                  预约日历时间
                </Button>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-cyber-blue" />
                    <a
                      href="mailto:1627518646@qq.com"
                      className="text-gray-300 hover:text-cyber-blue transition-colors"
                    >
                      1627518646@qq.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-4 h-4 text-cyber-blue" />
                    <span className="text-gray-300">微信: cyber-seed-ai</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-cyber-blue" />
                    <span className="text-gray-300">电话: +86 138-xxxx-xxxx</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-cyber-blue" />
                    <span className="text-gray-300">西安 / 远程工作</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <GitHub className="w-4 h-4 text-cyber-blue" />
                    <a
                      href="https://github.com/tangdaqiang/tangdaqiang.github.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-cyber-blue transition-colors"
                    >
                      tangdaqiang.github.io
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-cyber-blue" />
                    <a
                      href="https://linkedin.com/in/tangdaqiang"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-cyber-blue transition-colors"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>

              {/* WeChat QR Code */}
              <div className="cyber-panel p-6 text-center">
                <h3 className="font-oxanium text-lg text-white mb-4">微信二维码</h3>

                <div className="inline-block p-4 bg-white rounded-lg mb-4">
                  <img
                    src="/placeholder.svg?height=150&width=150&text=WeChat+QR"
                    alt="WeChat QR Code"
                    className="w-32 h-32"
                  />
                </div>

                <p className="text-sm text-gray-400 font-inter">扫码添加微信，获取更多项目详情</p>
              </div>

              {/* Response Time & Availability */}
              <div className="cyber-panel p-4">
                <h3 className="font-oxanium text-lg text-white mb-3">响应时间</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">邮件回复</span>
                    <span className="text-cyber-blue">{"< 2 小时"}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">微信回复</span>
                    <span className="text-cyber-blue">{"< 30 分钟"}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">工作时间</span>
                    <span className="text-cyber-blue">9:00 - 21:00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">时区</span>
                    <span className="text-cyber-blue">GMT+8 (北京)</span>
                  </div>
                </div>
              </div>

              {/* Resume Download */}
              <div className="cyber-panel p-6 text-center">
                <h3 className="font-oxanium text-lg text-white mb-4">简历下载</h3>
                <p className="text-gray-300 text-sm mb-4 font-inter">下载我的完整简历，了解更多项目经验和技术背景。</p>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 border-cyber-blue/50 text-cyber-blue hover:bg-cyber-blue/10 bg-transparent"
                  >
                    中文简历
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-cyber-blue/50 text-cyber-blue hover:bg-cyber-blue/10 bg-transparent"
                  >
                    English CV
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="cyber-panel p-8 mt-12">
            <h2 className="font-oxanium text-2xl text-white mb-6">常见问题</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-cyber-blue font-medium mb-2">我在寻找什么样的机会？</h3>
                <p className="text-gray-300 text-sm font-inter mb-4">
                  我正在寻找AI产品经理、具身智能研发、或相关的实习和全职机会。特别感兴趣于将AI技术转化为实际产品的岗位。
                </p>
              </div>
              <div>
                <h3 className="text-cyber-blue font-medium mb-2">我可以提供什么帮助？</h3>
                <p className="text-gray-300 text-sm font-inter mb-4">
                  产品需求分析、技术方案设计、项目管理咨询、具身智能技术讨论，以及相关的学术或商业合作。
                </p>
              </div>
              <div>
                <h3 className="text-cyber-blue font-medium mb-2">合作方式有哪些？</h3>
                <p className="text-gray-300 text-sm font-inter mb-4">
                  全职工作、实习机会、项目合作、技术咨询、学术交流等多种形式。我对远程工作和现场工作都很开放。
                </p>
              </div>
              <div>
                <h3 className="text-cyber-blue font-medium mb-2">响应时间如何？</h3>
                <p className="text-gray-300 text-sm font-inter mb-4">
                  我通常在2小时内回复邮件，30分钟内回复微信消息。对于紧急项目讨论，可以安排即时通话。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
