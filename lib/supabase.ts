import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 数据库表结构定义
export interface User {
  id: string
  username: string
  password_hash: string
  weight?: number
  height?: number
  age?: number
  sweetness_preference?: string
  created_at: string
  updated_at: string
}

export interface Phase {
  id: string
  name: string
  description: string
  order_index: number
  created_at: string
}

export interface Task {
  id: string
  user_id: string
  phase_id: string
  title: string
  description: string
  is_completed: boolean
  completed_at?: string
  order_index: number
  created_at: string
  updated_at: string
}
