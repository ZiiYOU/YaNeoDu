"use client"

import { LicensesType } from '@/types/licensesType'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Banner = () => {
    const [licenses,setLicenses] = useState<LicensesType[]>([])
    const [values, setValues] = useState<{date: string, location:string, license: string}>({date: '', location:'0', license: '0'})
    
    useEffect(()=>{
        const getLicenses = async () => {
            try{
              const res = await axios('/api/licenses')
              console.log(res.data)
              setLicenses(res.data)
            }catch(error){
              console.log('licenses error',error)
            }
        }
        getLicenses();
    }, [])

      const onChangeHandler = (event : any) => {
        const {name, value} = event.target;
        setValues((prev)=>{
          return {...prev, [name]: value}
        })
      }
  return (
    <>
        <div className="w-full h-80 bg-blue-100 flex flex-row items-center justify-center gap-32">
    <div className="w-3/12 min-w-72 text-6xl font-black flex flex-col gap-4 drop-shadow-md">
      <div className="text-white">야 ,</div>
      <div className="text-theme-color">너두</div>
      <div className="text-white">할 수 있어 !</div>
    </div>
    <div className="w-4/12 min-w-72 h-full flex flex-row items-end justify-end">
      <div className="w-11/12 h-full ml-16 py-10 flex flex-col items-center justify-end gap-6">
        <input type="date" name="date" value={values.date} onChange={onChangeHandler} className="w-11/12 h-8 px-4 bg-white border border-gray-300 border-solid rounded-lg drop-shadow-md" />
        <select name="license" value={values.license} onChange={onChangeHandler} className="w-11/12 h-8 px-4 bg-white border border-gray-300 border-solid rounded-lg drop-shadow-md" >
          {licenses.map((li:LicensesType)=>{
            return <option key={li.license_id} value={`${li.license_id}/${li.test_category}`}>{li.license_name}</option>
            })
         }
        </select>
      </div>
      <Link href={`/detail/?data=${values.date}&licenseId=${values.license.split('/')[0]}&test_category=${values.license.split('/')[1]}`} className="w-2/12 h-8 mb-10 flex items-center justify-center bg-gray-100 rounded-lg border border-solid border-gray-200 drop-shadow-lg cursor-pointer hover:bg-white hover:border-theme-color hover:text-theme-color hover:scale-110 ease-in duration-300 ">검색</Link>
    </div>
  </div>
    </>
  )
}

export default Banner