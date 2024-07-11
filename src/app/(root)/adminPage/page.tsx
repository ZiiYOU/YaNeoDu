"use client"

import { CheckLicense } from '@/types/test'
import React, { useEffect, useState } from 'react'
import Category from './_components/Category'
import LicenseLists from './_components/LicenseLists'

const Page = () => {
  const [licenses, setLicenses] = useState<CheckLicense[]>([])
  const [filterData, setFilterData] = useState('pending')
  // supabase데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/licensesCheck')
        const data = await response.json()

        if (response.ok) {
          setLicenses(data)
        } else {
          console.error('에러 발생', data.error)
        }
      } catch (error) {
        console.error('에러 발생', error)
      }
    }
    fetchData()
  }, [])

  // supabase 승인 상태 업데이트 & 승인 일자 업데이트
  const handleConfirm = async (id: number, is_confirm: boolean) => {
    try {
      const response = await fetch('/api/licensesCheck', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, is_confirm }),
      })

      const data = await response.json()

      if (response.ok) {
        setLicenses(licenses.map(license =>
          license.id === id ? { ...license, is_confirm: !is_confirm, confirm_date: !is_confirm ? new Date().toISOString().split('T')[0] : null } : license
        ))
      } else {
        console.error('에러 발생', data.error)
      }
    } catch (error) {
      console.error('에러 발생', error)
    }
  }

  // 승인 여부 필터링
  const filteredLicenses = licenses.filter((license)=> {
    if(filterData === 'pending') return !license.is_confirm
    if(filterData === 'confirmed') return license.is_confirm
    return true
  })

  const formatDate = (date : Date | string | null) => {
    if(date instanceof Date) { 
      return date.toLocaleString()
    }
    return date
  }

  return (
    <div className='max-w-[1300px] mx-auto flex flex-col'>
      <h1 className='mx-[120px] mt-[50px] text-3xl'>진위확인 신청 목록</h1>
      <div className='flex mt-[30px] ml-[50px]'>
        <button 
          className={`border-x border-t border-solid py-2 px-4 rounded ${filterData === 'pending'? 'bg-[#0090F9] text-white' : 'bg-white'}`}
          onClick={()=> setFilterData('pending')}
        >
          승인 대기중
        </button>
        <button 
          className={`border-x border-t py-2 px-4 border border-solid rounded ${filterData === 'confirmed'? 'bg-[#0090F9] text-white' : 'bg-white'}`}
          onClick={()=> setFilterData('confirmed')}
        >
          승인 완료
        </button>
      </div>
      <div className='border border-solid w-[1200px] mx-auto p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl mb-[50px]'>
        <table className='w-full border-collapse'>
          <Category />
          <LicenseLists filteredLicenses={filteredLicenses} formatDate={formatDate} handleConfirm={handleConfirm}/>
        </table>
      </div>
    </div>
  )
}

export default Page