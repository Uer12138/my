import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Orbitron } from "next/font/google"
import { Oxanium } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
})

const oxanium = Oxanium({
  subsets: ["latin"],
  variable: "--font-oxanium",
})

export const metadata: Metadata = {
  title: "唐大强 | 具身智能产品落地的敏捷推手",
  description: "专注于具身智能产品的设计与开发，推动AI技术在实际应用中的快速落地",
  keywords: ["具身智能", "机器人", "AI", "产品设计", "敏捷开发", "唐大强"],
  authors: [{ name: "唐大强" }],
  openGraph: {
    title: "唐大强 | 具身智能产品落地的敏捷推手",
    description: "手心里长出的机器人 - 探索具身智能的无限可能",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title: "唐大强 | 具身智能产品落地的敏捷推手",
    description: "手心里长出的机器人 - 探索具身智能的无限可能",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className="dark">
      <body className={`${inter.variable} ${orbitron.variable} ${oxanium.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
