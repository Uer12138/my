"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Search, Filter, Coffee, TrendingDown } from "lucide-react"
import Link from "next/link"

// 模拟搜索数据
const searchResults = [
  {
    id: 1,
    name: "珍珠奶茶",
    brand: "喜茶",
    calories: 420,
    optimizedCalories: 280,
    image: "/placeholder.svg?height=80&width=80&text=珍珠奶茶",
    tags: ["经典", "热门"],
    ingredients: ["珍珠", "全糖", "奶盖"],
  },
  {
    id: 2,
    name: "珍珠奶茶",
    brand: "奈雪",
    calories: 380,
    optimizedCalories: 240,
    image: "/placeholder.svg?height=80&width=80&text=珍珠奶茶",
    tags: ["经典", "奶香"],
    ingredients: ["珍珠", "全糖", "鲜奶"],
  },
  {
    id: 3,
    name: "珍珠奶茶",
    brand: "蜜雪冰城",
    calories: 350,
    optimizedCalories: 220,
    image: "/placeholder.svg?height=80&width=80&text=珍珠奶茶",
    tags: ["经典", "性价比"],
    ingredients: ["珍珠", "全糖", "植脂末"],
  },
  {
    id: 4,
    name: "珍珠奶茶",
    brand: "古茗",
    calories: 390,
    optimizedCalories: 260,
    image: "/placeholder.svg?height=80&width=80&text=珍珠奶茶",
    tags: ["经典", "茶香"],
    ingredients: ["珍珠", "全糖", "茶底"],
  },
]

const filterOptions = [
  { label: "全部", value: "all" },
  { label: "低于300kcal", value: "low" },
  { label: "低于400kcal", value: "medium" },
  { label: "全部热量", value: "high" },
]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("珍珠奶茶")
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [showFilters, setShowFilters] = useState(false)

  const filteredResults = searchResults.filter((item) => {
    if (selectedFilter === "low") return item.optimizedCalories < 300
    if (selectedFilter === "medium") return item.optimizedCalories < 400
    return true
  })

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
            <h1 className="text-lg font-semibold text-amber-900">奶茶搜索</h1>
            <Button variant="ghost" size="sm" onClick={() => setShowFilters(!showFilters)} className="text-amber-700">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* 搜索栏 */}
        <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="搜索奶茶品牌或种类..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-amber-200 focus:border-amber-400"
              />
            </div>
          </CardContent>
        </Card>
        {/* 筛选器 */}
        {showFilters && (
          <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
            <CardHeader>
              <CardTitle className="text-amber-900 text-sm">热量筛选</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {filterOptions.map((option) => (
                  <Button
                    key={option.value}
                    variant={selectedFilter === option.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedFilter(option.value)}
                    className={
                      selectedFilter === option.value
                        ? "bg-amber-500 hover:bg-amber-600"
                        : "border-amber-200 hover:bg-amber-50"
                    }
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
        {/* 搜索结果 */}
        <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
          <CardHeader>
            <CardTitle className="text-amber-900">找到 {filteredResults.length} 个结果</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {filteredResults.map((item) => (
              <Link key={`${item.brand}-${item.id}`} href={`/tea/${item.id}`}>
                <div className="flex items-center gap-4 p-4 hover:bg-amber-50 rounded-lg transition-colors border border-gray-200">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <Badge variant="outline" className="text-amber-700 border-amber-300">
                        {item.brand}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-2">
                      {item.tags.map((tag) => (
                        <Badge key={tag} className="bg-gray-100 text-gray-600 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-red-600 line-through">{item.calories}kcal</span>
                        <span className="font-semibold text-green-600">{item.optimizedCalories}kcal</span>
                      </div>
                      <Badge className="bg-green-100 text-green-700 text-xs">
                        <TrendingDown className="w-3 h-3 mr-1" />省{item.calories - item.optimizedCalories}kcal
                      </Badge>
                    </div>

                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                      <Coffee className="w-3 h-3" />
                      <span>配料: {item.ingredients.join(", ")}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </CardContent>
        </Card>
        {/* 热门搜索 */}
        <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
          <CardHeader>
            <CardTitle className="text-amber-900">热门搜索</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {["珍珠奶茶", "芝士奶盖", "水果茶", "奶昔", "咖啡", "抹茶拿铁"].map((keyword) => (
                <Button
                  key={keyword}
                  variant="outline"
                  size="sm"
                  onClick={() => setSearchQuery(keyword)}
                  className="border-amber-200 hover:bg-amber-50 text-amber-700"
                >
                  {keyword}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="pb-20" /> {/* 底部导航占位 */}
      </div>
    </div>
  )
}
