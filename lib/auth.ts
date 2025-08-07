import { supabase } from './supabase'
import CryptoJS from 'crypto-js'

// MD5密码加密
export function hashPassword(password: string): string {
  return CryptoJS.MD5(password).toString()
}

// 用户注册
export async function registerUser(username: string, password: string) {
  try {
    // 检查用户名是否已存在
    const { data: existingUser } = await supabase
      .from('users')
      .select('id')
      .eq('username', username)
      .single()

    if (existingUser) {
      throw new Error('用户名已存在')
    }

    // 创建新用户
    const { data, error } = await supabase
      .from('users')
      .insert([
        {
          username,
          password_hash: hashPassword(password),
        }
      ])
      .select()
      .single()

    if (error) throw error
    return data
  } catch (error) {
    throw error
  }
}

// 用户登录
export async function loginUser(username: string, password: string) {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('username', username)
      .eq('password_hash', hashPassword(password))
      .single()

    if (error || !data) {
      throw new Error('用户名或密码错误')
    }

    return data
  } catch (error) {
    throw error
  }
}

// 更新用户信息
export async function updateUserProfile(userId: string, profileData: {
  weight?: number
  height?: number
  age?: number
  sweetness_preference?: string
}) {
  try {
    const { data, error } = await supabase
      .from('users')
      .update(profileData)
      .eq('id', userId)
      .select()
      .single()

    if (error) throw error
    return data
  } catch (error) {
    throw error
  }
}

// 初始化用户任务
export async function initializeUserTasks(userId: string) {
  try {
    // 获取所有阶段
    const { data: phases } = await supabase
      .from('phases')
      .select('*')
      .order('order_index')

    if (!phases) return

    // 为每个阶段创建任务
    const tasks = []
    let taskOrder = 1

    for (const phase of phases) {
      const phaseTasks = getPhaseTasks(phase.id, phase.name)
      for (const task of phaseTasks) {
        tasks.push({
          user_id: userId,
          phase_id: phase.id,
          title: task.title,
          description: task.description,
          is_completed: false,
          order_index: taskOrder++,
        })
      }
    }

    // 批量插入任务
    const { error } = await supabase
      .from('tasks')
      .insert(tasks)

    if (error) throw error
  } catch (error) {
    throw error
  }
}

// 获取阶段任务模板
function getPhaseTasks(phaseId: string, phaseName: string) {
  const taskTemplates = {
    '基础认知建立': [
      {
        title: '列出常喝奶茶及疑问',
        description: '用10分钟，列出自己常喝的5款奶茶及疑问（如"全糖奶茶热量有多高？""加珍珠会额外增加多少卡路里？"）'
      },
      {
        title: '创建热量记录表格',
        description: '创建奶茶热量记录表格，确定需记录的关键信息（奶茶名称、规格、甜度、配料、估算热量）'
      },
      {
        title: '查阅每日卡路里标准',
        description: '安排15分钟查阅资料，明确每日卡路里摄入标准（结合自身身高体重年龄）'
      }
    ],
    '数据收集与记录': [
      {
        title: '连续3天记录奶茶信息',
        description: '连续3天，每天记录所喝奶茶的详细信息（使用番茄工作法，固定时间记录避免遗漏）'
      },
      {
        title: '获取配料热量数据',
        description: '咨询营养师朋友或查阅权威资料，获取不同奶茶配料的热量数据（如奶盖、椰果、芋圆等）'
      }
    ],
    '分析与调整': [
      {
        title: '创建热量对比表',
        description: '创建常喝奶茶热量对比表，突出高/低热量选项及替代方案'
      },
      {
        title: '撰写摄入分析初稿',
        description: '撰写个人奶茶摄入分析初稿（如"每周喝3次全糖奶茶，超额摄入约800大卡"）'
      },
      {
        title: '请朋友审阅分析',
        description: '请有健康管理经验的朋友审阅分析，提供奶茶选择优化建议'
      },
      {
        title: '制定摄入计划',
        description: '根据建议制定个人奶茶摄入计划（如"换成半糖，每周不超过2次"）'
      }
    ]
  }

  return taskTemplates[phaseName as keyof typeof taskTemplates] || []
}

// 获取用户任务
export async function getUserTasks(userId: string) {
  try {
    const { data, error } = await supabase
      .from('tasks')
      .select(`
        *,
        phases (
          id,
          name,
          description,
          order_index
        )
      `)
      .eq('user_id', userId)
      .order('order_index')

    if (error) throw error
    return data
  } catch (error) {
    throw error
  }
}

// 更新任务完成状态
export async function updateTaskStatus(taskId: string, isCompleted: boolean) {
  try {
    const { data, error } = await supabase
      .from('tasks')
      .update({
        is_completed: isCompleted,
        completed_at: isCompleted ? new Date().toISOString() : null
      })
      .eq('id', taskId)
      .select()
      .single()

    if (error) throw error
    return data
  } catch (error) {
    throw error
  }
}
