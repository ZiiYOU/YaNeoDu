import { createClient } from "@/supabase/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, {params}: {params: {id: number}}) {
  const supabase = createClient();
  const {id} = params;
  const {data: posts, error} = await supabase.from('posts').select('*').eq('post_id', id).single()

  if(error) return NextResponse.json({error: error.message})
  
  return NextResponse.json(posts, {status: 200})
}