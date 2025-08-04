# 🧠 cyber-seed.dev - 具身智能0→1破局者

> 赛博格机能风 × 「手心里长出的机器人」个人专业网站

## 🚀 项目概述

这是一个基于 Next.js 14 + Three.js + Notion CMS 的个人专业网站，专为具身智能领域的从业者设计。核心特色是3D机械掌交互和实时机器人生长动画，展现「手心里长出的机器人」的独特体验。

### ✨ 核心特性

- 🤖 **3D机械掌交互** - 拖拽指尖节点生成不同形态的机器人
- 🎤 **语音指令控制** - 支持"抓取"、"移动"等语音命令
- 📊 **HUD项目投射** - 赛博风格的项目展示界面
- 🎯 **技能雷达图** - 可视化技能评估系统
- 📅 **智能预约系统** - 集成日历预约功能
- 🎨 **赛博格美学** - 深石墨黑 + 电蓝 + 霓虹玫红配色

## 🛠 技术栈

- **前端框架**: Next.js 14 (App Router)
- **3D渲染**: Three.js + React Three Fiber
- **动画**: Framer Motion + Framer Motion 3D
- **样式**: Tailwind CSS + 自定义赛博风格
- **内容管理**: Notion API (Headless CMS)
- **字体**: Orbitron (标题) + Inter (正文)
- **部署**: Vercel

## 📁 项目结构

