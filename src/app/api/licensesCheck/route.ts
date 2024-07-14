
import { createClient } from '@/supabase/client'
import { NextRequest, NextResponse } from 'next/server'

const supabase = createClient()

export async function GET(req: NextRequest) {
  try {
    const { data, error } = await supabase
      .from('license_check')
      .select('*')

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: '서버 에러 발생' }, { status: 500 })
  }
}
export async function PATCH(req: NextRequest) {
  try {
    const { license_check_id, is_confirm, confirm_date }: { license_check_id: string, is_confirm: boolean, confirm_date: string | null } = await req.json()

    if (!license_check_id) {
      return NextResponse.json({ error: 'Invalid request data' }, { status: 400 })
    }

    const { data, error } = await supabase
      .from('license_check')
      .update({
        is_confirm: is_confirm,
        confirm_date: confirm_date
      })
      .eq('license_check_id', license_check_id)

    if (error) {
      console.error('업데이트 중 오류 발생:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.error('PATCH 요청 중 오류 발생:', error)
    return NextResponse.json({ error: '서버 에러 발생' }, { status: 500 })
  }
}
