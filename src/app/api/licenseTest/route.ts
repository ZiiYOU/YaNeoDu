import axios from 'axios';
import { NextResponse } from 'next/server';
import { createClient } from "@/supabase/client";


export async function GET () {

  const supabase = createClient();

  const {data,error} = await supabase
  .from('test_date')
  .select('*')
  .eq('test_category','기사')
  .gte('written_test_start','2024-01-21')
  .limit(1);

  if (error) return NextResponse.json(console.log(error), { status: 401 });

  return NextResponse.json(data);

};
