import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, FileText, Zap, Users, Eye, TrendingUp } from "lucide-react"

// 项目详情数据
const projectData = {
  "smart-interactive-car": {
    title: "多模态智能交互小车",
    tagline: "校园场景AI原型开发，实现环境感知-身份识别-情感交互",
    cover: "/placeholder.svg?height=400&width=800&text=Smart+Interactive+Car+Detail",
    category: "具身智能",
    duration: "4个月",
    team: "3人团队",
    role: "产品经理 & 项目协调",
    kpi: "98.3%",
    github: "https://github.com/tangdaqiang/smart-interactive-car",
    pdf: "/assets/project-smart-car.pdf",
    techStack: ["MindSpore", "ModelArts", "Python", "Jetson Nano", "OpenCV", "NLTK", "ROS2", "PyTorch"],

    overview: `
      多模态智能交互小车是我主导的第一个完整的具身智能项目。这个项目的核心目标是创造一个能够在校园环境中自主导航、识别用户身份并进行情感化交互的智能机器人。

      项目从概念设计到最终实现，历时4个月，涉及计算机视觉、自然语言处理、机器人控制等多个技术领域。最终实现的系统不仅在技术指标上达到了预期目标，更重要的是在用户体验方面获得了显著的成功。
    `,

    challenges: [
      {
        title: "算力限制下的实时性能优化",
        description: "在Jetson Nano有限的算力下，如何实现多模态数据的实时处理",
        solution: "通过模型量化、动态调度和边缘优化，将响应延迟从500ms降至180ms",
        impact: "性能提升64%，用户体验显著改善",
      },
      {
        title: "多光线环境下的人脸识别准确率",
        description: "校园环境光线变化复杂，传统人脸识别模型准确率不稳定",
        solution: "构建多光线样本数据集，采用数据增强和迁移学习技术",
        impact: "识别准确率从78%提升至98.3%",
      },
      {
        title: "跨学科团队的协作效率",
        description: "算法、硬件、产品三个不同背景的团队成员协作困难",
        solution: "建立统一的沟通语言和敏捷开发流程",
        impact: "项目按时完成，团队满意度4.8/5.0",
      },
    ],

    features: [
      {
        icon: Eye,
        title: "智能视觉感知",
        description: "基于深度学习的多目标检测和跟踪，实现环境理解和用户识别",
      },
      {
        icon: Users,
        title: "情感化交互",
        description: "通过语音识别和情感分析，提供个性化的交互体验",
      },
      {
        icon: Zap,
        title: "自主导航",
        description: "结合SLAM技术和路径规划，实现校园环境的自主移动",
      },
      {
        icon: TrendingUp,
        title: "学习适应",
        description: "通过用户行为分析，不断优化交互策略和服务质量",
      },
    ],

    results: [
      { metric: "识别准确率", value: "98.3%", description: "在多种光线条件下的人脸识别准确率" },
      { metric: "响应延迟", value: "180ms", description: "从感知到反应的端到端延迟" },
      { metric: "用户满意度", value: "4.6/5.0", description: "基于50名用户的体验评分" },
      { metric: "连续运行", value: "6小时", description: "单次充电的最长连续工作时间" },
    ],

    learnings: `
      这个项目让我深刻理解了具身智能产品开发的复杂性。技术实现只是第一步，更重要的是如何将技术转化为用户价值。

      通过这个项目，我学会了：
      1. 如何在技术约束下寻找最优解决方案
      2. 跨学科团队协作的重要性和方法
      3. 用户体验在技术产品中的核心地位
      4. 敏捷开发在AI项目中的实际应用

      这些经验为我后续的产品管理工作奠定了坚实的基础。
    `,
  },
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projectData[params.slug as keyof typeof projectData]

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="min-h-screen bg-cyber-dark">
      <Navigation />

      {/* Background */}
      <div className="absolute inset-0 bg-data-flow-pattern opacity-10" />

      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button
            asChild
            variant="outline"
            className="mb-8 border-cyber-blue/50 text-cyber-blue hover:bg-cyber-blue/10 bg-transparent"
          >
            <Link href="/projects">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回项目列表
            </Link>
          </Button>

          {/* Project Header */}
          <div className="cyber-panel p-8 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-cyber-blue text-cyber-dark font-oxanium">FEATURED</Badge>
              <Badge variant="outline" className="border-cyber-blue/50 text-cyber-blue">
                {project.category}
              </Badge>
            </div>

            <h1 className="font-oxanium text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h1>
            <p className="text-gray-300 text-lg mb-6 font-inter">{project.tagline}</p>

            <div className="grid md:grid-cols-4 gap-4 mb-6 text-sm">
              <div>
                <span className="text-gray-400">项目周期</span>
                <p className="text-white font-medium">{project.duration}</p>
              </div>
              <div>
                <span className="text-gray-400">团队规模</span>
                <p className="text-white font-medium">{project.team}</p>
              </div>
              <div>
                <span className="text-gray-400">我的角色</span>
                <p className="text-white font-medium">{project.role}</p>
              </div>
              <div>
                <span className="text-gray-400">核心指标</span>
                <p className="text-cyber-blue font-medium">{project.kpi}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Button asChild className="bg-cyber-blue hover:bg-cyber-blue/80 text-cyber-dark font-oxanium">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  查看代码
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-cyber-pink text-cyber-pink hover:bg-cyber-pink/10 bg-transparent"
              >
                <a href={project.pdf} target="_blank" rel="noopener noreferrer">
                  <FileText className="w-4 h-4 mr-2" />
                  详细文档
                </a>
              </Button>
            </div>
          </div>

          {/* Project Image */}
          <div className="cyber-panel p-4 mb-8">
            <img
              src={project.cover || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>

          {/* Tech Stack */}
          <div className="cyber-panel p-6 mb-8">
            <h2 className="font-oxanium text-xl text-white mb-4">技术栈</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Project Overview */}
          <div className="cyber-panel p-6 mb-8">
            <h2 className="font-oxanium text-xl text-white mb-4">项目概述</h2>
            <div className="text-gray-300 font-inter leading-relaxed whitespace-pre-line">{project.overview}</div>
          </div>

          {/* Key Features */}
          <div className="cyber-panel p-6 mb-8">
            <h2 className="font-oxanium text-xl text-white mb-6">核心功能</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-cyber-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-cyber-blue" />
                    </div>
                    <div>
                      <h3 className="font-oxanium text-lg text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300 text-sm font-inter">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div className="cyber-panel p-6 mb-8">
            <h2 className="font-oxanium text-xl text-white mb-6">挑战与解决方案</h2>
            <div className="space-y-6">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="border border-gray-700 rounded-lg p-4">
                  <h3 className="font-oxanium text-lg text-white mb-2">{challenge.title}</h3>
                  <p className="text-gray-400 text-sm mb-3 font-inter">{challenge.description}</p>
                  <div className="bg-cyber-dark/50 p-3 rounded mb-2">
                    <span className="text-cyber-blue text-sm font-medium">解决方案：</span>
                    <p className="text-gray-300 text-sm font-inter">{challenge.solution}</p>
                  </div>
                  <div className="text-cyber-pink text-sm font-medium">成果：{challenge.impact}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="cyber-panel p-6 mb-8">
            <h2 className="font-oxanium text-xl text-white mb-6">项目成果</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.results.map((result, index) => (
                <div key={index} className="bg-cyber-dark/50 p-4 rounded-lg border border-cyber-blue/30">
                  <div className="text-2xl font-bold text-cyber-blue font-oxanium mb-1">{result.value}</div>
                  <div className="text-white font-medium mb-1">{result.metric}</div>
                  <div className="text-gray-400 text-sm font-inter">{result.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Learnings */}
          <div className="cyber-panel p-6 mb-8">
            <h2 className="font-oxanium text-xl text-white mb-4">项目反思</h2>
            <div className="text-gray-300 font-inter leading-relaxed whitespace-pre-line">{project.learnings}</div>
          </div>

          {/* Call to Action */}
          <div className="cyber-panel p-6 text-center">
            <h3 className="font-oxanium text-lg text-white mb-4">对这个项目感兴趣？</h3>
            <p className="text-gray-300 text-sm mb-6 font-inter">我很乐意与您分享更多技术细节和项目经验。</p>
            <div className="flex gap-4 justify-center">
              <Button asChild className="bg-cyber-blue hover:bg-cyber-blue/80 text-cyber-dark font-oxanium">
                <Link href="/contact">联系讨论</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-cyber-blue/50 text-cyber-blue hover:bg-cyber-blue/10 bg-transparent"
              >
                <Link href="/projects">更多项目</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
