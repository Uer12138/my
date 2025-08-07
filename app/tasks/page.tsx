"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Circle, Coffee, Target, TrendingUp, BarChart3 } from "lucide-react"
import { getUserTasks, updateTaskStatus } from "@/lib/auth"

interface Task {
  id: string
  title: string
  description: string
  is_completed: boolean
  completed_at?: string
  phases: {
    id: string
    name: string
    description: string
    order_index: number
  }
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const userData = localStorage.getItem("teacal_user")
    if (userData) {
      const parsed = JSON.parse(userData)
      setUser(parsed)
      loadTasks(parsed.id)
    }
  }, [])

  const loadTasks = async (userId: string) => {
    try {
      const userTasks = await getUserTasks(userId)
      setTasks(userTasks || [])
    } catch (error) {
      console.error("加载任务失败:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleTaskToggle = async (taskId: string, isCompleted: boolean) => {
    try {
      await updateTaskStatus(taskId, !isCompleted)
      // 重新加载任务
      if (user) {
        await loadTasks(user.id)
      }
    } catch (error) {
      console.error("更新任务状态失败:", error)
    }
  }

  // 按阶段分组任务
  const groupedTasks = tasks.reduce((acc, task) => {
    const phaseName = task.phases.name
    if (!acc[phaseName]) {
      acc[phaseName] = {
        phase: task.phases,
        tasks: []
      }
    }
    acc[phaseName].tasks.push(task)
    return acc
  }, {} as Record<string, { phase: any; tasks: Task[] }>)

  // 计算完成进度
  const totalTasks = tasks.length
  const completedTasks = tasks.filter(task => task.is_completed).length
  const progressPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center">
        <div className="text-amber-600">加载中...</div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center">
        <div className="text-amber-600">请先登录</div>
      </div>
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
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-amber-900">任务管理</h1>
                <p className="text-xs text-amber-600">奶茶卡路里管理计划</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                {completedTasks}/{totalTasks} 已完成
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* 进度概览 */}
        <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-amber-900">整体进度</h2>
              <span className="text-2xl font-bold text-amber-600">{progressPercentage}%</span>
            </div>
            <div className="w-full bg-amber-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-amber-400 to-orange-400 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="text-sm text-amber-600 mt-2">
              继续加油！完成所有任务后你将掌握科学的奶茶管理方法
            </p>
          </CardContent>
        </Card>

        {/* 任务列表 */}
        <div className="space-y-6">
          {Object.entries(groupedTasks).map(([phaseName, phaseData]) => {
            const phaseTasks = phaseData.tasks
            const phaseCompleted = phaseTasks.filter(task => task.is_completed).length
            const phaseProgress = phaseTasks.length > 0 ? Math.round((phaseCompleted / phaseTasks.length) * 100) : 0

            return (
              <Card key={phaseName} className="bg-white/70 backdrop-blur-sm border-amber-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-amber-900">{phaseName}</CardTitle>
                        <p className="text-sm text-amber-600">{phaseData.phase.description}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-amber-300 text-amber-700">
                      {phaseCompleted}/{phaseTasks.length}
                    </Badge>
                  </div>
                  <div className="w-full bg-amber-200 rounded-full h-2 mt-3">
                    <div
                      className="bg-gradient-to-r from-amber-400 to-orange-400 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${phaseProgress}%` }}
                    ></div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {phaseTasks.map((task) => (
                      <div
                        key={task.id}
                        className={`p-4 rounded-lg border transition-all duration-200 ${
                          task.is_completed
                            ? "bg-green-50 border-green-200"
                            : "bg-white border-amber-200 hover:border-amber-300"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <button
                            onClick={() => handleTaskToggle(task.id, task.is_completed)}
                            className="mt-1 text-amber-600 hover:text-amber-800 transition-colors"
                          >
                            {task.is_completed ? (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            ) : (
                              <Circle className="w-5 h-5" />
                            )}
                          </button>
                          <div className="flex-1">
                            <h3 className={`font-medium ${
                              task.is_completed ? "text-green-800 line-through" : "text-amber-900"
                            }`}>
                              {task.title}
                            </h3>
                            <p className={`text-sm mt-1 ${
                              task.is_completed ? "text-green-600" : "text-amber-600"
                            }`}>
                              {task.description}
                            </p>
                            {task.is_completed && task.completed_at && (
                              <p className="text-xs text-green-500 mt-2">
                                完成于 {new Date(task.completed_at).toLocaleDateString()}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* 提示信息 */}
        <Card className="bg-amber-50/50 border-amber-200">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <Coffee className="w-5 h-5 text-amber-600 mt-0.5" />
              <div>
                <h3 className="font-medium text-amber-900">小贴士</h3>
                <p className="text-sm text-amber-700 mt-1">
                  按照阶段顺序完成任务，每个阶段都为你掌握奶茶管理技能打下基础。
                  点击任务前的圆圈可以标记完成状态。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
