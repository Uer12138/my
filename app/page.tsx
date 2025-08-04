import Link from "next/link"
import { ArrowRight, Zap, Users, Eye, Github } from "lucide-react"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-900 overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-cyan-500/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-slate-900" />
              </div>
              <span className="text-xl font-bold text-white">CYBER_SEED</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-cyan-400 text-sm">
                首页
              </Link>
              <Link href="/projects" className="text-gray-300 hover:text-white text-sm">
                项目
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white text-sm">
                关于
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white text-sm">
                联系
              </Link>
              <Link
                href="/contact"
                className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 px-4 py-2 rounded-md text-sm font-medium"
              >
                联系我
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">唐大强</h1>
              <p className="text-cyan-400 text-lg md:text-xl max-w-md mx-auto mb-6">具身智能产品落地的敏捷推手</p>
              <div className="text-sm text-gray-400 mb-8">"从零点到智能，我的具身创造之旅"</div>

              {/* Core Identity Cards */}
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-colors">
                  <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg text-white mb-2 font-semibold">敏捷试错者</h3>
                  <p className="text-gray-300 text-sm">
                    通过快速原型、小步快跑的方式验证产品构想，在试错中找到通往成功的路径
                  </p>
                </div>

                <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-colors">
                  <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg text-white mb-2 font-semibold">落地攻坚者</h3>
                  <p className="text-gray-300 text-sm">
                    将技术与需求结合，推动产品从抽象概念走向实际应用，解决落地过程中的每一个难题
                  </p>
                </div>

                <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-colors">
                  <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg text-white mb-2 font-semibold">持续迭代者</h3>
                  <p className="text-gray-300 text-sm">
                    通过用户反馈和数据分析，不断打磨产品，使其更贴近市场与用户需求
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 justify-center">
                <Link
                  href="/projects"
                  className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 px-6 py-3 rounded-md font-medium inline-flex items-center gap-2"
                >
                  探索项目 <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-400/10 px-6 py-3 rounded-md font-medium"
                >
                  了解更多
                </Link>
              </div>
            </div>

            {/* Featured Project Section */}
            <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-8 mb-12">
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                  FEATURED PROJECT
                </span>
                <span className="border border-cyan-500/50 text-cyan-400 px-3 py-1 rounded-full text-xs">具身智能</span>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">多模态智能交互小车</h2>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    校园场景AI原型开发，实现环境感知-身份识别-情感交互的完整闭环。
                    通过深度学习和计算机视觉技术，打造真正理解用户的智能伙伴。
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {["MindSpore", "ModelArts", "Python", "Jetson Nano", "OpenCV", "NLTK"].map((tech) => (
                      <span key={tech} className="bg-slate-700 text-gray-300 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <span className="text-gray-400">识别准确率</span>
                      <p className="text-cyan-400 font-bold text-lg">98.3%</p>
                    </div>
                    <div>
                      <span className="text-gray-400">响应延迟</span>
                      <p className="text-cyan-400 font-bold text-lg">180ms</p>
                    </div>
                    <div>
                      <span className="text-gray-400">用户满意度</span>
                      <p className="text-cyan-400 font-bold text-lg">4.6/5.0</p>
                    </div>
                    <div>
                      <span className="text-gray-400">连续运行</span>
                      <p className="text-cyan-400 font-bold text-lg">6小时</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Link
                      href="/projects"
                      className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 px-4 py-2 rounded-md font-medium inline-flex items-center gap-2"
                    >
                      查看详情 <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href="https://github.com/tangdaqiang/smart-interactive-car"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-400/10 px-4 py-2 rounded-md font-medium inline-flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>

                <div className="relative">
                  <div className="w-full h-64 bg-slate-700 rounded-lg border border-cyan-500/30 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-8 h-8 text-cyan-400" />
                      </div>
                      <p className="text-gray-400">智能交互小车演示</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-cyan-400/90 text-slate-900 px-3 py-1 rounded text-xs font-semibold">
                    核心项目
                  </div>
                </div>
              </div>
            </div>

            {/* Status HUD */}
            <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-cyan-400 text-sm font-semibold">SYSTEM_ACTIVE</span>
              </div>
              <div className="text-xs text-gray-400 mb-6">
                AI产品经验: 已加载 | 项目案例: 3 个就绪 | 协作状态: 开放中
              </div>
              <div className="flex gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 px-6 py-2 rounded-md font-medium"
                >
                  开始合作
                </Link>
                <Link
                  href="/projects"
                  className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-400/10 px-6 py-2 rounded-md font-medium"
                >
                  查看所有项目
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
