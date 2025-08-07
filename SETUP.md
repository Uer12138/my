# 轻茶纪 - 用户登录注册系统设置指南

## 系统概述

这是一个完整的用户登录注册系统，包含奶茶卡路里管理任务功能。系统使用 Supabase 作为后端数据库，Next.js 作为前端框架。

## 功能特性

### 用户认证
- ✅ 用户注册（用户名 + 密码）
- ✅ 用户登录验证
- ✅ 密码 MD5 加密存储
- ✅ 用户信息补充（体重、身高、年龄、甜度偏好）

### 任务管理
- ✅ 自动初始化用户任务列表
- ✅ 按阶段分组显示任务
- ✅ 任务完成状态管理
- ✅ 进度统计和可视化

### 任务内容
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

## 数据库设置

### 1. 创建 Supabase 项目

1. 访问 [Supabase](https://supabase.com)
2. 创建新项目
3. 获取项目 URL 和匿名密钥

### 2. 执行数据库初始化脚本

在 Supabase SQL 编辑器中执行 `scripts/init-database.sql` 文件内容：

```sql
-- 创建用户表
CREATE TABLE IF NOT EXISTS users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  weight DECIMAL(5,2),
  height DECIMAL(5,2),
  age INTEGER,
  sweetness_preference VARCHAR(20),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建阶段表（公共表，不关联用户）
CREATE TABLE IF NOT EXISTS phases (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  order_index INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建任务表
CREATE TABLE IF NOT EXISTS tasks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  phase_id UUID NOT NULL REFERENCES phases(id) ON DELETE CASCADE,
  title VARCHAR(200) NOT NULL,
  description TEXT,
  is_completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMP WITH TIME ZONE,
  order_index INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 插入默认阶段数据
INSERT INTO phases (name, description, order_index) VALUES
('基础认知建立', '了解奶茶热量基础知识，建立个人认知体系', 1),
('数据收集与记录', '系统记录奶茶摄入数据，建立数据基础', 2),
('分析与调整', '分析数据并制定个人奶茶摄入计划', 3)
ON CONFLICT DO NOTHING;

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_users_username ON users(username);
CREATE INDEX IF NOT EXISTS idx_tasks_user_id ON tasks(user_id);
CREATE INDEX IF NOT EXISTS idx_tasks_phase_id ON tasks(phase_id);
CREATE INDEX IF NOT EXISTS idx_phases_order ON phases(order_index);

-- 创建更新时间触发器
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_tasks_updated_at BEFORE UPDATE ON tasks
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

### 3. 配置环境变量

复制 `env.example` 为 `.env.local` 并填入你的 Supabase 配置：

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

## 安装和运行

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

## 使用流程

### 新用户注册流程

1. **访问首页** - 未登录用户看到登录/注册入口
2. **点击注册** - 进入注册页面
3. **填写信息** - 输入用户名和密码
4. **补充信息** - 填写体重、身高、年龄、甜度偏好
5. **自动初始化** - 系统自动为用户创建任务列表
6. **开始使用** - 进入主页，可以查看任务管理

### 用户登录流程

1. **访问首页** - 点击登录按钮
2. **输入凭据** - 输入用户名和密码
3. **验证登录** - 系统验证用户信息
4. **进入主页** - 登录成功后进入主页面

### 任务管理

1. **查看任务** - 点击"任务管理"按钮
2. **按阶段浏览** - 任务按三个阶段分组显示
3. **标记完成** - 点击任务前的圆圈标记完成状态
4. **查看进度** - 实时查看整体和分阶段进度

## 技术架构

### 前端技术栈
- **Next.js 14** - React 框架
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式框架
- **Radix UI** - 组件库
- **Lucide React** - 图标库

### 后端技术栈
- **Supabase** - 数据库和认证
- **PostgreSQL** - 关系型数据库
- **MD5** - 密码加密（Demo 用途）

### 数据库设计

#### 用户表 (users)
- `id` - 用户唯一标识
- `username` - 用户名（唯一）
- `password_hash` - MD5 加密的密码
- `weight` - 体重 (kg)
- `height` - 身高 (cm)
- `age` - 年龄
- `sweetness_preference` - 甜度偏好

#### 阶段表 (phases)
- `id` - 阶段唯一标识
- `name` - 阶段名称
- `description` - 阶段描述
- `order_index` - 排序索引

#### 任务表 (tasks)
- `id` - 任务唯一标识
- `user_id` - 关联用户ID
- `phase_id` - 关联阶段ID
- `title` - 任务标题
- `description` - 任务描述
- `is_completed` - 完成状态
- `completed_at` - 完成时间
- `order_index` - 排序索引

## 安全说明

⚠️ **重要提醒**：这是一个 Demo 项目，使用了简化的安全措施：

1. **密码加密**：使用 MD5（仅用于 Demo）
2. **无 RLS**：移除了 Supabase 的行级安全策略
3. **客户端存储**：用户信息存储在 localStorage

在生产环境中，请：
- 使用更强的密码加密算法（如 bcrypt）
- 启用 Supabase RLS 策略
- 使用服务端会话管理
- 添加输入验证和清理

## 部署

### Vercel 部署（推荐）

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 配置环境变量
4. 部署完成

### 手动部署

```bash
npm run build
npm run start
```

## 故障排除

### 常见问题

1. **数据库连接失败**
   - 检查环境变量配置
   - 确认 Supabase 项目状态

2. **任务不显示**
   - 检查用户是否完成信息补充
   - 确认数据库表结构正确

3. **登录失败**
   - 检查用户名密码是否正确
   - 确认数据库连接正常

## 开发说明

### 添加新任务

在 `lib/auth.ts` 的 `getPhaseTasks` 函数中添加新任务模板。

### 修改用户信息字段

1. 更新数据库表结构
2. 修改 `lib/auth.ts` 中的接口定义
3. 更新相关页面组件

### 自定义样式

修改 `tailwind.config.ts` 和 `app/globals.css` 来自定义主题色彩。

## 许可证

MIT License
