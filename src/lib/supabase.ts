import { createClient, SupabaseClient } from '@supabase/supabase-js'
import type { LeadInsert } from '@/types/lead'

let supabaseInstance: SupabaseClient | null = null

function getSupabase(): SupabaseClient {
  if (supabaseInstance) return supabaseInstance

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase environment variables are not configured')
  }

  supabaseInstance = createClient(supabaseUrl, supabaseAnonKey)
  return supabaseInstance
}

export async function insertLead(lead: LeadInsert) {
  const supabase = getSupabase()
  const { data, error } = await supabase.from('leads').insert([lead]).select()

  if (error) {
    throw new Error(error.message)
  }

  return data
}
