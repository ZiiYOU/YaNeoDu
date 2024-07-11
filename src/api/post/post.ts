import { Post, SupabaseResponse } from "@/types/post"
import { createClient } from "@/utils/supabase/client"

export async function insertPost(post: Post) {
  try {
    const {license, category, is_confirm, content, comments, views} = post
    const supabase = createClient()
    const response = await supabase.from('posts').insert([
        { 
          license,
          category,
          is_confirm,
          content,
          comments,
          views,
        },
      ])
    
  } catch (error) {
    
  }
  

  
}