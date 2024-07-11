import { Post } from "@/types/post"
import { createClient } from "@/supabase/client"
import { NextResponse } from "next/server"

export async function POST(post: Post) {
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
  
  if(response?.error) return NextResponse.json("", {status: 401})
  
  console.log(response)
}