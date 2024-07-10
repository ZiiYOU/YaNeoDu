"use client"

import Link from "next/link";
import Select from 'react-select'

export default function Write() {
  const licenses = [
    { value: "정보처리기사", label: "정보처리기사" },
    { value: "전기기사", label: "전기기사" }
  ]
  const category = [
    {value: "질문", label: "질문"},
    {value: "후기", label: "후기"},
  ]

  return (
    <>
      <div className="flex justify-between items-center p-3">
        <h1 className="text-2xl">질문 및 후기</h1>
      </div>
      <p className="h-[1px] w-full ml-auto mr-auto bg-slate-300"></p>
      <form className="flex flex-col gap-3 mt-3 mb-3">
        <div className="flex gap-3">
          <Select className="w-[180px] text-[12px]" options={licenses} />
          <Select className="w-[180px] text-[12px]" options={category} />
        </div>
        <input type="text" className="bg-[#fefefe] p-2 text-sm rounded-md border resize-none w-full outline-none" placeholder="제목을 입력하세요"/>
        <textarea className="bg-[#fefefe] p-2 rounded-md border h-[525px] resize-none w-full outline-none text-sm" placeholder="내용을 입력하세요. 카테고리에 맞지 않는 글을 작성 시 삭제될 수 있습니다.">
        </textarea>
        <div className="flex justify-end gap-3">
          <button className="text-gray-200 text-sm text-center w-[120px] pt-2 pb-2 bg-theme-color rounded-md transition-all hover:bg-[#0073c6]">등록하기</button>
          <button className="text-sm text-center w-[120px] pt-2 pb-2 border rounded-md transition-all bg-[#fefefe] hover:bg-gray-200">취소</button>
        </div>
      </form>
    </>
  )
}