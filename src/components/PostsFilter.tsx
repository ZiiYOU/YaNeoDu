"use client"

import axios from 'axios'
import { useEffect, useState } from 'react'
import Select from 'react-select'

type Props = {
  setItems: React.Dispatch<React.SetStateAction<[]>>
}

export default function PostsFilter({setItems}: Props) {
  const [licenseOption, setLicenseOption] = useState<string | null>()
  const [categoryOption, setCategoryOption] = useState<string | null>()

  const [licenses, setLicenses] = useState<[{value: string, label: string}]>([
    {
      value: "데이터를 가져오는 중...",
      label: "데이터를 가져오는 중...",
    }
  ])
  
  const category = [
    {value: "all", label: "전체"},
    {value: "질문", label: "질문"},
    {value: "후기", label: "후기"},
  ]

  useEffect(() => {
    const getLicenses = async () => {
      const {data} = await axios.get('/api/licenses')
      console.log(data)
      const licensesArr = data.map((license: { license_name: string }) => ({
        value: license.license_name,
        label: license.license_name,
      }));
      licensesArr.unshift({
        value: "all",
        label: "전체",
      })
      setLicenses(licensesArr)
    }
    getLicenses();
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if(!licenseOption || !categoryOption) {
      alert("항목을 선택 후에 검색해주세요.")
      return 
    }
    console.log("선택한 옵션은?",licenseOption, categoryOption)
    
    const {data} = await axios.get("http://localhost:3000/api/posts/filteredPost", {
      params: {
        license: licenseOption,
        category: categoryOption,
      }
    })

    setItems(data)
  }

  return (
    <div>
      <form className="flex gap-3 items-center justify-end" onSubmit={handleSubmit}>
        <div className="flex gap-3">
          <Select className="w-[180px] text-[12px]" placeholder="자격증 선택" options={licenses} onChange={(e) => {setLicenseOption(e!.value)}} />
          <Select className="w-[180px] text-[12px]" placeholder="카테고리 선택" options={category} onChange={(e) => {setCategoryOption(e!.value)}}/>
        </div>
        <div className="flex gap-3">
          <button className="text-gray-200 h-[38px] bg-theme-color transition-all hover:bg-[#0073c6] text-[12px] p-1 outline-none rounded-md border w-[50px]">검색</button>
        </div>
      </form>
    </div>
  )
}

