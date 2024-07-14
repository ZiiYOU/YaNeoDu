"use client"

import React from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import ResultTable from './_component/ResultTable';
import Sticky from './_component/Sticky';


export default function Detail() {

  const searchParams = useSearchParams();
  const test_category = searchParams.get('test_category')
  const date = searchParams.get('date')
  const license = searchParams.get('license')

  return (
    <>
      <div className='w-9/12 h-28 mx-auto mt-12 px-16 border-b-2 border-solid border-gray-300 flex flex-row items-center justify-between '>
        <div className='min-w-64 text-3xl font-bold'>{`${license} 시험 정보`}</div>
        <Link href={'https://www.q-net.or.kr/man001.do?gSite=Q'} className='w-28 min-w-20 h-8 flex items-center justify-center bg-theme-color border border-solid border-theme-color text-white rounded-md drop-shadow-lg hover:bg-white hover:text-theme-color ease-in duration-300 '>{`원서접수 >`}</Link>
      </div>
      <div className="relative max-w-7xl mx-auto mt-8 px-10 flex flex-row justify-center">
        <ResultTable date={date} test_category={test_category}/>
        <Sticky/>
      </div>
    </>
    
  );
}
