"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Coffee, User, Scale, Ruler, Calendar, Heart } from "lucide-react"
import { updateUserProfile, initializeUserTasks } from "@/lib/auth"

export default function ProfileSetupPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const userId = searchParams.get("userId")

  const [formData, setFormData] = useState({
    weight: "",
    height: "",
    age: "",
    sweetness_preference: ""
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const sweetnessOptions = [
    { value: "全糖", label: "全糖" },
    { value: "七分糖", label: "七分糖" },
    { value: "五分糖", label: "五分糖" },
    { value: "三分糖", label: "三分糖" },
    { value: "无糖", label: "无糖" }
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // 验证数据
      if (!formData.weight || !formData.height || !formData.age || !formData.sweetness_preference) {
        setError("请填写所有信息")
        setIsLoading(false)
        return
      }

      const weight = parseFloat(formData.weight)
      const height = parseFloat(formData.height)
      const age = parseInt(formData.age)

      if (weight <= 0 || height <= 0 || age <= 0) {
        setError("请输入有效的数值")
        setIsLoading(false)
        return
      }

      // 更新用户信息
      await updateUserProfile(userId!, {
        weight,
        height,
        age,
        sweetness_preference: formData.sweetness_preference
      })

      // 初始化用户任务
      await initializeUserTasks(userId!)

      // 跳转到主页
      router.push("/")
    } catch (error: any) {
      setError(error.message || "保存失败，请重试")
    } finally {
      setIsLoading(false)
    }
  }

  if (!userId) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm border-amber-200">
          <CardContent className="p-6 text-center">
            <p className="text-amber-600">无效的用户信息</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm border-amber-200">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
              <Coffee className="w-7 h-7 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-amber-900">完善个人信息</CardTitle>
          <p className="text-amber-600">帮助我们为你定制专属的奶茶管理计划</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-medium text-amber-800 flex items-center">
                <Scale className="w-4 h-4 mr-2" />
                体重 (kg)
              </label>
              <Input
                type="number"
                step="0.1"
                value={formData.weight}
                onChange={(e) => handleInputChange("weight", e.target.value)}
                placeholder="请输入体重"
                required
                className="border-amber-200 focus:border-amber-400"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-amber-800 flex items-center">
                <Ruler className="w-4 h-4 mr-2" />
                身高 (cm)
              </label>
              <Input
                type="number"
                step="0.1"
                value={formData.height}
                onChange={(e) => handleInputChange("height", e.target.value)}
                placeholder="请输入身高"
                required
                className="border-amber-200 focus:border-amber-400"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-amber-800 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                年龄
              </label>
              <Input
                type="number"
                value={formData.age}
                onChange={(e) => handleInputChange("age", e.target.value)}
                placeholder="请输入年龄"
                required
                className="border-amber-200 focus:border-amber-400"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-amber-800 flex items-center">
                <Heart className="w-4 h-4 mr-2" />
                奶茶甜度偏好
              </label>
              <div className="grid grid-cols-2 gap-2">
                {sweetnessOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleInputChange("sweetness_preference", option.value)}
                    className={`p-3 rounded-md border text-sm font-medium transition-colors ${
                      formData.sweetness_preference === option.value
                        ? "bg-amber-100 border-amber-400 text-amber-800"
                        : "bg-white border-amber-200 text-amber-600 hover:bg-amber-50"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-white"
            >
              {isLoading ? "保存中..." : "完成设置"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
