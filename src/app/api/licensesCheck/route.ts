
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
    const { id, is_confirm }: { id: number, is_confirm: boolean } = await req.json()
    const confirmDate = new Date().toISOString().split('T')[0]
    const { data, error } = await supabase
      .from('license_check')
      .update({
        is_confirm: !is_confirm,
        confirm_date: !is_confirm ? confirmDate : null
      })
      .eq('id', id)

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: '서버 에러 발생' }, { status: 500 })
  }
}