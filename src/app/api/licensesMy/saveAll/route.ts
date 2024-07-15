import { createClient } from '@/supabase/client';
import { TLicense } from '@/types/licenses';
import { NextRequest, NextResponse } from 'next/server';

const supabase = createClient();

export async function POST(req: NextRequest) {
  try {
    const licenses: TLicense[] = await req.json();
    console.log("Received licenses:", licenses);
    const errors: string[] = [];
    const results: any[] = [];

    for (const license of licenses) {
      // Check if the license already exists
      const { data: existingLicense, error: fetchError } = await supabase
        .from('license_check')
        .select('license_check_id')
        .eq('license_check_id', license.license_check_id)
        .single();
      console.log("License check ID:", license.license_check_id, "License:", license);

      if (fetchError && fetchError.code !== 'PGRST116') {
        // If there's an error other than "No rows found" (PGRST116), add it to errors
        errors.push(fetchError.message);
        continue;
      }

      if (existingLicense) {
        // If the license exists, update it
        const { data, error } = await supabase
          .from('license_check')
          .update({
            user_id: license.user_id,
            license_name: license.license_name,
            license_number: license.license_number,
            license_issue: new Date(license.license_issue),
            license_sub_number: license.license_sub_number,
            is_confirm: license.is_confirm,
            user_birth: license.user_birth,
            user_name: license.user_name,
            id: license.id,
          })
          .eq('license_check_id', license.license_check_id);

        if (error) {
          errors.push(error.message);
        } else {
          results.push(data);
        }

      } else {
        // If the license does not exist, insert it
        const { data, error } = await supabase
          .from('license_check')
          .insert({
            license_check_id: license.license_check_id,
            user_id: license.user_id,
            license_name: license.license_name,
            license_number: license.license_number,
            license_issue: new Date(license.license_issue),
            license_sub_number: license.license_sub_number,
            is_confirm: license.is_confirm,
            user_birth: license.user_birth,
            user_name: license.user_name,
            id: license.id,
          });

        if (error) {
          errors.push(error.message);
        } else {
          results.push(data);
        }
      }
    }

    if (errors.length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: results }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}

/* export async function methodNotAllowed(req: NextRequest) {
  return NextResponse.json({ success: false, message: 'Method not allowed' }, { status: 405 });
} */
