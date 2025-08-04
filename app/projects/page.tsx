import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, FileText } from "lucide-react"
import { getNotionProjects } from "@/lib/notion"

export default async function Projects() {
  const projects = await getNotionProjects()

  return (
    <div className="min-h-screen bg-cyber-dark">
      <Navigation />

      {/* Background */}
      <div className="absolute inset-0 bg-data-flow-pattern opacity-10" />

      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-oxanium text-4xl md:text-6xl font-bold text-white mb-4">PROJECT_MATRIX</h1>
            <p className="text-cyber-blue text-xl font-inter">具身智能产品的创造之旅</p>
          </div>

          {/* Featured Project */}
          <div className="cyber-panel p-8 mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-cyber-blue text-cyber-dark font-oxanium">FEATURED</Badge>
              <Badge variant="outline" className="border-cyber-blue/50 text-cyber-blue">
                具身智能
              </Badge>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-oxanium text-2xl md:text-3xl font-bold text-white mb-4">多模态智能交互小车</h2>
                <p className="text-gray-300 text-lg mb-6 font-inter leading-relaxed">
                  校园场景AI原型开发，实现环境感知-身份识别-情感交互的完整闭环。
                  通过深度学习和计算机视觉技术，打造真正理解用户的智能伙伴。
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["MindSpore", "ModelArts", "Python", "Jetson Nano", "OpenCV", "NLTK"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button asChild className="bg-cyber-blue hover:bg-cyber-blue/80 text-cyber-dark font-oxanium">
                    <Link href="/projects/smart-interactive-car">
                      查看详情 <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-cyber-blue/50 text-cyber-blue hover:bg-cyber-blue/10 bg-transparent"
                  >
                    <a
                      href="https://github.com/tangdaqiang/smart-interactive-car"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/placeholder.svg?height=300&width=500&text=Smart+Interactive+Car"
                  alt="多模态智能交互小车"
                  className="w-full h-64 object-cover rounded-lg border border-cyber-blue/30"
                />
                <div className="absolute top-4 right-4 bg-cyber-blue/90 text-cyber-dark px-2 py-1 rounded text-xs font-oxanium">
                  KPI: 98.3%
                </div>
              </div>
            </div>
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(1).map((project) => (
              <div key={project.id} className="cyber-panel p-6 hover:border-cyber-blue/50 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-cyber-blue/50 text-cyber-blue text-xs">
                    具身智能
                  </Badge>
                  <div className="flex gap-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 text-cyber-blue hover:text-white transition-colors" />
                      </a>
                    )}
                    {project.pdf && (
                      <a href={project.pdf} target="_blank" rel="noopener noreferrer">
                        <FileText className="w-4 h-4 text-cyber-pink hover:text-white transition-colors" />
                      </a>
                    )}
                  </div>
                </div>

                <img
                  src={project.cover || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-32 object-cover rounded-lg mb-4 border border-cyber-blue/30"
                />

                <h3 className="font-oxanium text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 font-inter">{project.tagline}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {project.kpi && <div className="text-xs text-cyber-pink mb-4">性能指标: {project.kpi}%</div>}

                <Button
                  asChild
                  variant="outline"
                  className="w-full border-cyber-blue/50 text-cyber-blue hover:bg-cyber-blue/10 bg-transparent"
                >
                  <Link href={`/projects/${project.id}`}>查看详情</Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="cyber-panel p-8 mt-12 text-center">
            <h3 className="font-oxanium text-2xl text-white mb-4">对这些项目感兴趣？</h3>
            <p className="text-gray-300 mb-6 font-inter">
              我很乐意与您分享更多技术细节和项目经验，探讨具身智能领域的合作可能。
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild className="bg-cyber-blue hover:bg-cyber-blue/80 text-cyber-dark font-oxanium">
                <Link href="/contact">联系合作</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-cyber-blue/50 text-cyber-blue hover:bg-cyber-blue/10 bg-transparent"
              >
                <Link href="/about">了解更多</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
