import { Suspense } from "react"
import VideoIntro from "@/components/VideoIntro"
import SkillRadar from "@/components/SkillRadar"
import PersonalStory from "@/components/PersonalStory"

export const metadata = {
  title: "关于我 | 唐大强 - 具身智能0→1破局者",
  description: "了解唐大强的技术背景、个人故事和职业目标。专注AI技术落地与产品化实践的具身智能从业者。",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cyber-dark">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-orbitron text-4xl md:text-6xl font-bold text-cyber-blue mb-8 text-center">关于我</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Suspense fallback={<div className="aspect-video bg-cyber-dark/50 animate-pulse rounded-lg" />}>
              <VideoIntro />
            </Suspense>
            <SkillRadar />
          </div>

          <PersonalStory />
        </div>
      </div>
    </main>
  )
}
