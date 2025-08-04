"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "/", label: "首页", id: "home" },
  { href: "/projects", label: "项目", id: "projects" },
  { href: "/about", label: "关于", id: "about" },
  { href: "/contact", label: "联系", id: "contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cyber-dark/90 backdrop-blur-md border-b border-cyber-blue/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-cyber-blue rounded-full flex items-center justify-center">
              <Zap className="w-5 h-5 text-cyber-dark" />
            </div>
            <span className="font-oxanium text-xl font-bold text-white">CYBER_SEED</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`font-inter text-sm transition-colors ${
                  pathname === item.href ? "text-cyber-blue" : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="bg-cyber-blue hover:bg-cyber-blue/80 text-cyber-dark font-oxanium">
              <Link href="/contact">联系我</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-cyber-blue transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-cyber-blue/30">
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block font-inter text-sm transition-colors ${
                    pathname === item.href ? "text-cyber-blue" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="w-full bg-cyber-blue hover:bg-cyber-blue/80 text-cyber-dark font-oxanium">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  联系我
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
