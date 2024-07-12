import { createClient } from "@/supabase/client"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const supabase = createClient()

  const post = await req.json()

  const {data, error} = await supabase.from('posts').insert([post]).select()
  if(error) return NextResponse.json({error: error.message})
  
  return NextResponse.json(data, {status: 200})
}

export async function GET(req: NextRequest) {
  const supabase = createClient()

  const {data, error} = await supabase.from('posts').select('*')

  if(error) return NextResponse.json({error: error.message})

  return NextResponse.json(data, {status: 200})
}