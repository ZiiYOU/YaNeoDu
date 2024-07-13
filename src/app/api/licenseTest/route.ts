import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from "@/supabase/client";


export async function GET (request : NextRequest) {

  const { searchParams } = new URL(request.url)
  const test_category = searchParams.get('test_category')
  const date = searchParams.get('date')

  const supabase = createClient();

  const {data,error} = await supabase
  .from('test_date')
  .select('*')
  .eq('test_category',test_category)
  .gte('written_test_start',date)
  .limit(1);

  if (error) return NextResponse.json(console.log(error), { status: 401 });

  return NextResponse.json(data);

};
