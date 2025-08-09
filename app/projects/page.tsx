import Link from "next/link"
import { Github } from "lucide-react"

const projects = [
  {
    id: "smart-interactive-car",
    title: "多模态智能交互小车",
    tagline: "校园场景AI原型开发，实现环境感知-身份识别-情感交互",
    github: "https://github.com/tangdaqiang/smart-interactive-car",
    kpi: 98,
    techStack: ["MindSpore", "ModelArts", "Python", "Jetson Nano", "OpenCV", "NLTK"],
  },
  {
    id: "robotic-navigation",
    title: "具身智能机器人导航系统",
    tagline: "基于深度学习的自主导航算法",
    github: "https://github.com/tangdaqiang/robotic-navigation",
    kpi: 95,
    techStack: ["ROS2", "Deep Learning", "SLAM", "TensorFlow"],
  },
  {
    id: "safety-protection",
    title: "具身智能安全防护系统",
    tagline: "实时监测与智能避障技术",
    github: "https://github.com/tangdaqiang/safety-protection",
    kpi: 97,
    techStack: ["Real-time Systems", "Computer Vision", "Path Planning", "C++"],
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">PROJECT_MATRIX</h1>
            <p className="text-cyan-400 text-xl">具身智能产品的创造之旅</p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-500/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="border border-cyan-500/50 text-cyan-400 px-2 py-1 rounded text-xs">具身智能</span>
                  <div className="flex gap-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 text-cyan-400 hover:text-white transition-colors" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="w-full h-32 bg-slate-700 rounded-lg mb-4 border border-cyan-500/30 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">{project.title}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.tagline}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="bg-slate-700 text-gray-300 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.kpi && <div className="text-xs text-pink-400 mb-4">性能指标: {project.kpi}%</div>}

                <Link
                  href={`/projects/${project.id}`}
                  className="w-full border border-cyan-500/50 text-cyan-400 hover:bg-cyan-400/10 px-4 py-2 rounded-md text-center block"
                >
                  查看详情
                </Link>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-8 mt-12 text-center">
            <h3 className="text-2xl text-white mb-4 font-bold">对这些项目感兴趣？</h3>
            <p className="text-gray-300 mb-6">我很乐意与您分享更多技术细节和项目经验，探讨具身智能领域的合作可能。</p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 px-6 py-2 rounded-md font-medium"
              >
                联系合作
              </Link>
              <Link
                href="/about"
                className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-400/10 px-6 py-2 rounded-md font-medium"
              >
                了解更多
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
