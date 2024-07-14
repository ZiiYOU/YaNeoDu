"use client"

import { Send } from '@/types/post'
import useAuthStore from '@/zustand/store/authStore'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import Select from 'react-select'

export default function Write() {
  const {isAuthenticated, user} = useAuthStore((state) => state);

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

  const [licenseOption, setLicenseOption] = useState<string | null>()
  const [categoryOption, setCategoryOption] = useState<string | null>()

  const [certify, setCertify] = useState<boolean>(false)
  const title = useRef<HTMLInputElement>(null)
  const content = useRef<HTMLTextAreaElement>(null)

  const router = useRouter();

  useEffect(() => {
    /* if (!isAuthenticated) {
      router.push('/login')
    } */

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

  const handlePost = async (e: React.FormEvent): Promise<void> => {
    /* 미완성 , 전역으로 관리되는 유저 정보를 가지고 와야 한다.*/
    e.preventDefault()
    if(!title.current?.value.trim() || !content.current?.value.trim()) {
      alert("작성된 제목 또는 내용이 없습니다.")
      return 
    }
    if(!licenseOption || !categoryOption) {
      alert("자격증 또는 카테고리가 선택되지 않았습니다.")
      return 
    }
    try {
      const post: Send = {
        user_id: "로그인 상태의 사용자 고유 ID",
        nickname: "로그인 상태의 사용자 닉네임",
        license_name: licenseOption!,
        category: categoryOption!,
        is_confirm: certify,
        comments: null,
        views: 0,
        title: title.current!.value,
        content: content.current!.value
      }
      const response = await axios.post("/api/posts", post);
      router.push("/board")
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const handleCancel = (e: React.FormEvent) => {
    e.preventDefault()
    if(!confirm("작성 중인 글은 저장되지 않습니다. 글 작성을 취소하시겠습니까?")) return
    router.back()
  }

  return (
    <>
      <div className="flex justify-between items-center p-3">
        <h1 className="text-2xl"><Link className="transition-all hover:text-theme-color" href={"/board"}>질문 및 후기</Link></h1>
      </div>
      <p className="h-[1px] w-full ml-auto mr-auto bg-slate-300"></p>
      <form className="flex flex-col gap-3 mt-3 mb-3" onSubmit={(e: React.FormEvent) => handlePost(e)}>
        <div className="flex gap-4 items-center" >
          <Select className="w-[180px] text-[12px]" placeholder="자격증 선택" options={licenses} onChange={(e) => {setLicenseOption(e!.value)}} />
          <Select className="w-[180px] text-[12px]" placeholder="카테고리 선택" options={category} onChange={(e) => {setCategoryOption(e!.value)}}/>
          <div className="flex items-center gap-2">
            <label htmlFor="certify" className="text-[12px]">취득 여부</label>
            <input type="checkbox" id="certify" name="취득 여부" checked={certify} onChange={(e) => {
              setCertify(e.target.checked)
            }}/>
          </div>
        </div>
        <input type="text" ref={title} className="bg-[#fefefe] p-2 text-sm rounded-md border resize-none w-full outline-none" placeholder="제목을 입력하세요"/>
        <textarea cols={100} wrap='hard' ref={content} className="bg-[#fefefe] p-2 rounded-md border h-[525px] resize-none w-full outline-none text-sm" placeholder="내용을 입력하세요. 자격증 종류 또는 카테고리에 해당하지 않는 글을 작성 시 삭제될 수 있습니다.">
        </textarea>
        <div className="flex justify-end gap-3">
          <button className="text-gray-200 text-sm text-center w-[120px] pt-2 pb-2 bg-theme-color rounded-md transition-all hover:bg-[#0073c6]">등록하기</button>
          <button onClick={handleCancel} className="text-sm text-center w-[120px] pt-2 pb-2 border rounded-md transition-all bg-[#fefefe] hover:bg-gray-200">취소</button>
        </div>
      </form>
    </>
  )
}