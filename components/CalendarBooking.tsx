"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, Video, MapPin } from "lucide-react"

const timeSlots = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00", "19:00", "20:00"]

const interviewTypes = [
  { id: "video", name: "视频面试", icon: Video, description: "腾讯会议/钉钉" },
  { id: "phone", name: "电话面试", icon: Clock, description: "语音通话" },
  { id: "offline", name: "线下面试", icon: MapPin, description: "地点待定" },
]

export default function CalendarBooking() {
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [selectedType, setSelectedType] = useState("video")
  const [isBooked, setIsBooked] = useState(false)

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      setIsBooked(true)
      // 这里可以集成真实的日历API
      setTimeout(() => {
        setIsBooked(false)
        setSelectedDate("")
        setSelectedTime("")
      }, 3000)
    }
  }

  const generateDates = () => {
    const dates = []
    const today = new Date()
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      dates.push(date)
    }
    return dates
  }

  return (
    <div className="cyber-card p-6">
      <h2 className="font-orbitron text-cyber-blue text-2xl mb-6 flex items-center gap-2">
        <Calendar className="w-6 h-6" />
        预约面试
      </h2>

      {isBooked ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8"
        >
          <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">✅</span>
          </div>
          <h3 className="text-green-400 text-xl font-semibold mb-2">预约成功！</h3>
          <p className="text-gray-300">面试邀请已发送至您的邮箱，同时包含项目案例包下载链接</p>
        </motion.div>
      ) : (
        <div className="space-y-6">
          {/* 面试类型选择 */}
          <div>
            <h3 className="text-cyber-pink font-semibold mb-3">面试方式</h3>
            <div className="grid grid-cols-1 gap-2">
              {interviewTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`p-3 rounded-lg border transition-all flex items-center gap-3 ${
                    selectedType === type.id
                      ? "border-cyber-blue bg-cyber-blue/10 text-cyber-blue"
                      : "border-gray-600 hover:border-gray-500 text-gray-300"
                  }`}
                >
                  <type.icon className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-medium">{type.name}</div>
                    <div className="text-xs opacity-70">{type.description}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 日期选择 */}
          <div>
            <h3 className="text-cyber-pink font-semibold mb-3">选择日期</h3>
            <div className="grid grid-cols-4 gap-2">
              {generateDates().map((date) => {
                const dateStr = date.toISOString().split("T")[0]
                const isSelected = selectedDate === dateStr
                return (
                  <button
                    key={dateStr}
                    onClick={() => setSelectedDate(dateStr)}
                    className={`p-2 rounded text-sm transition-all ${
                      isSelected
                        ? "bg-cyber-blue text-black font-semibold"
                        : "bg-gray-700 hover:bg-gray-600 text-gray-300"
                    }`}
                  >
                    <div>
                      {date.getMonth() + 1}/{date.getDate()}
                    </div>
                    <div className="text-xs opacity-70">
                      {["日", "一", "二", "三", "四", "五", "六"][date.getDay()]}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* 时间选择 */}
          <div>
            <h3 className="text-cyber-pink font-semibold mb-3">选择时间</h3>
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-2 rounded text-sm transition-all ${
                    selectedTime === time
                      ? "bg-cyber-pink text-black font-semibold"
                      : "bg-gray-700 hover:bg-gray-600 text-gray-300"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* 预约按钮 */}
          <button
            onClick={handleBooking}
            disabled={!selectedDate || !selectedTime}
            className={`w-full py-3 rounded-lg font-semibold transition-all ${
              selectedDate && selectedTime ? "cyber-button-primary" : "bg-gray-700 text-gray-500 cursor-not-allowed"
            }`}
          >
            确认预约面试
          </button>

          <div className="text-xs text-gray-400 text-center">预约后将自动发送项目案例包到您的邮箱</div>
        </div>
      )}
    </div>
  )
}
