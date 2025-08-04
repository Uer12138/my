import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "唐大强 | 具身智能产品落地的敏捷推手",
  description: "专注于具身智能产品的设计与开发，推动AI技术在实际应用中的快速落地",
  keywords: ["具身智能", "机器人", "AI", "产品设计", "敏捷开发", "唐大强"],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
