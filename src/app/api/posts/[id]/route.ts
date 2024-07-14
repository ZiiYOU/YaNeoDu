import { createClient } from "@/supabase/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, {params}: {params: {id: number}}) {
  const supabase = createClient();
  const id = params.id;
  const {data: posts, error} = await supabase.from('posts').select('*').eq('post_id', id).single()

  if(error) return NextResponse.json({error: error.message})
  
  return NextResponse.json(posts, {status: 200})
}

export async function DELETE(req: NextRequest, {params}: {params: {id: number}}) {
  const supabase = createClient();

  const id = params.id
  
  const { error } = await supabase
  .from('posts')
  .delete()
  .eq('post_id', id)

  if(error) return NextResponse.json({error: error.message})
  
  return NextResponse.json({status: 200})
}

export async function PATCH(req: NextRequest, {params}: {params: {id: number}}) {
  const supabase = createClient();

  const id = params.id
  const {title, content} = await req.json()

  console.log("id와 post의 값은?", id, title, content)
  
  const { data, error } = await supabase
  .from('posts')
  .update({ title, content })
  .eq('post_id', id)
  .select()

  if(error) return NextResponse.json({error: error.message})
  
  return NextResponse.json(data, {status: 200})
}