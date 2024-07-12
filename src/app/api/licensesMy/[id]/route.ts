import { createClient } from "@/supabase/client";
import { NextResponse } from "next/server";

export async function GET(params: { id: string }) {
  const { id } = params;
  const supabase = createClient();
  const { data, error } = await supabase
    .from('licenses_check')
    .select()
    .eq('user_id', id);
  
  return NextResponse.json(data);
}