\`\`\`
cyber-seed-dev/
├── app/                    # Next.js 14 App Router
│   ├── page.tsx           # 首页 - 机械掌交互
│   ├── about/             # 关于页面
│   ├── contact/           # 联系页面
│   └── globals.css        # 全局样式
├── components/            # React 组件
│   ├── SplineHand.tsx     # 3D机械掌组件
│   ├── RobotGrowth.tsx    # 机器人生长动画
│   ├── ProjectHUD.tsx     # 项目HUD展示
│   ├── SkillRadar.tsx     # 技能雷达图
│   └── ...               # 其他组件
├── lib/
│   └── notion.ts          # Notion API 客户端
├── public/
│   ├── assets/           # 静态资源
│   └── models/           # 3D模型文件
└── tailwind.config.ts    # Tailwind 配置
\`\`\`

## 🚀 快速开始

### 1. 克隆项目

\`\`\`bash
git clone https://github.com/your-username/cyber-seed-dev.git
cd cyber-seed-dev
\`\`\`

### 2. 安装依赖

\`\`\`bash
npm install
# 或
yarn install
\`\`\`

### 3. 环境配置

复制 \`.env.example\` 为 \`.env.local\` 并填入配置：

\`\`\`env
NOTION_TOKEN=your_notion_integration_token
NOTION_DATABASE_ID=your_notion_database_id
\`\`\`

### 4. Notion 数据库设置

在 Notion 中创建数据库，包含以下字段：

| 字段名 | 类型 | 说明 |
|--------|------|------|
| Name | Title | 项目名称 |
| Tagline | Rich Text | 项目简介 |
| Cover | Files | 项目封面图 |
| GitHub | URL | GitHub 链接 |
| PDF | URL | 项目详情PDF |
| KPI | Number | 效率提升百分比 |
| TechStack | Multi-select | 技术栈标签 |
| Role | Rich Text | 个人角色 |
| Challenges | Rich Text | 技术难点 |
| Results | Rich Text | 项目成果 |

### 5. 启动开发服务器

\`\`\`bash
npm run dev
\`\`\`

访问 [http://localhost:3000](http://localhost:3000) 查看效果。

## 🎨 设计规范

### 配色方案
- **主色**: #0B0B0F (深石墨黑)
- **辅色**: #00F5FF (电蓝)
- **强调**: #FF0055 (霓虹玫红)

### 字体规范
- **标题**: Orbitron (赛博朋克风格)
- **正文**: Inter (现代无衬线)

### 组件样式
- **卡片**: 渐变背景 + 毛玻璃效果 + 霓虹边框
- **按钮**: 渐变填充 + 悬停发光效果
- **输入框**: 深色背景 + 聚焦高亮边框

## 📱 响应式设计

- **桌面端** (≥1200px): 完整3D交互体验
- **平板端** (768px-1199px): 简化3D效果
- **移动端** (≤767px): 静态展示 + 触摸优化

## 🔧 自定义配置

### 添加新项目

1. 在 Notion 数据库中添加新行
2. 填写项目信息
3. 网站将自动更新（30秒内）

### 修改个人信息

编辑以下文件：
- \`components/HeroSection.tsx\` - 首页介绍
- \`components/PersonalStory.tsx\` - 个人故事
- \`components/SkillRadar.tsx\` - 技能数据

### 更新3D模型

将新的 \`.glb\` 文件放入 \`public/models/\` 目录，并在相应组件中更新引用路径。

## 📊 性能优化

- **3D模型**: 使用 Draco 压缩，减少文件大小
- **图片**: WebP 格式，响应式加载
- **代码分割**: Next.js 自动代码分割
- **CDN**: Vercel Edge Network 全球加速

## 🚀 部署

### Vercel 部署（推荐）

1. 连接 GitHub 仓库到 Vercel
2. 设置环境变量
3. 自动部署完成

### 手动部署

\`\`\`bash
npm run build
npm run start
\`\`\`

## 📈 SEO 优化

- **元数据**: 每页面自定义 title 和 description
- **OG 图片**: 社交媒体分享优化
- **结构化数据**: JSON-LD 格式
- **性能**: Core Web Vitals 优化

## 🤝 贡献指南

1. Fork 项目
2. 创建特性分支 (\`git checkout -b feature/AmazingFeature\`)
3. 提交更改 (\`git commit -m 'Add some AmazingFeature'\`)
4. 推送到分支 (\`git push origin feature/AmazingFeature\`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系方式

- **作者**: 唐大强
- **邮箱**: 1627518646@qq.com
- **电话**: 13259800871
- **网站**: [cyber-seed.dev](https://cyber-seed.dev)

---

> 💡 **提示**: 这个项目展示了如何将传统的个人网站升级为具有未来感的3D交互体验。适合AI、机器人、前端开发等技术领域的从业者使用。
\`\`\`
\`\`\`

现在我来为你补充关键信息：

## 📋 补充的关键信息

### 一、核心身份与定位细化

**个人核心标签**：
- 🎯 **主攻方向**：服务机器人交互设计 + 工业机械臂场景落地
- 💡 **差异化价值主张**：「用3D交互+轻量化技术，让具身智能原型落地效率提升50%，将复杂的AI算法转化为直观的交互体验」

**目标受众细分**：
- 👔 **招聘官关注**：团队协作案例、技术难点攻坚经历、项目管理能力
- 👨‍💻 **从业者关注**：开源工具、技术踩坑指南、场景洞察分享

### 二、内容素材清单（已完成状态）

| 素材类型 | 具体要求 | 状态 |
|----------|----------|------|
| 自我介绍视频 | 60s竖屏，赛博风字幕 | ✅ 脚本已完成 |
| 项目封面图 | 1200×675px WebP | ✅ 3个核心项目 |
| 项目PDF | 每项目≤3页 | ✅ 结构已规划 |
| 3D模型 | 机械掌+机器人 | ✅ 代码实现 |
| 技能雷达数据 | 6维度评分 | ✅ 数据已设定 |
| 品牌语文案 | 简介+扩展 | ✅ 已集成 |

### 三、SEO与元数据（已优化）

**页面元数据**：
- **首页**：「cyber-seed.dev | 具身智能0→1破局者的赛博空间」
- **关于页**：「关于我 | 唐大强 - 具身智能0→1破局者」  
- **联系页**：「联系我 | 唐大强 - 具身智能0→1破局者」

### 四、15小时开发里程碑

| 里程碑 | 状态 | 实际输出 |
|--------|------|----------|
| M1 环境&模板 | ✅ | Next.js 14 + TypeScript 基础架构 |
| M2 Notion CMS | ✅ | 项目数据实时拉取 + 示例数据 |
| M3 3D场景制作 | ✅ | 机械掌交互 + 机器人生长动画 |
| M4 视觉主题 | ✅ | 赛博格配色 + 自定义组件库 |
| M5 内容填充 | ✅ | 个人信息 + 项目案例 + 故事 |
| M6 性能优化 | ✅ | 响应式设计 + 加载优化 |

🎉 **项目已完成！** 现在你可以：

1. **立即部署**：`git clone` → 填入 Notion Token → 部署到 Vercel
2. **个性化定制**：修改个人信息、添加真实项目数据
3. **持续更新**：通过 Notion 界面轻松管理项目内容
