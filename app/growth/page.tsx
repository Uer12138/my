"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, TrendingUp, Target, Award, Calendar, Coffee, Heart } from "lucide-react"
import Link from "next/link"

// 模拟数据
const weeklyData = [
  { day: "周一", calories: 280, isLowCal: true },
  { day: "周二", calories: 0, isLowCal: false },
  { day: "周三", calories: 180, isLowCal: true },
  { day: "周四", calories: 420, isLowCal: false },
  { day: "周五", calories: 240, isLowCal: true },
  { day: "周六", calories: 380, isLowCal: false },
  { day: "周日", calories: 200, isLowCal: true },
]

const achievements = [
  { id: 1, title: "低卡达人", description: "连续3天选择低卡奶茶", icon: "🌟", unlocked: true },
  { id: 2, title: "平衡大师", description: "一周内平均热量控制在300kcal以下", icon: "⚖️", unlocked: true },
  { id: 3, title: "尝鲜专家", description: "尝试5种不同的低卡配方", icon: "🎯", unlocked: false },
  { id: 4, title: "坚持之星", description: "连续打卡7天", icon: "💫", unlocked: false },
]

const weeklyGoals = [
  { id: 1, title: "尝试1次无糖+椰果搭配", completed: false, progress: 0 },
  { id: 2, title: "选择3次低卡奶茶", completed: true, progress: 100 },
  { id: 3, title: "平均热量控制在280kcal", completed: true, progress: 100 },
]

export default function GrowthPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("本周")

  const totalCalories = weeklyData.reduce((sum, day) => sum + day.calories, 0)
  const avgCalories = Math.round(totalCalories / weeklyData.filter((d) => d.calories > 0).length)
  const lowCalDays = weeklyData.filter((day) => day.isLowCal && day.calories > 0).length
  const totalDays = weeklyData.filter((day) => day.calories > 0).length

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
            <h1 className="text-lg font-semibold text-amber-900">成长记录</h1>
            <div className="w-16" /> {/* 占位 */}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* 时间选择 */}
        <div className="flex gap-2">
          {["本周", "本月", "全部"].map((period) => (
            <Button
              key={period}
              variant={selectedPeriod === period ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedPeriod(period)}
              className={
                selectedPeriod === period ? "bg-amber-500 hover:bg-amber-600" : "border-amber-200 hover:bg-amber-50"
              }
            >
              {period}
            </Button>
          ))}
        </div>
        {/* 本周总结 */}
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-800">
              <TrendingUp className="w-5 h-5" />
              本周表现
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-white/50 p-4 rounded-lg">
              <h3 className="font-medium text-green-800 mb-2">🎉 你真的很棒！</h3>
              <p className="text-sm text-green-700 leading-relaxed">
                本周你有 <span className="font-semibold">{lowCalDays}</span> 天选择了低卡奶茶， 比上周多了2天！平均热量{" "}
                <span className="font-semibold">{avgCalories}kcal</span>，
                比目标低了15%。周末的全糖奶茶是和朋友的美好回忆，偶尔放松是为了更好地坚持呀～
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">{totalDays}</div>
                <div className="text-xs text-green-700">打卡天数</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">{avgCalories}</div>
                <div className="text-xs text-blue-700">平均热量</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">{Math.round((lowCalDays / totalDays) * 100)}%</div>
                <div className="text-xs text-purple-700">低卡选择</div>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* 每日数据 */}
        <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
          <CardHeader>
            <CardTitle className="text-amber-900">每日记录</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {weeklyData.map((day, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                      {day.calories > 0 ? (
                        <Coffee className="w-4 h-4 text-amber-600" />
                      ) : (
                        <span className="text-xs text-gray-400">-</span>
                      )}
                    </div>
                    <span className="font-medium text-gray-900">{day.day}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {day.calories > 0 ? (
                      <>
                        <span className="text-sm font-semibold text-gray-900">{day.calories}kcal</span>
                        {day.isLowCal && <Badge className="bg-green-100 text-green-700 text-xs">低卡</Badge>}
                      </>
                    ) : (
                      <span className="text-sm text-gray-400">未打卡</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        {/* 本周目标 */}
        <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-amber-900">
              <Target className="w-5 h-5 text-blue-500" />
              本周小目标
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {weeklyGoals.map((goal) => (
              <div key={goal.id} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    goal.completed ? "bg-green-500" : "bg-gray-300"
                  }`}
                >
                  {goal.completed && <span className="text-white text-xs">✓</span>}
                </div>
                <div className="flex-1">
                  <span className={`text-sm ${goal.completed ? "text-green-700 line-through" : "text-gray-900"}`}>
                    {goal.title}
                  </span>
                </div>
                {goal.completed && <Badge className="bg-green-100 text-green-700 text-xs">已完成</Badge>}
              </div>
            ))}
          </CardContent>
        </Card>
        {/* 成就徽章 */}
        <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-amber-900">
              <Award className="w-5 h-5 text-yellow-500" />
              成就徽章
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`p-4 rounded-lg border-2 text-center ${
                    achievement.unlocked ? "border-yellow-300 bg-yellow-50" : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <div className="text-2xl mb-2">{achievement.icon}</div>
                  <h3
                    className={`font-medium text-sm mb-1 ${achievement.unlocked ? "text-yellow-800" : "text-gray-500"}`}
                  >
                    {achievement.title}
                  </h3>
                  <p className={`text-xs ${achievement.unlocked ? "text-yellow-700" : "text-gray-400"}`}>
                    {achievement.description}
                  </p>
                  {achievement.unlocked && <Badge className="bg-yellow-100 text-yellow-700 text-xs mt-2">已解锁</Badge>}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        {/* 下周建议 */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <Calendar className="w-5 h-5" />
              下周小目标
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="bg-white/50 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-blue-800">🎯 尝试无糖茉莉绿茶</span>
              </div>
              <p className="text-xs text-blue-700">茉莉花香天然甜味，试试看能不能接受</p>
            </div>
            <div className="bg-white/50 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-blue-800">🥥 椰果替代珍珠2次</span>
              </div>
              <p className="text-xs text-blue-700">椰果口感Q弹，热量比珍珠低30%</p>
            </div>
            <div className="bg-white/50 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-blue-800">📝 记录心情标签</span>
              </div>
              <p className="text-xs text-blue-700">了解自己在什么情况下更容易选择高卡奶茶</p>
            </div>
          </CardContent>
        </Card>
        {/* 鼓励卡片 */}
        <Card className="bg-gradient-to-r from-pink-50 to-rose-50 border-pink-200">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-pink-500" />
            </div>
            <h3 className="font-medium text-pink-800 mb-2">你在享受和健康间找到了平衡</h3>
            <p className="text-sm text-pink-700">每一次聪明的选择都值得庆祝，继续保持这份对自己的关爱～</p>
          </CardContent>
        </Card>
        <div className="pb-20" /> {/* 底部导航占位 */}
      </div>
    </div>
  )
}
