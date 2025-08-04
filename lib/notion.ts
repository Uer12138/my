import { Client } from "@notionhq/client"

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export interface NotionProject {
  id: string
  title: string
  tagline: string
  cover?: string
  github?: string
  pdf?: string
  kpi?: number
  techStack: string[]
}

export async function getNotionProjects(): Promise<NotionProject[]> {
  try {
    if (!process.env.NOTION_DB) {
      // Return mock data for development
      return [
        {
          id: "1",
          title: "多模态智能交互小车",
          tagline: "校园场景AI原型开发，实现环境感知-身份识别-情感交互",
          cover: "/placeholder.svg?height=300&width=500&text=Smart+Interactive+Car",
          github: "https://github.com/tangdaqiang/smart-interactive-car",
          pdf: "/assets/project-smart-car.pdf",
          kpi: 98,
          techStack: ["MindSpore", "ModelArts", "Python", "Jetson Nano", "Open3D", "NLTK"],
        },
        {
          id: "2",
          title: "具身智能机器人导航系统",
          tagline: "基于深度学习的自主导航算法",
          cover: "/placeholder.svg?height=300&width=500&text=Robotic+Navigation",
          github: "https://github.com/tangdaqiang/robotic-navigation",
          pdf: "/assets/project-robotic-navigation.pdf",
          kpi: 95,
          techStack: ["ROS2", "Deep Learning", "SLAM", "TensorFlow"],
        },
        {
          id: "3",
          title: "具身智能安全防护系统",
          tagline: "实时监测与智能避障技术",
          cover: "/placeholder.svg?height=300&width=500&text=Safety+Protection",
          github: "https://github.com/tangdaqiang/safety-protection",
          pdf: "/assets/project-safety-protection.pdf",
          kpi: 97,
          techStack: ["Real-time Systems", "Computer Vision", "Path Planning", "C++"],
        },
      ]
    }

    const response = await notion.databases.query({
      database_id: process.env.NOTION_DB,
    })

    return response.results.map((page: any) => ({
      id: page.id,
      title: page.properties.Name?.title?.[0]?.plain_text || "Untitled",
      tagline: page.properties.Tagline?.rich_text?.[0]?.plain_text || "",
      cover: page.properties.Cover?.files?.[0]?.file?.url,
      github: page.properties.GitHub?.url,
      pdf: page.properties.PDF?.url,
      kpi: page.properties.KPI?.number,
      techStack: page.properties.TechStack?.multi_select?.map((tag: any) => tag.name) || [],
    }))
  } catch (error) {
    console.error("Error fetching Notion projects:", error)
    return []
  }
}
