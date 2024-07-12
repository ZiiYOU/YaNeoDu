'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { parseString } from 'xml2js';
import { LicensesType } from '@/types/licensesType';
import { testType } from '@/types/testType';


export default function Detail() {
  const [test, setTest] = useState<testType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const {data} = await axios(`/api/licenseTest`);
        console.log(data)
        setTest(data)
        setLoading(false)
      }catch(error){
        console.log(error)
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center flex-col">
        <div className="w-16 h-16 rounded-full border border-solid border-gray-100 border-t-blue-500 border-4 mt-96 animate-spin"></div>
        <div className="text-center mt-8">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <div className='w-11/12 h-20 mt-12 mx-10 px-40 flex flex-row items-center text-2xl font-bold '>시험 정보</div>
        <div className="max-w-7xl mx-auto mt-8 px-10 flex flex-row justify-center">
        <section className="w-3/4 px-10 flex flex-col items-center mb-20">
            <div className="min-w-full flex flex-col border border-solid border-gray-300 rounded-lg py-4 px-8">
              {test.map((info)=>{
                return (<div key={info.test_id}>
                          <div className='h-1/6 flex flex-row py-4 items-center '>
                              <div className='w-1/3 py-4 border-r border-solid border-gray-500 '>필기시험 원서접수 기간</div>
                              <div className='w-2/3 py-4 px-12 flex items-center '>{info.written_apply_duration}</div>
                            </div>
                            <div className='h-1/6 flex flex-row py-4 items-center '>
                              <div className='w-1/3 py-4 border-r border-solid border-gray-500 '>필기시험 응시기간</div>
                              <div className='w-2/3 py-4 px-12 flex items-center '>{`${info.written_test_start} - ${info.written_test_end}`}</div>
                            </div>
                            <div className='h-1/6 flex flex-row py-4 items-center '>
                              <div className='w-1/3 py-4 border-r border-solid border-gray-500 '>필기시험 합격자 발표일</div>
                              <div className='w-2/3 py-4 px-12 flex items-center '>{info.written_result_duration}</div>
                            </div>
                            <div className='h-1/6 flex flex-row py-4 items-center '>
                              <div className='w-1/3 py-4 border-r border-solid border-gray-500 '>실기시험 원서접수 기간</div>
                              <div className='w-2/3 py-4 px-12 flex items-center '>{info.practical_apply_duration}</div>
                            </div>
                            <div className='h-1/6 flex flex-row py-4 items-center '>
                              <div className='w-1/3 py-4 border-r border-solid border-gray-500 '>실기시험 응시기간</div>
                              <div className='w-2/3 py-4 px-12 flex items-center '>{`${info.practical_test_start} - ${info.practical_test_end}`}</div>
                            </div>
                            <div className='h-1/6 flex flex-row py-4 items-center '>
                              <div className='w-1/3 py-4 border-r border-solid border-gray-500 '>실기시험 합격자 발표일</div>
                              <div className='w-2/3 py-4 px-12 flex items-center '>{info.practical_result_duration}</div>
                            </div>
                          </div>)
                        })}

            </div>
            {/* ))} */}
        </section>
        <aside className="w-1/4 h-1/4 bg-gray-100 border border-solid border-gray-300 flex flex-col rounded-lg mr-8 p-6 mb-28">
          <input type="date" className="bg-white border border-solid border-gray-300 rounded p-1 mb-3" />
          <input type="search" className="bg-white border border-solid border-gray-300 rounded p-1 mb-3" />
          <button className="mx-auto bg-blue-500 border border-solid border-theme-color text-white w-28 py-1 mt-5 rounded-md drop-shadow-lg hover:bg-white hover:text-theme-color ease-in duration-300">검색</button>
        </aside>
    </div>
    </>
    
  );
}
