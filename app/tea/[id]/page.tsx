"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Heart, Share2, Coffee, Zap, TrendingDown } from "lucide-react"
import Link from "next/link"

// 模拟奶茶详情数据
const teaDetails = {
  id: 1,
  name: "多肉葡萄",
  brand: "喜茶",
  image: "/placeholder.svg?height=200&width=200&text=多肉葡萄",
  baseCalories: 450,
  optimizedCalories: 240,
  description: "新鲜葡萄与茶香的完美融合",
  ingredients: [
    { name: "葡萄果肉", calories: 100, unit: "50g" },
    { name: "奶盖", calories: 150, unit: "30g", canRemove: true },
    {
      name: "全糖糖浆",
      calories: 120,
      unit: "25ml",
      alternatives: [
        { name: "七分糖", calories: 84, savings: 36 },
        { name: "五分糖", calories: 60, savings: 60 },
        { name: "三分糖", calories: 36, savings: 84 },
      ],
    },
    { name: "绿茶底", calories: 80, unit: "300ml" },
  ],
  optimizations: [
    { change: "去奶盖", savings: 150, impact: "更清爽，突出葡萄香甜" },
    { change: "改为五分糖", savings: 60, impact: "葡萄天然甜味足够，减糖不影响口感" },
  ],
  tags: ["果香浓郁", "夏日特饮", "维C丰富"],
  rating: 4.6,
  reviews: 1234,
}

export default function TeaDetailPage({ params }: { params: { id: string } }) {
  const [selectedSugar, setSelectedSugar] = useState("全糖糖浆")
  const [includeTopping, setIncludeTopping] = useState(true)
  const [isLiked, setIsLiked] = useState(false)

  // 计算当前配置的总热量
  const calculateCurrentCalories = () => {
    let total = 0
    teaDetails.ingredients.forEach((ingredient) => {
      if (ingredient.name === "奶盖" && !includeTopping) return

      if (ingredient.alternatives && ingredient.name === "全糖糖浆") {
        const selected = ingredient.alternatives.find((alt) => alt.name === selectedSugar)
        total += selected ? selected.calories : ingredient.calories
      } else {
        total += ingredient.calories
      }
    })
    return total
  }

  const currentCalories = calculateCurrentCalories()
  const savings = teaDetails.baseCalories - currentCalories

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
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsLiked(!isLiked)}
                className={isLiked ? "text-red-500" : "text-gray-400"}
              >
                <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* 产品信息 */}
        <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <img
                src={teaDetails.image || "/placeholder.svg"}
                alt={teaDetails.name}
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="text-xl font-bold text-gray-900">{teaDetails.name}</h1>
                  <Badge variant="outline" className="text-amber-700 border-amber-300">
                    {teaDetails.brand}
                  </Badge>
                </div>
                <p className="text-gray-600 text-sm mb-3">{teaDetails.description}</p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    <span>{teaDetails.rating}</span>
                  </div>
                  <span className="text-gray-500">{teaDetails.reviews} 评价</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {teaDetails.tags.map((tag) => (
                <Badge key={tag} className="bg-amber-100 text-amber-700 border-amber-200">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 热量对比 */}
        <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-amber-900">
              <Zap className="w-5 h-5 text-yellow-500" />
              热量分析
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
                <div className="text-2xl font-bold text-red-600">{teaDetails.baseCalories}</div>
                <div className="text-sm text-red-700">标准配置</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="text-2xl font-bold text-green-600">{currentCalories}</div>
                <div className="text-sm text-green-700">当前配置</div>
              </div>
            </div>

            {savings > 0 && (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingDown className="w-4 h-4 text-green-600" />
                  <span className="font-medium text-green-800">已节省 {savings}kcal</span>
                </div>
                <p className="text-sm text-green-700">
                  相当于少走 {Math.round(savings * 0.02)} 分钟或少吃 {Math.round(savings / 4)} 颗糖
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* 配料定制 */}
        <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
          <CardHeader>
            <CardTitle className="text-amber-900">配料定制</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {teaDetails.ingredients.map((ingredient, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{ingredient.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {ingredient.unit}
                    </Badge>
                  </div>
                  <span className="text-sm font-semibold text-amber-600">
                    {ingredient.name === "全糖糖浆" && ingredient.alternatives
                      ? ingredient.alternatives.find((alt) => alt.name === selectedSugar)?.calories ||
                        ingredient.calories
                      : ingredient.name === "奶盖" && !includeTopping
                        ? 0
                        : ingredient.calories}
                    kcal
                  </span>
                </div>

                {ingredient.name === "奶盖" && (
                  <div className="flex items-center gap-2">
                    <Button
                      variant={includeTopping ? "default" : "outline"}
                      size="sm"
                      onClick={() => setIncludeTopping(true)}
                      className={includeTopping ? "bg-amber-500 hover:bg-amber-600" : ""}
                    >
                      保留奶盖
                    </Button>
                    <Button
                      variant={!includeTopping ? "default" : "outline"}
                      size="sm"
                      onClick={() => setIncludeTopping(false)}
                      className={!includeTopping ? "bg-green-500 hover:bg-green-600" : ""}
                    >
                      去奶盖 (-150kcal)
                    </Button>
                  </div>
                )}

                {ingredient.alternatives && (
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {ingredient.alternatives.map((alt) => (
                      <Button
                        key={alt.name}
                        variant={selectedSugar === alt.name ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedSugar(alt.name)}
                        className={`text-xs ${selectedSugar === alt.name ? "bg-amber-500 hover:bg-amber-600" : ""}`}
                      >
                        {alt.name}
                        <span className="ml-1 text-green-600">(-{alt.savings})</span>
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* 优化建议 */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-900">智能优化建议</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {teaDetails.optimizations.map((opt, index) => (
              <div key={index} className="bg-white/50 p-3 rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-blue-800">{opt.change}</span>
                  <Badge className="bg-green-100 text-green-700">-{opt.savings}kcal</Badge>
                </div>
                <p className="text-sm text-blue-700">{opt.impact}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* 操作按钮 */}
        <div className="grid grid-cols-2 gap-4 pb-20">
          <Link href="/checkin">
            <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
              <Coffee className="w-4 h-4 mr-2" />
              立即打卡
            </Button>
          </Link>
          <Button variant="outline" className="w-full border-amber-300 text-amber-700 hover:bg-amber-50 bg-transparent">
            复制配方
          </Button>
        </div>
      </div>
    </div>
  )
}
