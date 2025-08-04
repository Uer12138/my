import { Suspense } from "react"
import { getNotionProjects } from "@/lib/notion"
import SplineHand from "@/components/SplineHand"
import ProjectHUD from "@/components/ProjectHUD"
import HeroSection from "@/components/HeroSection"

export const metadata = {
  title: "cyber-seed.dev | 具身智能0→1破局者的赛博空间",
  description:
    "专注具身智能场景落地，展示从0到1的机器人交互项目与技术方案。用3D交互+轻量化技术，让具身智能原型落地效率提升50%",
  openGraph: {
    title: "cyber-seed.dev | 具身智能0→1破局者",
    description: "唐大强 - 具身智能场景的0→1破局者，专注AI技术落地与产品化实践",
    images: ["/assets/og-cyber-hand.webp"],
  },
}

async function ProjectsLoader() {
  const projects = await getNotionProjects()
  return <ProjectHUD projects={projects} />
}

export default function Home() {
  return (
    <main className="min-h-screen bg-cyber-dark overflow-hidden">
      <HeroSection />
      <Suspense fallback={<div className="w-full h-screen bg-cyber-dark animate-pulse" />}>
        <SplineHand />
      </Suspense>
      <Suspense
        fallback={
          <div className="fixed bottom-8 left-8 right-8 z-20">
            <div className="cyber-card p-6 animate-pulse">
              <div className="h-6 bg-cyber-blue/20 rounded mb-4"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-48 bg-gray-800/50 rounded-lg"></div>
                ))}
              </div>
            </div>
          </div>
        }
      >
        <ProjectsLoader />
      </Suspense>
    </main>
  )
}
