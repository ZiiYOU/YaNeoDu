import { createClient } from "@/supabase/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  
  const supabase = createClient();

  const { data, error } = await supabase
  .from('licenses')
  .select('*')

  if (error) return NextResponse.json("", { status: 401 });

  return NextResponse.json(data);
}