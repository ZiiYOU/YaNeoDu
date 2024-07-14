"use client"

import { Post, Send } from '@/types/post'
import useAuthStore from '@/zustand/store/authStore'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useEffect, useState } from 'react'

export default function Write({params}: {params: {id: number}}) {
  const {isAuthenticated, user} = useAuthStore((state) => state);
  const {id} = params

  /* 자격증, 카테고리, 취득여부, 제목, 내용 */

  const [item, setItem] = useState<Post | null>(null)
  const [title, setTitle] = useState<string>("Loading...")
  const [content, setContent] = useState<string>("Loading...")

  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      return router.push('/login')
    }
    const fetchData = async () => {
      const {data} = await axios.get(`/api/posts/${id}`)
      setItem(data)
      setTitle(data.title)
      setContent(data.content)
    }
    fetchData()
  }, [])

  const handleUpdate = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    if(!title.trim() || !content.trim()) {
      alert("작성된 제목 또는 내용이 없습니다.")
      return 
    }
    const post = {
      title: title,
      content: content
    }
    const res = await axios.patch(`/api/posts/${id}`, post);
    if(res.status === 200) {
      alert("게시글 수정이 완료되었습니다.")

      return router.push(`/board`)
    }
  };

  const handleCancel = (e: React.FormEvent) => {
    e.preventDefault()
    if(!confirm("수정한 내용이 저장되지 않습니다. 게시글 수정을 취소하시겠습니까?")) return
    return router.push(`/board/${id}`)
  }

  return (
    <>
      <div className="flex justify-between items-center p-3">
        <h1 className="text-2xl"><Link className="transition-all hover:text-theme-color" href={"/board"}>질문 및 후기</Link></h1>
      </div>
      <p className="h-[1px] w-full ml-auto mr-auto bg-slate-300"></p>
      <form className="flex flex-col gap-3 mt-3 mb-3" onSubmit={(e: React.FormEvent) => handleUpdate(e)}>
        <div className="flex gap-4 items-center" >
          <div className='flex gap-3 p-2 text-sm font-bold border rounded-md bg-[#fefefe]'>
            <span>{item?.license_name}</span>
            <span className='text-gray-200'>/</span>
            <span>{item?.category}</span>
            <span className='text-gray-200'>/</span>
            <span>{item?.is_confirm ? "✅" : "🟡"}</span>
          </div>
        </div>
        <input type="text" value={title} onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} className="bg-[#fefefe] p-2 text-sm rounded-md border resize-none w-full outline-none" placeholder="제목을 입력하세요"/>
        <textarea cols={100} wrap="hard" value={content} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)} className="bg-[#fefefe] p-2 rounded-md border h-[525px] resize-none w-full outline-none text-sm" placeholder="내용을 입력하세요. 자격증 종류 또는 카테고리에 해당하지 않는 글을 작성 시 삭제될 수 있습니다.">
        </textarea>
        <div className="flex justify-end gap-3">
          <button className="text-gray-200 text-sm text-center w-[120px] pt-2 pb-2 bg-theme-color rounded-md transition-all hover:bg-[#0073c6]">수정 완료</button>
          <button onClick={handleCancel} className="text-sm text-center w-[120px] pt-2 pb-2 border rounded-md transition-all bg-[#fefefe] hover:bg-gray-200">취소</button>
        </div>
      </form>
    </>
  )
}