import { createClient } from "@/supabase/client";
import { NextResponse } from "next/server";

export async function GET() {

  const supabase = createClient();

  const { data, error } = await supabase
  .from('posts')
  .select()
  .eq('category','질문');

  if (error) return NextResponse.json("", { status: 401 });

  return NextResponse.json(data);
}