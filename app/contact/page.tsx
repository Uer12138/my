import { Calendar, MessageCircle, Mail, MapPin, GitlabIcon as GitHub } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <div className="min-h-screen bg-cyber-dark">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-orbitron text-4xl md:text-6xl font-bold text-white mb-4">CONNECT_PROTOCOL</h1>
            <p className="text-cyber-blue text-xl">探索具身智能的无限可能</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="cyber-panel p-8">
              <h2 className="font-orbitron text-xl text-white mb-6 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-cyber-blue" />
                发送消息
              </h2>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    姓名
                  </label>
                  <Input
                    id="name"
                    type="text"
                    className="bg-black/50 border-cyber-blue/30 text-white focus:border-cyber-blue"
                    placeholder="您的姓名"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    邮箱
                  </label>
                  <Input
                    id="email"
                    type="email"
                    className="bg-black/50 border-cyber-blue/30 text-white focus:border-cyber-blue"
                    placeholder="1627518646@qq.com"
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
                    placeholder="您的公司或组织"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    消息内容
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
                    className="bg-black/50 border-cyber-blue/30 text-white focus:border-cyber-blue"
                    placeholder="请描述您的项目需求或合作意向..."
                  />
                </div>

                <Button className="w-full bg-cyber-blue hover:bg-cyber-blue/80">发送消息</Button>
              </form>
            </div>

            {/* Contact Info & Calendar */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <div className="cyber-panel p-6">
                <h2 className="font-orbitron text-xl text-white mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-cyber-pink" />
                  预约面试
                </h2>

                <p className="text-gray-300 mb-4">直接预约 30 分钟技术交流，深入讨论具身智能项目合作</p>

                <Button className="w-full bg-cyber-pink hover:bg-cyber-pink/80 mb-4">预约日历时间</Button>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-cyber-blue" />
                    <span className="text-gray-300">1627518646@qq.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-4 h-4 text-cyber-blue" />
                    <span className="text-gray-300">微信: cyber-seed-ai</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-cyber-blue" />
                    <span className="text-gray-300">西安 / 远程</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <GitHub className="w-4 h-4 text-cyber-blue" />
                    <span className="text-gray-300">
                      GitHub:{" "}
                      <a
                        href="https://github.com/tangdaqiang/tangdaqiang.github.io"
                        className="text-cyber-blue hover:underline"
                      >
                        tangdaqiang.github.io
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              {/* WeChat QR Code */}
              <div className="cyber-panel p-6 text-center">
                <h3 className="font-orbitron text-lg text-white mb-4">微信二维码</h3>

                <div className="inline-block p-4 bg-white rounded-lg">
                  <img
                    src="/placeholder.svg?height=150&width=150&text=WeChat+QR"
                    alt="WeChat QR Code"
                    className="w-32 h-32"
                  />
                </div>

                <p className="text-sm text-gray-400 mt-3">扫码添加微信，获取更多项目详情</p>
              </div>

              {/* Response Time */}
              <div className="cyber-panel p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">平均响应时间</span>
                  <span className="text-cyber-blue">{"< 2 小时"}</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-gray-400">工作时间</span>
                  <span className="text-cyber-blue">9:00 - 21:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
