import { createClient } from "@/supabase/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
  const supabase = createClient()

  const {searchParams} = new URL(req.url) /* 쿼리를 실어서 보낼 것 license, category */

  const license = searchParams.get("license")
  const category = searchParams.get("catergory")

  console.log("URL 파라미터 이름", license, category)

  /* 만약 선택을 하지 않은 경우에는 전체 항목을 검색한다. */

  const {data, error} = await supabase.from('comments').select('*').eq("license_name", license).eq("category", category)

  if(error) return NextResponse.json({error: error.message})

  return NextResponse.json(data, {status: 200})
}