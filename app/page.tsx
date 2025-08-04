"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Heart, TrendingUp, Coffee, Star, Calendar } from "lucide-react"
import Link from "next/link"

// 模拟数据
const featuredTeas = [
  {
    id: 1,
    name: "三分糖乌龙奶茶",
    brand: "喜茶",
    calories: 280,
    originalCalories: 420,
    image: "/placeholder.svg?height=120&width=120&text=乌龙奶茶",
    tags: ["低卡推荐", "清香"],
    reason: "乌龙茶底清爽不苦，三分糖刚好突出茶香",
  },
  {
    id: 2,
    name: "无糖茉莉绿茶+椰果",
    brand: "奈雪",
    calories: 180,
    originalCalories: 350,
    image: "/placeholder.svg?height=120&width=120&text=茉莉绿茶",
    tags: ["超低卡", "清爽"],
    reason: "茉莉花香天然甜味，椰果增加口感层次",
  },
  {
    id: 3,
    name: "半糖红茶拿铁",
    brand: "蜜雪冰城",
    calories: 240,
    originalCalories: 380,
    image: "/placeholder.svg?height=120&width=120&text=红茶拿铁",
    tags: ["性价比", "奶香"],
    reason: "红茶与牛奶完美融合，半糖恰到好处",
  },
]

