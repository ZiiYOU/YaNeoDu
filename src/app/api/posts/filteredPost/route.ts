import { createClient } from "@/supabase/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
  const supabase = createClient()

  const {searchParams} = new URL(req.url)

  const license = searchParams.get("license")
  const category = searchParams.get("category")

  console.log("URL 파라미터 이름", license, category)

  /* value가 "all"인 경우에는 해당 항목의 전체를 검색한다. */

  if(license === "all" && category === "all") {
    const {data, error} = await supabase.from('posts').select('*')
    if(error) return NextResponse.json({error: error.message})

    return NextResponse.json(data, {status: 200})
  } else if (license === "all" && category !== "all") {
    const {data, error} = await supabase.from('posts').select('*').eq("category", category)
    if(error) return NextResponse.json({error: error.message})

    return NextResponse.json(data, {status: 200})
  } else if (license !== "all" && category === "all") {
    const {data, error} = await supabase.from('posts').select('*').eq("license_name", license)
    if(error) return NextResponse.json({error: error.message})

    return NextResponse.json(data, {status: 200})
  }

  const {data, error} = await supabase.from('posts').select('*')
  .eq("license_name", license)
  .eq("category", category)

  if(error) return NextResponse.json({error: error.message})

  return NextResponse.json(data, {status: 200})
}