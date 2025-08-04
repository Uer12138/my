"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, FileText, Zap, ExternalLink } from "lucide-react"
import Image from "next/image"

interface Project {
  id: string
  title: string
  tagline: string
  cover: string
  github: string
  pdf: string
  kpi: number
  techStack: string[]
  role: string
  challenges: string[]
  results: string
}

interface ProjectHUDProps {
  projects: Project[]
}

export default function ProjectHUD({ projects }: ProjectHUDProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 4000) // 机器人生长后显示
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-8 left-8 right-8 z-20"
        >
          <div className="cyber-card p-6 max-h-96 overflow-y-auto">
            <h3 className="font-orbitron text-cyber-blue text-xl mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              项目投射 HUD
              <span className="text-sm text-gray-400 ml-2">({projects.length} 个项目)</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedProject(project)}
                  className="cyber-project-card cursor-pointer"
                >
                  <div className="relative h-32 mb-3 overflow-hidden rounded-lg">
                    <Image
                      src={project.cover || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 to-transparent" />

                    {/* 项目类型标识 */}
                    <div className="absolute top-2 right-2 px-2 py-1 bg-cyber-blue/20 backdrop-blur-sm rounded text-xs text-cyber-blue">
                      {project.techStack[0] || "AI"}
                    </div>
                  </div>

                  <h4 className="font-orbitron text-cyber-blue text-sm font-semibold mb-2 line-clamp-1">
                    {project.title}
                  </h4>

                  <p className="text-gray-300 text-xs mb-3 line-clamp-2">{project.tagline}</p>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex gap-2">
                      {project.github && <Github className="w-4 h-4 text-cyber-blue" />}
                      {project.pdf && <FileText className="w-4 h-4 text-cyber-pink" />}
                      <ExternalLink className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-cyber-blue text-xs font-mono bg-cyber-blue/10 px-2 py-1 rounded">
                      +{project.kpi}%
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-cyber-blue/20 text-cyber-blue text-xs rounded">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 bg-gray-600/20 text-gray-400 text-xs rounded">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 数据统计 */}
            <div className="mt-6 pt-4 border-t border-gray-700/50">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-cyber-blue text-lg font-mono">{projects.length}</div>
                  <div className="text-gray-400 text-xs">项目总数</div>
                </div>
                <div>
                  <div className="text-cyber-pink text-lg font-mono">
                    {Math.round(projects.reduce((sum, p) => sum + p.kpi, 0) / projects.length)}%
                  </div>
                  <div className="text-gray-400 text-xs">平均效率提升</div>
                </div>
                <div>
                  <div className="text-green-400 text-lg font-mono">
                    {new Set(projects.flatMap((p) => p.techStack)).size}
                  </div>
                  <div className="text-gray-400 text-xs">技术栈覆盖</div>
                </div>
              </div>
            </div>
          </div>

          {/* 项目详情模态框 */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-30 flex items-center justify-center p-4"
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                  className="cyber-card max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-orbitron text-cyber-blue text-2xl">{selectedProject.title}</h3>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={selectedProject.cover || "/placeholder.svg"}
                        alt={selectedProject.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-cyber-pink font-semibold mb-2">项目简介</h4>
                        <p className="text-gray-300">{selectedProject.tagline}</p>
                      </div>

                      <div>
                        <h4 className="text-cyber-pink font-semibold mb-2">个人角色</h4>
                        <p className="text-gray-300">{selectedProject.role}</p>
                      </div>

                      <div>
                        <h4 className="text-cyber-pink font-semibold mb-2">技术难点与解决方案</h4>
                        <ul className="space-y-2">
                          {selectedProject.challenges.map((challenge, index) => (
                            <li key={index} className="text-gray-300 flex items-start gap-2">
                              <span className="w-2 h-2 bg-cyber-blue rounded-full mt-2 flex-shrink-0"></span>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-cyber-pink font-semibold mb-2">项目成果</h4>
                        <p className="text-gray-300">{selectedProject.results}</p>
                        <div className="text-cyber-blue font-mono text-lg mt-2 bg-cyber-blue/10 px-3 py-2 rounded">
                          效率提升: +{selectedProject.kpi}%
                        </div>
                      </div>

                      <div>
                        <h4 className="text-cyber-pink font-semibold mb-2">技术栈</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-cyber-blue/20 text-cyber-blue rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4 pt-4">
                        {selectedProject.github && (
                          <a
                            href={selectedProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cyber-button-primary flex items-center gap-2"
                          >
                            <Github className="w-4 h-4" />
                            查看代码
                          </a>
                        )}
                        {selectedProject.pdf && (
                          <a
                            href={selectedProject.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cyber-button-secondary flex items-center gap-2"
                          >
                            <FileText className="w-4 h-4" />
                            项目详情 PDF
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
