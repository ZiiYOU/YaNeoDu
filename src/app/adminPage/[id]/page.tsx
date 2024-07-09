"use client"
import React, { useState } from 'react'


const page = () => {
  const [isActive, setIsActive] = useState(false)
  const toggleActive = () => {
    setIsActive(!isActive)
  }
  return (
    <div>
      <h1 className='mx-[120px] mt-[50px] text-3xl'>진위확인 신청 목록</h1>
      <div className='border border-solid w-[1200px] mx-auto mt-[40px] p-3 rounded-xl'>
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
            <tr className='border-b border-solid'>
              <td className='p-[18px] text-center'>test1</td>
              <td className='p-[18px] text-center'>홍길동</td>
              <td className='p-[18px] text-center'>2024.07.09</td>
              <td className='p-[18px] text-center'>12345678A</td>
              <td className='p-[18px] text-center'>2024.01.01</td>
              <td className='p-[18px] text-center'>12345678</td>
              <td className='p-[18px] text-center'>2024.01.01</td>
              <td>
                <button className={`border border-solid py-[7px] px-[10px] rounded-xl text-white ${isActive ? 'bg-[#FF3030]' : 'bg-[#0090F9]'}`} onClick={toggleActive}>
                  {isActive? '승인취소' : '승인확인'}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default page