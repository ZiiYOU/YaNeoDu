import { createClient } from "@/supabase/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const supabase = createClient();
  const licenses = await request.json();

  if (!Array.isArray(licenses)) {
    return NextResponse.json({ error: "Invalid data format" }, { status: 400 });
  }

  const errors = [];
  const results = [];

  for (const license of licenses) {
    const { id, user_id, license_name, license_number, license_issue, license_sub_number, is_confirm, user_name, user_birth } = license;

    if (!id || !user_id || !license_name || !license_number || !license_issue || !license_sub_number || !user_name || !user_birth) {
      errors.push({ id, error: "Missing required fields" });
      continue;
    }

    const { data, error } = await supabase
      .from('license_check')
      .upsert({
        id,
        user_id,
        license_name,
        license_number,
        license_issue,
        license_sub_number,
        is_confirm,
        user_name,
        user_birth
      }, { onConflict: ['id'] });

    if (error) {
      console.error(`Error upserting license with id ${id}:`, error);
      errors.push({ id, error: error.message });
    } else {
      results.push(data);
    }
  }

  if (errors.length > 0) {
    return NextResponse.json({ errors }, { status: 500 });
  }

  return NextResponse.json({ results });
}