const todayStats = {
  consumed: 280,
  budget: 400,
  saved: 140,
}

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [user, setUser] = useState(null)

  // 模拟用户登录状态
  useEffect(() => {
    const userData = localStorage.getItem("teacal_user")
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  if (!user) {
    return (
      <WelcomePage
        onComplete={(userData) => {
          localStorage.setItem("teacal_user", JSON.stringify(userData))
          setUser(userData)
        }}
      />
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-amber-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-amber-900">轻茶纪</h1>
                <p className="text-xs text-amber-600">你的奶茶健康伙伴</p>
              </div>
            </div>
            <Link href="/profile">
              <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-amber-800">{user?.name?.[0] || "U"}</span>
              </div>
            </Link>
          </div>
        </div>
      </header>
      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* 今日概览 */}
        <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-amber-900">今日奶茶记录</h2>
              <Badge className="bg-green-100 text-green-700 border-green-200">已节省 {todayStats.saved}kcal</Badge>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">{todayStats.consumed}</div>
                <div className="text-xs text-gray-600">已摄入</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{todayStats.budget - todayStats.consumed}</div>
                <div className="text-xs text-gray-600">剩余额度</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {Math.round((todayStats.consumed / todayStats.budget) * 100)}%
                </div>
                <div className="text-xs text-gray-600">预算使用</div>
              </div>
            </div>
            <div className="mt-4 bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-amber-400 to-orange-400 h-2 rounded-full transition-all duration-300"
                style={{ width: `${Math.min((todayStats.consumed / todayStats.budget) * 100, 100)}%` }}
              />
            </div>
          </CardContent>
        </Card>

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
            {searchQuery && (
              <div className="mt-3 space-y-2">
                <Link href="/search?q=珍珠奶茶" className="block p-2 hover:bg-amber-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Coffee className="w-4 h-4 text-amber-600" />
                    <span className="text-sm">珍珠奶茶 - 多个品牌</span>
                  </div>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>

        {/* 个性化推荐 */}
        <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-amber-900">
              <Heart className="w-5 h-5 text-pink-500" />
              为你推荐
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {featuredTeas.map((tea) => (
              <Link key={tea.id} href={`/tea/${tea.id}`}>
                <div className="flex items-center gap-4 p-3 hover:bg-amber-50 rounded-lg transition-colors">
                  <img
                    src={tea.image || "/placeholder.svg"}
                    alt={tea.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium text-gray-900">{tea.name}</h3>
                      <Badge variant="outline" className="text-xs">
                        {tea.brand}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">{tea.reason}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-green-600">{tea.calories}kcal</span>
                      <span className="text-xs text-gray-400 line-through">{tea.originalCalories}kcal</span>
                      <Badge className="bg-green-100 text-green-700 text-xs">
                        省{tea.originalCalories - tea.calories}kcal
                      </Badge>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </CardContent>
        </Card>

        {/* 快捷操作 */}
        <div className="grid grid-cols-2 gap-4">
          <Link href="/checkin">
            <Card className="bg-gradient-to-r from-blue-400 to-blue-500 text-white hover:from-blue-500 hover:to-blue-600 transition-all">
              <CardContent className="p-4 text-center">
                <Calendar className="w-6 h-6 mx-auto mb-2" />
                <div className="font-medium">快速打卡</div>
                <div className="text-xs opacity-90">记录今天的奶茶</div>
              </CardContent>
            </Card>
          </Link>
          <Link href="/growth">
            <Card className="bg-gradient-to-r from-purple-400 to-purple-500 text-white hover:from-purple-500 hover:to-purple-600 transition-all">
              <CardContent className="p-4 text-center">
                <TrendingUp className="w-6 h-6 mx-auto mb-2" />
                <div className="font-medium">成长记录</div>
                <div className="text-xs opacity-90">查看进步轨迹</div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* 今日小贴士 */}
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Star className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium text-green-800 mb-1">今日小贴士</h3>
                <p className="text-sm text-green-700">
                  选择茶底时，乌龙茶和绿茶的天然香味可以减少对糖分的依赖， 试试三分糖的乌龙奶茶，既保持口感又控制热量～
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* 底部导航 */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-amber-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-around py-2">
            <Link href="/" className="flex flex-col items-center py-2 text-amber-600">
              <Coffee className="w-5 h-5" />
              <span className="text-xs mt-1">首页</span>
            </Link>
            <Link href="/search" className="flex flex-col items-center py-2 text-gray-400">
              <Search className="w-5 h-5" />
              <span className="text-xs mt-1">搜索</span>
            </Link>
            <Link href="/checkin" className="flex flex-col items-center py-2 text-gray-400">
              <Calendar className="w-5 h-5" />
              <span className="text-xs mt-1">打卡</span>
            </Link>
            <Link href="/growth" className="flex flex-col items-center py-2 text-gray-400">
              <TrendingUp className="w-5 h-5" />
              <span className="text-xs mt-1">成长</span>
            </Link>
          </div>
        </div>
      </nav>
      <div className="h-16" /> {/* 底部导航占位 */}
    </div>
  )
}

// 欢迎页面组件
function WelcomePage({ onComplete }: { onComplete: (userData: any) => void }) {
  const [step, setStep] = useState(0)
  const [userData, setUserData] = useState({
    name: "",
    brands: [] as string[],
    sweetness: "",
    goal: "",
    dailyBudget: 400,
  })

  const brands = ["喜茶", "奈雪", "蜜雪冰城", "古茗", "CoCo", "一点点", "茶百道", "书亦烧仙草"]
  const sweetnessOptions = ["全糖", "七分糖", "五分糖", "三分糖", "无糖"]
  const goalOptions = [
    { value: "maintain", label: "保持现状", budget: 400 },
    { value: "light", label: "轻度管理", budget: 300 },
    { value: "strict", label: "严格控制", budget: 200 },
  ]

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    } else {
      onComplete(userData)
    }
  }

  const handleBrandToggle = (brand: string) => {
    setUserData((prev) => ({
      ...prev,
      brands: prev.brands.includes(brand) ? prev.brands.filter((b) => b !== brand) : [...prev.brands, brand],
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm border-amber-200">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <Coffee className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl text-amber-900">轻茶纪</CardTitle>
          <p className="text-amber-600">你的奶茶健康伙伴</p>
        </CardHeader>
        <CardContent className="space-y-6">
          {step === 0 && (
            <div className="text-center space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">嗨，奶茶爱好者！</h2>
              <p className="text-gray-600">这里不教你"戒掉奶茶"，只帮你"更聪明地喝奶茶"。</p>
              <div className="bg-amber-50 p-4 rounded-lg">
                <p className="text-sm text-amber-800">让我们一起找到享受与健康的完美平衡 ✨</p>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">你叫什么名字？</h2>
              <Input
                placeholder="输入你的昵称"
                value={userData.name}
                onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))}
                className="border-amber-200 focus:border-amber-400"
              />
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">你常喝哪些品牌？</h2>
              <p className="text-sm text-gray-600">选择2-3个常喝的品牌，我们为你推荐更精准</p>
              <div className="grid grid-cols-2 gap-2">
                {brands.map((brand) => (
                  <Button
                    key={brand}
                    variant={userData.brands.includes(brand) ? "default" : "outline"}
                    onClick={() => handleBrandToggle(brand)}
                    className={
                      userData.brands.includes(brand)
                        ? "bg-amber-500 hover:bg-amber-600"
                        : "border-amber-200 hover:bg-amber-50"
                    }
                  >
                    {brand}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">你能接受的最低甜度？</h2>
              <div className="space-y-2">
                {sweetnessOptions.map((option) => (
                  <Button
                    key={option}
                    variant={userData.sweetness === option ? "default" : "outline"}
                    onClick={() => setUserData((prev) => ({ ...prev, sweetness: option }))}
                    className={`w-full justify-start ${
                      userData.sweetness === option
                        ? "bg-amber-500 hover:bg-amber-600"
                        : "border-amber-200 hover:bg-amber-50"
                    }`}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">你的健康目标？</h2>
              <div className="space-y-3">
                {goalOptions.map((option) => (
                  <Button
                    key={option.value}
                    variant={userData.goal === option.value ? "default" : "outline"}
                    onClick={() =>
                      setUserData((prev) => ({
                        ...prev,
                        goal: option.value,
                        dailyBudget: option.budget,
                      }))
                    }
                    className={`w-full justify-between ${
                      userData.goal === option.value
                        ? "bg-amber-500 hover:bg-amber-600"
                        : "border-amber-200 hover:bg-amber-50"
                    }`}
                  >
                    <span>{option.label}</span>
                    <span className="text-xs">日预算 {option.budget}kcal</span>
                  </Button>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-between items-center pt-4">
            <div className="flex space-x-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${i <= step ? "bg-amber-400" : "bg-gray-200"}`} />
              ))}
            </div>
            <Button
              onClick={handleNext}
              disabled={
                (step === 1 && !userData.name) ||
                (step === 2 && userData.brands.length === 0) ||
                (step === 3 && !userData.sweetness) ||
                (step === 4 && !userData.goal)
              }
              className="bg-amber-500 hover:bg-amber-600"
            >
              {step === 4 ? "开始使用" : "下一步"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
