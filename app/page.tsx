import { Suspense } from "react"
import { EmbodiedPrototypes } from "@/components/embodied-prototypes"
import { ProjectHUD } from "@/components/project-hud"
import { Navigation } from "@/components/navigation"
import { getNotionProjects } from "@/lib/notion"

export default async function Home() {
  const projects = await getNotionProjects()

  return (
    <main className="relative min-h-screen bg-cyber-dark overflow-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Background Data Flow Pattern */}
      <div className="absolute inset-0 bg-data-flow-pattern opacity-20" />

      {/* Binary Data Stream Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="data-stream-animation"></div>
      </div>

      {/* Main Content Area */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Core Experience: Embodied Product Incubator */}
        <Suspense fallback={<div className="text-cyber-blue font-oxanium text-lg">初始化具身产品孵化器...</div>}>
          <EmbodiedPrototypes />
        </Suspense>

        {/* Header Overlay */}
        <div className="absolute top-24 left-8 z-10">
          <h1 className="font-oxanium text-4xl md:text-6xl font-bold text-white mb-4">唐大强</h1>
          <p className="text-cyber-blue text-lg md:text-xl max-w-md font-inter">具身智能产品落地的敏捷推手</p>
          <div className="mt-4 text-sm text-gray-400 font-inter">点击原型激活 → 探索我的创造之旅</div>
        </div>

        {/* Status HUD */}
        <div className="absolute top-24 right-8 z-10">
          <div className="cyber-panel p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-cyber-blue rounded-full animate-pulse" />
              <span className="text-cyber-blue text-sm font-oxanium">INCUBATOR_ACTIVE</span>
            </div>
            <div className="text-xs text-gray-400 font-inter">
              原型状态: 待激活
              <br />
              AI产品经验: 已加载
              <br />
              项目案例: {projects.length} 个就绪
            </div>
          </div>
        </div>

        {/* Floating Slogan */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10">
          <div className="text-center">
            <p className="text-cyber-blue font-oxanium text-sm tracking-wider">"从零点到智能，我的具身创造之旅"</p>
          </div>
        </div>
      </section>

      {/* Project HUD Overlay */}
      <ProjectHUD projects={projects} />
    </main>
  )
}
