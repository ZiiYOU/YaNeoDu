'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LicensesType } from '@/types/licensesType';
import { testType } from '@/types/testType';
import { NextRequest } from 'next/server';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import TestTableRow from './_component/TestTableRow';


export default function Detail(request: NextRequest) {
  const [test, setTest] = useState<testType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [licenses, setLicenses] = useState<LicensesType[]>([]);
  const [values, setValues] = useState<{[key:string]:string}>({date:'', license:'멀티미디어콘텐츠제작전문가/기사'})

  const router = useRouter();
  const searchParams = useSearchParams();
  const test_category = searchParams.get('test_category')
  const date = searchParams.get('date')
  const license = searchParams.get('license')

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

    const getLicenses = async () => {
      try{
        const { data } = await axios(`/api/licenses`);

        setLicenses(data)
      }catch(error){
        console.log('fetch data error => ', error)
      }
    }

    getTests();
    getLicenses();
    
  }, [date, test_category]);

  if (loading) {
    return (
      <div className="flex justify-center items-center flex-col">
        <div className="w-16 h-16 rounded-full border border-solid border-gray-100 border-t-blue-500 border-4 mt-96 animate-spin"></div>
        <div className="text-center mt-8">Loading...</div>
      </div>
    );
  }
// Event 의 타입을 Select 와 Input 을 통일시키는 법은 없는 걸까요?
  const onChangeInputHandler = (event :React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setValues((prev)=>{
      return {...prev, [name]:value}
    })
    console.log(values)
  }

  const onChangeSelectHandler = (event :React.ChangeEvent<HTMLSelectElement>) => {
    const {name, value} = event.target;
    setValues((prev)=>{
      return {...prev, [name]:value}
    })
    console.log(values)
  }

  const onSubmitHandler = () => {
    if(!values.date){
      alert('날짜를 입력해주세요!')
      return;
    }

    router.push(`/detail?date=${values.date}&license=${values.license.split('/')[0]}&test_category=${values.license.split('/')[1]}`)
  }

  return (
    <>
      <div className='w-9/12 h-28 mx-auto mt-12 px-16 border-b-2 border-solid border-gray-300 flex flex-row items-center justify-between '>
        <div className='text-3xl font-bold'>{`${license} 시험 정보`}</div>
        <Link href={'https://www.q-net.or.kr/man001.do?gSite=Q'} className='w-28 h-8 flex items-center justify-center bg-theme-color border border-solid border-theme-color text-white rounded-md drop-shadow-lg hover:bg-white hover:text-theme-color ease-in duration-300 '>{`원서접수 >`}</Link>
      </div>
      <div className="relative max-w-7xl mx-auto mt-8 px-10 flex flex-row justify-center">
        <section className="w-3/4 px-10 flex flex-col items-center mb-20">
            <div className="min-w-full flex flex-col justify-center px-20 mt-8">
              {test.map((info)=>{
                return (<table key={info.test_id} className='min-w-full flex flex-col justify-center border-2 border-solid border-slate-300 rounded-sm' >
                          <TestTableRow title='필기시험 원서접수 기간' data={info.written_apply_duration} />
                          <TestTableRow title='필기시험 응시기간' data={`${info.written_test_start} - ${info.written_test_end}`} />
                          <TestTableRow title='필기시험 합격자 발표일' data={info.written_result_duration} />
                          <TestTableRow title='실기시험 원서접수 기간' data={info.practical_apply_duration} />
                          <TestTableRow title='실기시험 응시기간' data={`${info.practical_test_start} - ${info.practical_test_end}`} />
                          <TestTableRow title='실기시험 합격자 발표일' data={info.practical_result_duration} />
                        </table>)
              })}
            </div>
        </section>
        <div className='sticky w-1/3 h-full mr-20 top-72  '>
          <aside className="min-w-64 h-1/4 bg-gray-100 border border-solid border-gray-300 flex flex-col rounded-lg mr-8 p-6 mb-4 drop-shadow-lg">
            <input type="date" name='date' value={values.date} onChange={onChangeInputHandler} className="bg-white border border-solid border-gray-300 rounded p-1 mb-3" />
            <select name='license' value={values.license} onChange={onChangeSelectHandler} className="bg-white border border-solid border-gray-300 rounded p-1 mb-3">
              {licenses.map((license)=>{
                return <option key={license.license_id} value={`${license.license_name}/${license.test_category}`} >{license.license_name}</option>
              })}
            </select>
            <button onClick={onSubmitHandler} className="mx-auto bg-theme-color border border-solid border-theme-color text-white w-28 py-1 mt-5 rounded-md drop-shadow-lg hover:bg-white hover:text-theme-color ease-in duration-300">검색</button>
          </aside>
          <aside className="min-w-64 h-1/12 max-h-12 flex items-center justify-center bg-white border border-gray-300 flex flex-col rounded-lg p-6 mb-28 mr-8 drop-shadow-lg text-center text-md text-gray-500 hover:bg-white hover:text-theme-color hover:border-theme-color ease-in duration-300 ">{`합격자 후기 바로가기 >`} </aside>
        </div>
      </div>
    </>
    
  );
}
