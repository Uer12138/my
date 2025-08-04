import type React from "react"
import type { Metadata } from "next"
import { Inter, Orbitron } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-orbitron",
})

export const metadata: Metadata = {
  title: "cyber-seed.dev | 具身智能0→1破局者的赛博空间",
  description:
    "专注具身智能场景落地，展示从0到1的机器人交互项目与技术方案。用3D交互+轻量化技术，让具身智能原型落地效率提升50%",
  openGraph: {
    title: "cyber-seed.dev | 具身智能0→1破局者",
    description: "唐大强 - 具身智能场景的0→1破局者，专注AI技术落地与产品化实践",
    images: ["/assets/og-cyber-hand.webp"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${orbitron.variable}`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
