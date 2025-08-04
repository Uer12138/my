"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Settings, Coffee, Target, Bell, HelpCircle, LogOut } from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState({
    name: "",
    dailyBudget: 400,
    brands: [] as string[],
    sweetness: "",
    goal: "",
  })

  useEffect(() => {
    const userData = localStorage.getItem("teacal_user")
    if (userData) {
      const parsed = JSON.parse(userData)
      setUser(parsed)
      setEditData(parsed)
    }
  }, [])

  const handleSave = () => {
    localStorage.setItem("teacal_user", JSON.stringify(editData))
    setUser(editData)
    setIsEditing(false)
  }

  const handleLogout = () => {
    localStorage.removeItem("teacal_user")
    window.location.href = "/"
  }

  if (!user) {
    return <div>Loading...</div>
  }

  const brands = ["喜茶", "奈雪", "蜜雪冰城", "古茗", "CoCo", "一点点", "茶百道", "书亦烧仙草"]
  const sweetnessOptions = ["全糖", "七分糖", "五分糖", "三分糖", "无糖"]

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
            <h1 className="text-lg font-semibold text-amber-900">个人设置</h1>
            <Button variant="ghost" size="sm" onClick={() => setIsEditing(!isEditing)} className="text-amber-700">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* 用户信息 */}
        <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">{user.name?.[0] || "U"}</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
                <p className="text-amber-600">奶茶健康管理者</p>
              </div>
            </div>

            {isEditing ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">昵称</label>
                  <Input
                    value={editData.name}
                    onChange={(e) => setEditData((prev) => ({ ...prev, name: e.target.value }))}
                    className="border-amber-200 focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">日热量预算</label>
                  <Input
                    type="number"
                    value={editData.dailyBudget}
                    onChange={(e) => setEditData((prev) => ({ ...prev, dailyBudget: Number.parseInt(e.target.value) }))}
                    className="border-amber-200 focus:border-amber-400"
                  />
                </div>
                <div className="flex gap-2">
                  <Button onClick={handleSave} className="bg-amber-500 hover:bg-amber-600">
                    保存
                  </Button>
                  <Button variant="outline" onClick={() => setIsEditing(false)}>
                    取消
                  </Button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">日预算</span>
                  <p className="font-medium text-amber-600">{user.dailyBudget}kcal</p>
                </div>
                <div>
                  <span className="text-gray-500">甜度偏好</span>
                  <p className="font-medium">{user.sweetness}</p>
                </div>
                <div>
                  <span className="text-gray-500">健康目标</span>
                  <p className="font-medium">
                    {user.goal === "maintain" ? "保持现状" : user.goal === "light" ? "轻度管理" : "严格控制"}
                  </p>
                </div>
                <div>
                  <span className="text-gray-500">常喝品牌</span>
                  <p className="font-medium">{user.brands?.length || 0}个</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        {/* 偏好设置 */}
        {isEditing && (
          <>
            <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900">常喝品牌</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {brands.map((brand) => (
                    <Button
                      key={brand}
                      variant={editData.brands?.includes(brand) ? "default" : "outline"}
                      size="sm"
                      onClick={() => {
                        const newBrands = editData.brands?.includes(brand)
                          ? editData.brands.filter((b) => b !== brand)
                          : [...(editData.brands || []), brand]
                        setEditData((prev) => ({ ...prev, brands: newBrands }))
                      }}
                      className={
                        editData.brands?.includes(brand)
                          ? "bg-amber-500 hover:bg-amber-600"
                          : "border-amber-200 hover:bg-amber-50"
                      }
                    >
                      {brand}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900">甜度偏好</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {sweetnessOptions.map((option) => (
                    <Button
                      key={option}
                      variant={editData.sweetness === option ? "default" : "outline"}
                      onClick={() => setEditData((prev) => ({ ...prev, sweetness: option }))}
                      className={`w-full justify-start ${
                        editData.sweetness === option
                          ? "bg-amber-500 hover:bg-amber-600"
                          : "border-amber-200 hover:bg-amber-50"
                      }`}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </>
        )}
        {/* 统计数据 */}
        <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-amber-900">
              <Coffee className="w-5 h-5" />
              我的数据
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 bg-amber-50 rounded-lg">
                <div className="text-2xl font-bold text-amber-600">15</div>
                <div className="text-sm text-amber-700">总打卡天数</div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">8</div>
                <div className="text-sm text-green-700">低卡选择次数</div>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">280</div>
                <div className="text-sm text-blue-700">平均热量(kcal)</div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">1200</div>
                <div className="text-sm text-purple-700">累计节省(kcal)</div>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* 功能菜单 */}
        <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
          <CardContent className="p-0">
            <div className="space-y-1">
              <button className="w-full flex items-center gap-3 p-4 hover:bg-amber-50 transition-colors">
                <Target className="w-5 h-5 text-amber-600" />
                <span className="text-gray-900">目标设置</span>
              </button>
              <button className="w-full flex items-center gap-3 p-4 hover:bg-amber-50 transition-colors">
                <Bell className="w-5 h-5 text-amber-600" />
                <span className="text-gray-900">提醒设置</span>
              </button>
              <button className="w-full flex items-center gap-3 p-4 hover:bg-amber-50 transition-colors">
                <HelpCircle className="w-5 h-5 text-amber-600" />
                <span className="text-gray-900">帮助与反馈</span>
              </button>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 p-4 hover:bg-red-50 transition-colors text-red-600"
              >
                <LogOut className="w-5 h-5" />
                <span>退出登录</span>
              </button>
            </div>
          </CardContent>
        </Card>
        <div className="pb-20" /> {/* 底部导航占位 */}
      </div>
    </div>
  )
}
