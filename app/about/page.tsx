import Link from "next/link"
import { Play, Download, Zap, Users, Eye, Award, GraduationCap } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">NEURAL_PROFILE</h1>
            <p className="text-cyan-400 text-xl">具身智能产品落地的敏捷推手</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Personal Introduction */}
            <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6">
              <h2 className="text-xl text-white mb-4 flex items-center gap-2 font-semibold">
                <Play className="w-5 h-5 text-cyan-400" />
                我的故事
              </h2>

              <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
                <p>
                  我叫<span className="text-cyan-400 font-medium">唐大强</span>。
                  在西安邮电大学智能科学与技术专业的学习中，我不仅沉浸于 AI 技术理论，
                  更对如何将冰冷的代码赋予"身体"和"灵魂"充满好奇。
                </p>

                <p>
                  这促使我主动参与跨学科的 AI 产品研讨会，并在课程设计中选择了具身智能场景原型项目。
                  我发现自己天生热爱创造，享受从一个想法、一个概念，通过不断的打磨与迭代，
                  最终变成一个可以被触碰、被交互的智能工具的过程。
                </p>

                <div className="bg-slate-700/50 p-4 rounded-lg border border-cyan-500/30">
                  <p className="text-cyan-400 font-medium text-center">
                    "让机器人从实验室走向现实，让AI从虚拟走向具身。"
                  </p>
                </div>

                <p>
                  在多模态智能交互小车项目中，我担任产品经理和项目协调者，
                  成功将团队的技术能力转化为用户价值，项目最终获得了98.3%的性能指标和4.6/5.0的用户满意度。
                </p>
              </div>

              <button className="w-full mt-6 bg-cyan-400 hover:bg-cyan-500 text-slate-900 px-4 py-2 rounded-md font-medium flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                下载完整简历
              </button>
            </div>

            {/* Skills */}
            <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6">
              <h2 className="text-xl text-white mb-6 font-semibold">核心技能</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">AI 产品管理</span>
                  <span className="text-cyan-400">90%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">具身智能（理论）</span>
                  <span className="text-cyan-400">85%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">用户研究与分析</span>
                  <span className="text-cyan-400">80%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">产品原型与线框图</span>
                  <span className="text-cyan-400">85%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">敏捷项目管理</span>
                  <span className="text-cyan-400">80%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">跨学科团队协作</span>
                  <span className="text-cyan-400">95%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Methodology Section */}
          <div className="mt-12 bg-slate-800/50 border border-cyan-500/30 rounded-lg p-8">
            <h2 className="text-2xl text-white mb-6 font-bold">我的理念与方法论</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg text-white mb-2 font-semibold">敏捷试错者</h3>
                <p className="text-gray-300 text-sm">
                  通过快速原型、小步快跑的方式验证产品构想，在试错中找到通往成功的路径
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg text-white mb-2 font-semibold">落地攻坚者</h3>
                <p className="text-gray-300 text-sm">
                  将技术与需求结合，推动产品从抽象概念走向实际应用，解决落地过程中的每一个难题
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg text-white mb-2 font-semibold">持续迭代者</h3>
                <p className="text-gray-300 text-sm">通过用户反馈和数据分析，不断打磨产品，使其更贴近市场与用户需求</p>
              </div>
            </div>

            <div className="text-gray-300 leading-relaxed">
              <p className="mb-4">
                我坚信优秀的产品经理是技术的理解者和人性的洞察者。我通过 "敏捷试错" 快速验证想法， 用 "落地攻坚"
                确保产品质量，再以 "持续迭代" 优化用户体验，形成一个完整的创造闭环。
              </p>

              <p>
                例如，在多模态智能交互小车项目中，我将一个模糊的"智能服务"概念，分解为多个可快速验证的子功能，
                每完成一个就进行团队内部复盘，确保每一步都走在正确的方向上。最终实现了从78%到98.3%的识别准确率提升。
              </p>
            </div>
          </div>

          {/* Education & Achievements */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Education */}
            <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6">
              <h2 className="text-xl text-white mb-4 flex items-center gap-2 font-semibold">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                教育背景
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">西安邮电大学</h3>
                    <p className="text-gray-400 text-sm">智能科学与技术专业</p>
                    <p className="text-gray-400 text-xs">核心课程：机器学习、计算机视觉、机器人学、人工智能</p>
                  </div>
                  <div className="text-right">
                    <p className="text-cyan-400 font-semibold">2026届</p>
                    <p className="text-gray-400 text-sm">应届毕业生</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6">
              <h2 className="text-xl text-white mb-4 flex items-center gap-2 font-semibold">
                <Award className="w-5 h-5 text-cyan-400" />
                项目成就
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">多模态智能交互小车</span>
                  <span className="text-cyan-400">98.3% 准确率</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">用户满意度评分</span>
                  <span className="text-cyan-400">4.6/5.0</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">项目按时完成率</span>
                  <span className="text-cyan-400">100%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">团队协作满意度</span>
                  <span className="text-cyan-400">4.8/5.0</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">性能优化提升</span>
                  <span className="text-cyan-400">64%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
