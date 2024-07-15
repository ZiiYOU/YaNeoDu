import { createClient } from "@/supabase/client";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params; 
  const supabase = createClient();

  if (!id) {
    return NextResponse.json({ error: "ID parameter is required" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('license_check')
    .select()
    .eq('user_id', id);

  if (error) {
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }

  console.log('Data fetched:', data);

  return NextResponse.json(data);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const supabase = createClient();

  const { data, error } = await supabase
    .from('license_check')
    .delete()
    .eq('license_check_id', id);

  if (error) {
    console.error("에러:", error);
    return NextResponse.json({ error: "에러" }, { status: 500 });
  }

  console.log('삭제 데이터:', data);

  return NextResponse.json({ message: "삭제 데이터 successfully" });
}
