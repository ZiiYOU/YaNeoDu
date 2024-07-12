import { createClient } from "@/supabase/client";
import { getServerSession } from "@/utils/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = createClient();

  const session = await getServerSession();
  
  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const userId = session.user.id;

  const { data, error } = await supabase
    .from('licenses_check')
    .select()
    .eq('user_id', userId);

  if (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }

  console.log(data);

  return NextResponse.json(data);
}
