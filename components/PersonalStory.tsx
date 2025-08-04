"use client"

import { motion } from "framer-motion"
import { Heart, Users, Star, Target, Coffee, Smile } from "lucide-react"

const stories = [
  {
    icon: Coffee,
    title: "我的美食最爱",
    content: "人是铁，饭是钢，我最爱的是饺子！蒸的鲜、煮的润、煎的香，韭菜鸡蛋馅是本命，一口一个根本停不下来～🥟",
    color: "#00F5FF",
  },
  {
    icon: Users,
    title: "学习之余的最大爱好",
    content:
      '放下书本，我就会立刻投身于和朋友一起"浪"的世界！压马路、探新店、追日落，哪怕只是坐在路边唠嗑，有朋友在身边就超治愈～🪁',
    color: "#FF0055",
  },
  {
    icon: Star,
    title: "关于我的小标签",
    content:
      "星座：踏实肯干的摩羯座♑ MBTI：ISFP，用感官感受世界的艺术家人格～🎨 隐藏技能：超会叠纸！千纸鹤、樱花、立体纸船都是基础～🔮",
    color: "#00F5FF",
  },
  {
    icon: Smile,
    title: "一件让我记忆犹新的糗事",
    content:
      "那天在街上看到个背影特像我朋友的人，我一时手痒上去就拍了下他屁股，结果是陌生人！那场面，现在想起来还脸红...朋友现在见我总先捂屁股😅",
    color: "#FF0055",
  },
  {
    icon: Heart,
    title: "我的一个小缺点",
    content:
      '人无完人嘛，我承认我在"拒绝别人"方面还有待提高~ 总怕拒绝会让对方不舒服，哪怕自己手头很忙，别人找帮忙还是会硬着头皮答应，朋友都说我是"老好人综合症"患者🤏',
    color: "#00F5FF",
  },
  {
    icon: Target,
    title: "对2026年的自己说句话",
    content:
      '"Hi，一年后的我，希望你已经在AI产品经理行业有一点小成就，把今年立下的flag实现了大半，不管遇到什么困难都没怂过，依然对世界保持好奇，笑得比现在更灿烂呀！😁"💌',
    color: "#FF0055",
  },
]

export default function PersonalStory() {
  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <h2 className="font-orbitron text-cyber-blue text-3xl mb-4">个人故事</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          除了技术，我也是一个有温度的人。这些小故事让我更加立体，也让我在追求技术的路上保持着人文关怀。
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stories.map((story, index) => (
          <motion.div
            key={story.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="cyber-card p-6 hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${story.color}20`, border: `2px solid ${story.color}` }}
              >
                <story.icon className="w-6 h-6" style={{ color: story.color }} />
              </div>

              <div className="flex-1">
                <h3 className="font-orbitron text-lg font-semibold mb-3" style={{ color: story.color }}>
                  {story.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">{story.content}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 核心价值观 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="cyber-card p-8 text-center mt-12"
      >
        <h3 className="font-orbitron text-cyber-blue text-2xl mb-4">我的核心价值观</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="space-y-2">
            <div className="w-16 h-16 bg-cyber-blue/20 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">🚀</span>
            </div>
            <h4 className="text-cyber-blue font-semibold">持续创新</h4>
            <p className="text-gray-300 text-sm">用技术改变世界，让AI更好地服务人类</p>
          </div>
          <div className="space-y-2">
            <div className="w-16 h-16 bg-cyber-pink/20 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">🤝</span>
            </div>
            <h4 className="text-cyber-pink font-semibold">团队协作</h4>
            <p className="text-gray-300 text-sm">相信团队的力量，共同成长共同进步</p>
          </div>
          <div className="space-y-2">
            <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">💡</span>
            </div>
            <h4 className="text-green-400 font-semibold">终身学习</h4>
            <p className="text-gray-300 text-sm">保持好奇心，在快速变化的技术世界中成长</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
