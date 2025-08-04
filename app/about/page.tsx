import { SkillRadar } from "@/components/skill-radar"
import { Button } from "@/components/ui/button"
import { Play, Download, Zap, Users, Eye } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen bg-cyber-dark">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-data-flow-pattern opacity-10" />

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-oxanium text-4xl md:text-6xl font-bold text-white mb-4">NEURAL_PROFILE</h1>
            <p className="text-cyber-blue text-xl font-inter">具身智能产品落地的敏捷推手</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Personal Introduction */}
            <div className="cyber-panel p-6">
              <h2 className="font-oxanium text-xl text-white mb-4 flex items-center gap-2">
                <Play className="w-5 h-5 text-cyber-blue" />
                我的故事
              </h2>

              <div className="space-y-4 text-sm text-gray-300 font-inter leading-relaxed">
                <p>
                  我叫<span className="text-cyber-blue font-medium">唐大强</span>。
                  在西安邮电大学智能科学与技术专业的学习中，我不仅沉浸于 AI 技术理论，
                  更对如何将冰冷的代码赋予"身体"和"灵魂"充满好奇。
                </p>

                <p>
                  这促使我主动参与跨学科的 AI 产品研讨会，并在课程设计中选择了具身智能场景原型项目。
                  我发现自己天生热爱创造，享受从一个想法、一个概念，通过不断的打磨与迭代，
                  最终变成一个可以被触碰、被交互的智能工具的过程。
                </p>

                <div className="bg-cyber-dark/50 p-4 rounded-lg border border-cyber-blue/30">
                  <p className="text-cyber-blue font-medium text-center">
                    "让机器人从实验室走向现实，让AI从虚拟走向具身。"
                  </p>
                </div>
              </div>

              <Button className="w-full mt-6 bg-cyber-blue hover:bg-cyber-blue/80 text-cyber-dark font-oxanium">
                <Download className="w-4 h-4 mr-2" />
                下载完整简历
              </Button>
            </div>

            {/* Skills Radar */}
            <div className="cyber-panel p-6">
              <h2 className="font-oxanium text-xl text-white mb-6">技能雷达图</h2>
              <SkillRadar />

              <div className="mt-6 space-y-2 text-sm font-inter">
                <div className="flex justify-between">
                  <span className="text-gray-400">AI 产品管理</span>
                  <span className="text-cyber-blue">90%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">具身智能（理论）</span>
                  <span className="text-cyber-blue">85%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">用户研究与分析</span>
                  <span className="text-cyber-blue">80%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">产品原型与线框图</span>
                  <span className="text-cyber-blue">85%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">敏捷项目管理</span>
                  <span className="text-cyber-blue">80%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">跨学科团队协作</span>
                  <span className="text-cyber-blue">95%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Methodology Section */}
          <div className="mt-12 cyber-panel p-8">
            <h2 className="font-oxanium text-2xl text-white mb-6">我的理念与方法论</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyber-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-cyber-blue" />
                </div>
                <h3 className="font-oxanium text-lg text-white mb-2">敏捷试错者</h3>
                <p className="text-gray-300 text-sm font-inter">
                  通过快速原型、小步快跑的方式验证产品构想，在试错中找到通往成功的路径
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cyber-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-cyber-blue" />
                </div>
                <h3 className="font-oxanium text-lg text-white mb-2">落地攻坚者</h3>
                <p className="text-gray-300 text-sm font-inter">
                  将技术与需求结合，推动产品从抽象概念走向实际应用，解决落地过程中的每一个难题
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cyber-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-cyber-blue" />
                </div>
                <h3 className="font-oxanium text-lg text-white mb-2">持续迭代者</h3>
                <p className="text-gray-300 text-sm font-inter">
                  通过用户反馈和数据分析，不断打磨产品，使其更贴近市场与用户需求
                </p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none font-inter">
              <p className="text-gray-300 leading-relaxed">
                我坚信优秀的产品经理是技术的理解者和人性的洞察者。我通过 "敏捷试错" 快速验证想法， 用 "落地攻坚"
                确保产品质量，再以 "持续迭代" 优化用户体验，形成一个完整的创造闭环。
              </p>

              <p className="text-gray-300 leading-relaxed">
                例如，在项目中，我将一个模糊的"智能服务"概念，分解为多个可快速验证的子功能，
                每完成一个就进行团队内部复盘，确保每一步都走在正确的方向上。
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="mt-8 cyber-panel p-6">
            <h2 className="font-oxanium text-xl text-white mb-4">教育背景</h2>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white font-medium">西安邮电大学</h3>
                <p className="text-gray-400 text-sm">智能科学与技术专业</p>
              </div>
              <div className="text-right">
                <p className="text-cyber-blue font-oxanium">2026届</p>
                <p className="text-gray-400 text-sm">应届毕业生</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
