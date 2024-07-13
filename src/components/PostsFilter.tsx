"use client"

import axios from 'axios'
import { useEffect, useState } from 'react'
import Select from 'react-select'

export default function PostsFilter() {
  const [licenses, setLicenses] = useState<[{value: string, label: string}]>([
    {
      value: "데이터를 가져오는 중...",
      label: "데이터를 가져오는 중...",
    }
  ])
  
  const category = [
    {value: "질문", label: "질문"},
    {value: "후기", label: "후기"},
  ]

  useEffect(() => {
    const getLicenses = async () => {
      const {data} = await axios.get('/api/licenses')
      const licensesArr = data.map((license: { license_name: string }) => ({
        value: license.license_name,
        label: license.license_name,
      }));
      setLicenses(licensesArr)
    }
    getLicenses();
  }, [])

  return (
    <div>
      <form className="flex gap-3 items-center justify-end">
        <div className="flex gap-3">
          <Select className="w-[180px] text-[12px]" options={licenses} />
          <Select className="w-[180px] text-[12px]" options={category} />
        </div>
        <div className="flex gap-3">
          <input type="text" placeholder="찾아보기" className="w-[220px] text-[12px] p-2 h-[38px] outline-none border border-gray-300 rounded-md" />
          <button className="text-gray-200 bg-theme-color transition-all hover:bg-[#0073c6] text-[12px] p-1 outline-none rounded-md border w-[50px]">검색</button>
        </div>
      </form>
    </div>
  )
}

