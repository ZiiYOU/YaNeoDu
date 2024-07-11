"use client"

import { supabase } from '@/supabase/SupabaseClient'
import { CheckLicense } from '@/types/test'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [licenses, setLicenses] = useState<CheckLicense[]>([])
  const [filterData, setFilterData] = useState('pending')
  // supabase데이터 가져오기
  useEffect(()=> {
    const fetchData = async () => {
      const { data, error} = await supabase
        .from('admin_test')
        .select('*')
      if (error) {
        console.error('에러발생' , error)
      }
      setLicenses(data)
    }
    fetchData()
  },[])

  // supabase 승인 상태 업데이트 & 승인 일자 업데이트
  const handleConfirm = async(id : number, is_confirm : boolean) => {
    const confirmDate = new Date().toISOString().split('T')[0]
    const {data, error} = await supabase
      .from('admin_test')
      .update({
        is_confirm : !is_confirm,
        confirm_date : !is_confirm ? confirmDate : null
      })
      .eq('id', id)
    if ( error) {
      console.error('에러 발생', error)
    } else {
      setLicenses(licenses.map(license => 
        license.id === id ? {...license, is_confirm : !is_confirm, confirm_date : !is_confirm ? confirmDate : null} : license
      ))
    }
  }

  // 승인 여부 필터링
  const filteredLicenses = licenses.filter((license)=> {
    if(filterData === 'pending') return !license.is_confirm
    if(filterData === 'confirmed') return license.is_confirm
    return true
  })



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
          <thead>
            <tr className='border-b border-solid'>
              <th className='p-[18px] text-center'>아이디</th>
              <th className='p-[18px] text-center'>이름</th>
              <th className='p-[18px] text-center'>생년월일</th>
              <th className='p-[18px] text-center'>자격증번호</th>
              <th className='p-[18px] text-center'>자격증 발급일</th>
              <th className='p-[18px] text-center'>자격증내자격번호</th>
              <th className='p-[18px] text-center'>확인 일자</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              filteredLicenses.map((license)=> (
                <tr className='border-b border-solid' key={license.id}>
                  <td className='p-[18px] text-center'>{license.user_id}</td>
                  <td className='p-[18px] text-center'>{license.user_name}</td>
                  <td className='p-[18px] text-center'>{license.user_birth}</td>
                  <td className='p-[18px] text-center'>{license.license_number}</td>
                  <td className='p-[18px] text-center'>{license.license_issue}</td>
                  <td className='p-[18px] text-center'>{license.license_sub_number}</td>
                  <td className='p-[18px] text-center'>{license.confirm_date}</td>
                  <td>
                    <button 
                      className={`border border-solid py-[7px] px-[10px] rounded-xl text-white ${license.is_confirm ? 'bg-[#FF3030]' : 'bg-[#0090F9]'}`}
                      onClick={() => handleConfirm(license.id, license.is_confirm)}
                    >
                      {license.is_confirm? '승인취소' : '승인확인'}
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Page