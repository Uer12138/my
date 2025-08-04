"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Camera, Coffee, Heart, Smile, Meh, Frown, CheckCircle } from "lucide-react"
import Link from "next/link"

const recentTeas = [
  { id: 1, name: "三分糖乌龙奶茶", brand: "喜茶", calories: 280 },
  { id: 2, name: "无糖茉莉绿茶+椰果", brand: "奈雪", calories: 180 },
  { id: 3, name: "半糖红茶拿铁", brand: "蜜雪冰城", calories: 240 },
]

const moodOptions = [
  { icon: Smile, label: "开心", color: "text-green-500", bg: "bg-green-50" },
  { icon: Heart, label: "满足", color: "text-pink-500", bg: "bg-pink-50" },
  { icon: Meh, label: "一般", color: "text-yellow-500", bg: "bg-yellow-50" },
  { icon: Frown, label: "纠结", color: "text-gray-500", bg: "bg-gray-50" },
]

export default function CheckinPage() {
  const [selectedTea, setSelectedTea] = useState<any>(null)
  const [customTea, setCustomTea] = useState({ name: "", brand: "", calories: "" })
  const [selectedMood, setSelectedMood] = useState("")
  const [note, setNote] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = () => {
    // 模拟提交打卡
    setIsSubmitted(true)
    setTimeout(() => {
      // 返回首页
      window.location.href = "/"
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm border-green-200">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-xl font-bold text-green-800 mb-2">打卡成功！</h2>
            <p className="text-green-600 mb-4">今天又是聪明喝奶茶的一天～</p>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-green-700">本周已累计3次健康选择，继续保持！</p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-amber-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-amber-700">
                <ArrowLeft className="w-4 h-4 mr-2" />
                返回
              </Button>
            </Link>
            <h1 className="text-lg font-semibold text-amber-900">奶茶打卡</h1>
            <div className="w-16" /> {/* 占位 */}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* 快速选择 */}
        <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
          <CardHeader>
            <CardTitle className="text-amber-900">最近喝过的</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentTeas.map((tea) => (
              <div
                key={tea.id}
                onClick={() => setSelectedTea(tea)}
                className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedTea?.id === tea.id ? "border-amber-400 bg-amber-50" : "border-gray-200 hover:border-amber-300"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">{tea.name}</h3>
                    <p className="text-sm text-gray-600">{tea.brand}</p>
                  </div>
                  <Badge className="bg-amber-100 text-amber-700">{tea.calories}kcal</Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* 自定义输入 */}
        <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
          <CardHeader>
            <CardTitle className="text-amber-900">或者手动输入</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">奶茶名称</label>
                <Input
                  placeholder="例：珍珠奶茶"
                  value={customTea.name}
                  onChange={(e) => setCustomTea((prev) => ({ ...prev, name: e.target.value }))}
                  className="border-amber-200 focus:border-amber-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">品牌</label>
                <Input
                  placeholder="例：喜茶"
                  value={customTea.brand}
                  onChange={(e) => setCustomTea((prev) => ({ ...prev, brand: e.target.value }))}
                  className="border-amber-200 focus:border-amber-400"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">热量 (kcal)</label>
              <Input
                type="number"
                placeholder="例：280"
                value={customTea.calories}
                onChange={(e) => setCustomTea((prev) => ({ ...prev, calories: e.target.value }))}
                className="border-amber-200 focus:border-amber-400"
              />
            </div>
          </CardContent>
        </Card>

        {/* 心情记录 */}
        <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
          <CardHeader>
            <CardTitle className="text-amber-900">今天的心情</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-3">
              {moodOptions.map((mood) => {
                const Icon = mood.icon
                return (
                  <button
                    key={mood.label}
                    onClick={() => setSelectedMood(mood.label)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedMood === mood.label
                        ? "border-amber-400 bg-amber-50"
                        : "border-gray-200 hover:border-amber-300"
                    }`}
                  >
                    <div className={`w-8 h-8 ${mood.bg} rounded-full flex items-center justify-center mx-auto mb-2`}>
                      <Icon className={`w-4 h-4 ${mood.color}`} />
                    </div>
                    <div className="text-xs text-gray-700">{mood.label}</div>
                  </button>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* 备注 */}
        <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
          <CardHeader>
            <CardTitle className="text-amber-900">记录一下</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="今天和朋友一起喝的，很开心～"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="border-amber-200 focus:border-amber-400 resize-none"
              rows={3}
            />
            <Button
              variant="outline"
              className="w-full border-amber-300 text-amber-700 hover:bg-amber-50 bg-transparent"
            >
              <Camera className="w-4 h-4 mr-2" />
              添加照片
            </Button>
          </CardContent>
        </Card>

        {/* 提交按钮 */}
        <div className="pb-20">
          <Button
            onClick={handleSubmit}
            disabled={!selectedTea && (!customTea.name || !customTea.calories)}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 py-3"
          >
            <Coffee className="w-4 h-4 mr-2" />
            完成打卡
          </Button>
        </div>
      </div>
    </div>
  )
}
