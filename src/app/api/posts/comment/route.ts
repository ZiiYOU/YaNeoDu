import { createClient } from "@/supabase/client"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const supabase = createClient()

  const comment = await req.json() /* SendComment type으로 보낸다 */

  const {data, error} = await supabase.from('comments').insert([comment]).select()
  if(error) return NextResponse.json({error: error.message})
  
  return NextResponse.json(data, {status: 200})
}

export async function GET(req: NextRequest) {
  const supabase = createClient()

  const {searchParams} = new URL(req.url)

  const id = searchParams.get("id")

  console.log(searchParams.get("id"))

  const {data, error} = await supabase.from('comments').select('*').eq("post_id", id)

  if(error) return NextResponse.json({error: error.message})

  return NextResponse.json(data, {status: 200})
}

export async function DELETE(req: NextRequest) {
  const supabase = createClient()

  const {searchParams} = new URL(req.url)
  const commentId = searchParams.get("commentId")

  console.log(commentId)

  const { error } = await supabase
  .from('comments')
  .delete()
  .eq('comment_id', commentId)

  if(error) return NextResponse.json({error: error.message})

  return NextResponse.json({status: 200})
}