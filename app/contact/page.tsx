import ContactForm from "@/components/ContactForm"
import WeChatQR from "@/components/WeChatQR"
import CalendarBooking from "@/components/CalendarBooking"

export const metadata = {
  title: "联系我 | 唐大强 - 具身智能0→1破局者",
  description: "预约面试或技术交流。联系方式：13259800871，邮箱：1627518646@qq.com",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-cyber-dark">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-orbitron text-4xl md:text-6xl font-bold text-cyber-blue mb-8 text-center">联系我</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <CalendarBooking />
              <ContactForm />
            </div>

            <div className="space-y-8">
              <WeChatQR />

              {/* 联系信息 */}
              <div className="cyber-card p-6">
                <h2 className="font-orbitron text-cyber-blue text-2xl mb-6">联系方式</h2>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-cyber-blue/20 rounded-full flex items-center justify-center">
                      <span className="text-cyber-blue">📱</span>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">手机</div>
                      <div className="text-white font-mono">13259800871</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-cyber-pink/20 rounded-full flex items-center justify-center">
                      <span className="text-cyber-pink">📧</span>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">邮箱</div>
                      <div className="text-white font-mono">1627518646@qq.com</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-400/20 rounded-full flex items-center justify-center">
                      <span className="text-green-400">🌐</span>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">网站</div>
                      <div className="text-white font-mono">cyber-seed.dev</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 响应时间 */}
              <div className="cyber-card p-6">
                <h3 className="font-orbitron text-cyber-blue text-xl mb-4">响应时间</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">邮件回复</span>
                    <span className="text-cyber-blue">24小时内</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">微信回复</span>
                    <span className="text-cyber-blue">2小时内</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">面试预约</span>
                    <span className="text-cyber-blue">即时确认</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
