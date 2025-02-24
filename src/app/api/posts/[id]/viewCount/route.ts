import { createClient } from "@/supabase/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest, {params}: {params: {id: number}}) {
  const supabase = createClient();

  const id = params.id
  const {views} = await req.json()
  
  const { data, error } = await supabase
  .from('posts')
  .update({ views: views + 1 })
  .eq('post_id', id)
  .select()

  if(error) return NextResponse.json({error: error.message})
  
  return NextResponse.json(data, {status: 200})
}