"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, FileText, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { NotionProject } from "@/lib/notion"

interface ProjectHUDProps {
  projects: NotionProject[]
}

export function ProjectHUD({ projects }: ProjectHUDProps) {
  const [selectedProject, setSelectedProject] = useState<NotionProject | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      {/* HUD Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-8 right-8 z-50 cyber-panel p-4 hover:bg-cyber-blue/20 transition-colors"
      >
        <Zap className="w-6 h-6 text-cyber-blue" />
        <span className="sr-only">Toggle Projects HUD</span>
      </button>

      {/* Projects HUD Overlay */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-y-0 right-0 w-96 bg-cyber-dark/95 backdrop-blur-md border-l border-cyber-blue/30 z-40 overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-orbitron text-xl text-white">PROJECT_MATRIX</h2>
                <button onClick={() => setIsVisible(false)} className="text-gray-400 hover:text-white">
                  ×
                </button>
              </div>

              <div className="space-y-4">
                {projects.map((project) => (
                  <motion.div
                    key={project.id}
                    whileHover={{ scale: 1.02 }}
                    className="cyber-panel p-4 cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-white text-sm">{project.title}</h3>
                      <div className="flex gap-1">
                        {project.github && <Github className="w-4 h-4 text-cyber-blue" />}
                        {project.pdf && <FileText className="w-4 h-4 text-cyber-pink" />}
                      </div>
                    </div>

                    <p className="text-xs text-gray-400 mb-3">{project.tagline}</p>

                    <div className="flex flex-wrap gap-1 mb-2">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs border-cyber-blue/50 text-cyber-blue">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {project.kpi && <div className="text-xs text-cyber-pink">KPI: {project.kpi}%</div>}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="cyber-panel max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="font-orbitron text-2xl text-white mb-2">{selectedProject.title}</h2>
                    <p className="text-gray-300">{selectedProject.tagline}</p>
                  </div>
                  <button onClick={() => setSelectedProject(null)} className="text-gray-400 hover:text-white text-xl">
                    ×
                  </button>
                </div>

                {selectedProject.cover && (
                  <img
                    src={selectedProject.cover || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full h-48 object-cover rounded-lg mb-4 border border-cyber-blue/30"
                  />
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.techStack.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-cyber-blue/50 text-cyber-blue">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {selectedProject.github && (
                    <Button asChild className="bg-cyber-blue hover:bg-cyber-blue/80">
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {selectedProject.pdf && (
                    <Button
                      asChild
                      variant="outline"
                      className="border-cyber-pink text-cyber-pink hover:bg-cyber-pink/10 bg-transparent"
                    >
                      <a href={selectedProject.pdf} target="_blank" rel="noopener noreferrer">
                        <FileText className="w-4 h-4 mr-2" />
                        详情 PDF
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
