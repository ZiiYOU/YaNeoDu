"use client"

import React from 'react'
import Category from './_components/Category'
import LicenseLists from './_components/LicenseLists'
import useLicenses from './_components/useLicenses'
import ConfirmState from './_components/ConfirmState'


const Page = () => {
  const { licenses, filterData, setFilterData, handleConfirm, filteredLicenses, formatDate} = useLicenses()

  return (
    <div className='max-w-[1300px] mx-auto flex flex-col'>
      <h1 className='mx-[120px] mt-[50px] text-3xl'>진위확인 신청 목록</h1>
      <ConfirmState setFilterData={setFilterData} filterData={filterData}/>
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