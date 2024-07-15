"use client"

import { LicensesType } from '@/types/licensesType';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Sticky = () => {
    const [licenses, setLicenses] = useState<LicensesType[]>([]);
    const [values, setValues] = useState<{[key:string]:string}>({date:'', license:''})

    const router = useRouter();

    useEffect(() => {
        const getLicenses = async () => {
          try{
            const { data } = await axios(`/api/licenses`);
            setLicenses(data)
            
          }catch(error){
          }
        }
    
        getLicenses();
      }, []);
    
      useEffect(()=>{
        if(licenses.length){
          setValues((prev) => {
          return {...prev, license :`${licenses[0].license_name}/${licenses[0].test_category}`}
        })
        }
        
      },[licenses])
    
    
    
      const onChangeHandler = (event :React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const {name, value} = event.target;
        setValues((prev)=>{
          return {...prev, [name]:value}
        })
      }
    
      const onSubmitHandler = () => {
        if(!values.date){
          alert('날짜를 입력해주세요!')
          return;
        }
    
        router.push(`/detail?date=${values.date}&license=${values.license.split('/')[0]}&test_category=${values.license.split('/')[1]}`)
      }

  return (
    <div className='sticky w-1/3 h-full mr-20 top-72  '>
          <aside className="min-w-64 h-1/4 bg-gray-100 border border-solid border-gray-300 flex flex-col rounded-lg mr-8 p-6 mb-4 drop-shadow-lg">
            <input type="date" name='date' value={values.date} onChange={onChangeHandler} className="bg-white border border-solid border-gray-300 rounded p-1 mb-3" />
            <select name='license' value={values.license} onChange={onChangeHandler} className="bg-white border border-solid border-gray-300 rounded p-1 mb-3">
              {licenses.map((license)=>{
                return <option key={license.license_id} value={`${license.license_name}/${license.test_category}`} >{license.license_name}</option>
              })}
            </select>
            <button onClick={onSubmitHandler} className="mx-auto bg-theme-color border border-solid border-theme-color text-white w-28 py-1 mt-5 rounded-md drop-shadow-lg hover:bg-white hover:text-theme-color ease-in duration-300">검색</button>
          </aside>
          <Link href={'/board'} className="min-w-64 h-1/12 max-h-12 flex items-center justify-center bg-white border border-gray-300 flex flex-col rounded-lg p-6 mb-28 mr-8 drop-shadow-lg text-center text-md text-gray-500 hover:bg-white hover:text-theme-color hover:border-theme-color ease-in duration-300 ">{`합격자 후기 바로가기 >`} </Link>
    </div>
  )
}

export default Sticky