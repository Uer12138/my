# 🚀 快速演示设置指南

## 步骤 1: 创建 Supabase 项目

1. 访问 [Supabase](https://supabase.com)
2. 点击 "Start your project"
3. 使用 GitHub 登录
4. 创建新项目，选择免费计划
5. 等待项目创建完成（约 1-2 分钟）

## 步骤 2: 获取项目配置

1. 在项目仪表板中，点击左侧菜单的 "Settings" → "API"
2. 复制以下信息：
   - **Project URL**: `https://your-project-id.supabase.co`
   - **anon public**: `your-anon-key`

## 步骤 3: 配置环境变量

1. 在项目根目录创建 `.env.local` 文件
2. 添加以下内容：

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## 步骤 4: 初始化数据库

1. 在 Supabase 仪表板中，点击左侧菜单的 "SQL Editor"
2. 点击 "New query"
3. 复制并粘贴 `scripts/init-database.sql` 文件的全部内容
4. 点击 "Run" 执行脚本

## 步骤 5: 启动应用

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)

## 步骤 6: 测试功能

### 注册新用户
1. 点击 "注册" 按钮
2. 输入用户名和密码
3. 填写个人信息（体重、身高、年龄、甜度偏好）
4. 系统会自动创建任务列表

### 登录测试
1. 点击 "登录" 按钮
2. 输入刚才注册的用户名和密码
3. 查看任务管理页面

### 任务管理
1. 点击 "任务管理" 按钮
2. 查看三个阶段的任务
3. 点击任务前的圆圈标记完成状态
4. 观察进度条变化

## 常见问题

### Q: 环境变量配置错误
A: 确保 `.env.local` 文件在项目根目录，且格式正确

### Q: 数据库连接失败
A: 检查 Supabase 项目状态，确保 URL 和密钥正确

### Q: 任务不显示
A: 确保用户已完成信息补充步骤，系统会自动初始化任务

### Q: 登录失败
A: 检查用户名密码是否正确，或重新注册新用户

## 演示数据

系统会自动为新用户创建以下任务：

### 第一阶段：基础认知建立
- 列出常喝奶茶及疑问
- 创建热量记录表格  
- 查阅每日卡路里标准

### 第二阶段：数据收集与记录
- 连续3天记录奶茶信息
- 获取配料热量数据

### 第三阶段：分析与调整
- 创建热量对比表
- 撰写摄入分析初稿
- 请朋友审阅分析
- 制定摄入计划

## 技术说明

- **密码加密**: MD5（仅用于演示）
- **数据库**: PostgreSQL via Supabase
- **前端**: Next.js 14 + TypeScript
- **样式**: Tailwind CSS + 自定义主题
- **部署**: 支持 Vercel 一键部署

## 下一步

1. **自定义任务**: 修改 `lib/auth.ts` 中的任务模板
2. **添加功能**: 扩展用户信息字段或任务类型
3. **部署上线**: 推送到 GitHub 并部署到 Vercel
4. **安全加固**: 在生产环境中使用更强的安全措施
