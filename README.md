# 🧠 轻茶纪 - 奶茶卡路里管理应用

> 用户登录注册系统 + 奶茶卡路里管理任务系统

## 🚀 项目概述

这是一个基于 Next.js 14 + Supabase 的奶茶卡路里管理应用，包含完整的用户登录注册系统和任务管理功能。用户可以通过三个阶段的任务来学习科学的奶茶管理方法。

### ✨ 核心特性

- 🔐 **用户认证系统** - 完整的注册、登录、信息补充流程
- 📋 **任务管理系统** - 按阶段分组显示奶茶管理任务
- 📊 **进度可视化** - 实时显示任务完成进度
- 🎯 **个性化设置** - 根据用户身体信息和偏好定制任务
- 📱 **响应式设计** - 适配各种设备屏幕

## 🛠 技术栈

- **前端框架**: Next.js 14 (App Router)
- **数据库**: Supabase (PostgreSQL)
- **样式**: Tailwind CSS + 自定义奶茶主题
- **组件库**: Radix UI + Lucide React
- **认证**: 自建用户系统 + MD5 加密
- **部署**: Vercel

## 📁 项目结构

```
v0-clone-website/
├── app/                    # Next.js 14 App Router
│   ├── page.tsx           # 首页 - 登录/注册入口
│   ├── login/             # 登录页面
│   ├── register/          # 注册页面
│   ├── profile-setup/     # 用户信息补充页面
│   ├── tasks/             # 任务管理页面
│   └── globals.css        # 全局样式
├── components/            # React 组件
│   └── ui/               # UI 组件库
├── lib/                  # 工具函数
│   ├── supabase.ts       # Supabase 客户端
│   └── auth.ts           # 认证相关函数
├── scripts/              # 数据库脚本
│   └── init-database.sql # 数据库初始化脚本
└── tailwind.config.ts    # Tailwind 配置
```

## 🚀 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/your-username/v0-clone-website.git
cd v0-clone-website
```

### 2. 安装依赖

```bash
npm install
```

### 3. 环境配置

复制 `env.example` 为 `.env.local` 并填入配置：

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

### 4. Supabase 数据库设置

1. 访问 [Supabase](https://supabase.com) 创建新项目
2. 在 SQL 编辑器中执行 `scripts/init-database.sql` 文件内容
3. 获取项目 URL 和匿名密钥，填入环境变量

### 5. 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看效果。

## 📋 功能说明

### 用户注册流程

1. **访问首页** - 未登录用户看到登录/注册入口
2. **点击注册** - 进入注册页面
3. **填写信息** - 输入用户名和密码
4. **补充信息** - 填写体重、身高、年龄、甜度偏好
5. **自动初始化** - 系统自动为用户创建任务列表
6. **开始使用** - 进入主页，可以查看任务管理

### 任务管理系统

系统包含三个阶段的奶茶卡路里管理任务：

#### 第一阶段：基础认知建立
- 列出常喝奶茶及疑问
- 创建热量记录表格
- 查阅每日卡路里标准

#### 第二阶段：数据收集与记录
- 连续3天记录奶茶信息
- 获取配料热量数据

#### 第三阶段：分析与调整
- 创建热量对比表
- 撰写摄入分析初稿
- 请朋友审阅分析
- 制定摄入计划

## 🎨 设计规范

### 配色方案
- **主色**: #F59E0B (琥珀色)
- **辅色**: #EA580C (橙色)
- **背景**: #FEF3C7 (浅琥珀)

### 组件样式
- **卡片**: 半透明背景 + 毛玻璃效果 + 琥珀边框
- **按钮**: 渐变填充 + 悬停发光效果
- **输入框**: 浅色背景 + 聚焦高亮边框

## 📱 响应式设计

- **桌面端** (≥1200px): 完整功能体验
- **平板端** (768px-1199px): 优化布局
- **移动端** (≤767px): 触摸优化

## 🔧 自定义配置

### 添加新任务

在 `lib/auth.ts` 的 `getPhaseTasks` 函数中添加新任务模板。

### 修改用户信息字段

1. 更新数据库表结构
2. 修改 `lib/auth.ts` 中的接口定义
3. 更新相关页面组件

### 自定义样式

修改 `tailwind.config.ts` 和 `app/globals.css` 来自定义主题色彩。

## 📊 性能优化

- **代码分割**: Next.js 自动代码分割
- **静态生成**: 页面预渲染优化
- **图片优化**: Next.js 图片组件自动优化
- **CDN**: Vercel Edge Network 全球加速

## 🚀 部署

### Vercel 部署（推荐）

1. 连接 GitHub 仓库到 Vercel
2. 设置环境变量
3. 自动部署完成

### 手动部署

```bash
npm run build
npm run start
```

## 📈 SEO 优化

- **元数据**: 每页面自定义 title 和 description
- **OG 图片**: 社交媒体分享优化
- **结构化数据**: JSON-LD 格式
- **性能**: Core Web Vitals 优化

## 🔒 安全说明

⚠️ **重要提醒**：这是一个 Demo 项目，使用了简化的安全措施：

1. **密码加密**：使用 MD5（仅用于 Demo）
2. **无 RLS**：移除了 Supabase 的行级安全策略
3. **客户端存储**：用户信息存储在 localStorage

在生产环境中，请：
- 使用更强的密码加密算法（如 bcrypt）
- 启用 Supabase RLS 策略
- 使用服务端会话管理
- 添加输入验证和清理

## 🤝 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系方式

- **作者**: 唐大强
- **邮箱**: 1627518646@qq.com
- **电话**: 13259800871

---

> 💡 **提示**: 这个项目展示了如何构建一个完整的用户认证系统和任务管理应用。适合学习 Next.js、Supabase 和现代 Web 开发技术。
