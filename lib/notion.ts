import { Client } from "@notionhq/client"

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export interface NotionProject {
  id: string
  title: string
  tagline: string
  cover: string
  github: string
  pdf: string
  kpi: number
  techStack: string[]
  role: string
  challenges: string[]
  results: string
}

// 示例项目数据作为后备
const fallbackProjects: NotionProject[] = [
  {
    id: "1",
    title: "桌面级机械臂抓取系统0→1",
    tagline: "基于ROS的智能抓取系统，实现多物体识别与精准操控",
    cover: "/placeholder.svg?height=200&width=400",
    github: "https://github.com/example/robotic-arm",
    pdf: "/assets/project-robotic-arm.pdf",
    kpi: 67,
    techStack: ["ROS", "OpenCV", "Python", "C++", "PCL"],
    role: "全栈开发+交互设计负责人",
    challenges: [
      "多物体识别准确率低：采用YOLO v5 + 深度学习优化，准确率提升至95%+",
      "抓取路径规划复杂：基于RRT*算法实现动态避障，成功率提升40%",
    ],
    results: "原型迭代周期从2周压缩至3天，抓取成功率达到92%",
  },
  {
    id: "2",
    title: "AI驱动的智能小车导航系统",
    tagline: "融合计算机视觉与自然语言处理的智能导航解决方案",
    cover: "/placeholder.svg?height=200&width=400",
    github: "https://github.com/example/smart-car",
    pdf: "/assets/project-smart-car.pdf",
    kpi: 85,
    techStack: ["MindSpore", "ModelArts", "OpenCV", "NLP", "ROS"],
    role: "AI算法工程师+系统架构师",
    challenges: [
      "三维点云重建精度不足：优化算法模型，精准还原物体空间结构",
      "人脸识别实时性差：模型轻量化处理，识别准确率达98%+",
    ],
    results: "实现多模态感知融合，导航精度提升85%，响应时间缩短60%",
  },
  {
    id: "3",
    title: "具身智能交互原型平台",
    tagline: "基于Web技术的3D交互展示平台，支持实时机器人形态生成",
    cover: "/placeholder.svg?height=200&width=400",
    github: "https://github.com/example/embodied-ai",
    pdf: "/assets/project-embodied-ai.pdf",
    kpi: 50,
    techStack: ["Next.js", "Framer Motion", "WebGL", "TypeScript", "CSS3"],
    role: "前端架构师+3D交互设计师",
    challenges: [
      "交互响应性能优化：采用CSS3动画替代重型3D渲染，帧率提升至60fps",
      "跨设备兼容性问题：响应式设计+渐进增强，支持率达95%+",
    ],
    results: "用户交互体验提升50%，页面加载时间缩短至2秒内",
  },
  {
    id: "4",
    title: "多模态情感分析系统",
    tagline: "基于MindSpore的文本情感识别与分析平台",
    cover: "/placeholder.svg?height=200&width=400",
    github: "https://github.com/example/emotion-analysis",
    pdf: "/assets/project-emotion-analysis.pdf",
    kpi: 73,
    techStack: ["MindSpore", "BERT", "Python", "Flask", "Vue.js"],
    role: "NLP算法工程师+后端开发",
    challenges: [
      "多语言情感识别准确率低：采用预训练BERT模型微调，准确率提升至93%",
      "实时处理性能瓶颈：模型量化+缓存优化，响应时间降至200ms",
    ],
    results: "支持7种语言情感分析，处理效率提升73%，准确率达93%+",
  },
  {
    id: "5",
    title: "智能制造质检系统",
    tagline: "基于计算机视觉的工业产品缺陷检测解决方案",
    cover: "/placeholder.svg?height=200&width=400",
    github: "https://github.com/example/quality-inspection",
    pdf: "/assets/project-quality-inspection.pdf",
    kpi: 92,
    techStack: ["OpenCV", "TensorFlow", "Python", "FastAPI", "React"],
    role: "计算机视觉工程师+系统集成",
    challenges: [
      "微小缺陷检测难度大：采用注意力机制+数据增强，检测精度提升至99.2%",
      "生产线实时性要求高：边缘计算部署，检测速度提升至毫秒级",
    ],
    results: "缺陷检出率达99.2%，误检率降低92%，为企业节省成本30%+",
  },
]

export async function getNotionProjects(): Promise<NotionProject[]> {
  // 如果没有配置 Notion Token，直接返回示例数据
  if (!process.env.NOTION_TOKEN || !process.env.NOTION_DATABASE_ID) {
    console.log("Notion API not configured, using fallback data")
    return fallbackProjects
  }

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
      sorts: [
        {
          property: "Created",
          direction: "descending",
        },
      ],
    })

    const projects = response.results.map((page: any) => ({
      id: page.id,
      title: page.properties.Name?.title?.[0]?.plain_text || "未命名项目",
      tagline: page.properties.Tagline?.rich_text?.[0]?.plain_text || "",
      cover: page.properties.Cover?.files?.[0]?.file?.url || page.properties.Cover?.files?.[0]?.external?.url || "",
      github: page.properties.GitHub?.url || "",
      pdf: page.properties.PDF?.url || "",
      kpi: page.properties.KPI?.number || 0,
      techStack: page.properties.TechStack?.multi_select?.map((tag: any) => tag.name) || [],
      role: page.properties.Role?.rich_text?.[0]?.plain_text || "开发者",
      challenges: page.properties.Challenges?.rich_text?.[0]?.plain_text?.split("\n") || [],
      results: page.properties.Results?.rich_text?.[0]?.plain_text || "",
    }))

    // 如果 Notion 返回空数据，使用后备数据
    return projects.length > 0 ? projects : fallbackProjects
  } catch (error) {
    console.error("Error fetching Notion projects:", error)
    // 发生错误时返回示例数据
    return fallbackProjects
  }
}

// 获取单个项目详情
export async function getNotionProject(id: string): Promise<NotionProject | null> {
  // 先尝试从后备数据中查找
  const fallbackProject = fallbackProjects.find((project) => project.id === id)

  if (!process.env.NOTION_TOKEN || !process.env.NOTION_DATABASE_ID) {
    return fallbackProject || null
  }

  try {
    const response = await notion.pages.retrieve({ page_id: id })
    // 处理 Notion 页面数据...
    return fallbackProject || null // 简化处理，返回后备数据
  } catch (error) {
    console.error("Error fetching Notion project:", error)
    return fallbackProject || null
  }
}
