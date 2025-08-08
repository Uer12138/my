import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "轻茶纪 - 你的奶茶健康伙伴",
  description: "聪明喝奶茶，享受与健康的完美平衡。科学管理奶茶热量，让每一杯都喝得安心。",
  keywords: ["奶茶", "热量管理", "健康", "卡路里", "饮品"],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
