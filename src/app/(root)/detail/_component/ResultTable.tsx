"use client"

import { testType } from '@/types/testType';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import TestTableRow from './TestTableRow';

const ResultTable = ({date, test_category} : {date : string | null, test_category:string | null;}) => {
    const [test, setTest] = useState<testType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getTests = async () => {
          try{
            const { data } = await axios(`/api/licenseTest`,{params:{test_category, date}});
            setTest(data)
            setLoading(false)
          }catch(error){
            console.log(error)
          }
        };
    
        getTests();
        
      }, [date, test_category]);

    
      if (loading) {
        return (
          <div className="w-full min-w-1/2 mb-12 flex place-items-center flex-col">
            <div className="w-16 h-16 rounded-full border border-solid border-gray-100 border-t-blue-500 border-4 mt-32 animate-spin"></div>
            <div className="text-center mt-8">Loading...</div>
          </div>
        );
      }

  return (
    <section className="w-3/4 px-10 flex flex-col items-center mb-20">
            <div className="min-w-full flex flex-col justify-center px-20 mt-8">
              {test.length===0? (
                <div className='min-w-full p-8 flex flex-col justify-center border border-solid border-slate-300 bg-white rounded-lg drop-shadow-md'>
                  올해 예정된 시험 일정이 없습니다.
                </div>
              ): (test.map((info)=>{
                return (<table key={info.test_id} className='min-w-full flex flex-col justify-center border border-solid border-slate-300 rounded-sm drop-shadow-md' >
                          <tbody>
                            <TestTableRow title='필기시험 원서접수 기간' data={info.written_apply_duration} />
                            <TestTableRow title='필기시험 응시기간' data={`${info.written_test_start} - ${info.written_test_end}`} />
                            <TestTableRow title='필기시험 합격자 발표일' data={info.written_result_duration} />
                            <TestTableRow title='실기시험 원서접수 기간' data={info.practical_apply_duration} />
                            <TestTableRow title='실기시험 응시기간' data={`${info.practical_test_start} - ${info.practical_test_end}`} />
                            <TestTableRow title='실기시험 합격자 발표일' data={info.practical_result_duration} />
                          </tbody>
                          
                        </table>)
              }))}
            </div>
        </section>
  )
}

export default ResultTable

