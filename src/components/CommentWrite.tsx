"use client"

import { SendComment } from "@/types/comment"
import useAuthStore from "@/zustand/store/authStore"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useRef } from "react"

interface Props {
  paramsId: string
}

export default function CommentWrite({paramsId}: Props) {
  const router = useRouter()
  const {user} = useAuthStore(state => state)
  const content = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    if(!content.current?.value.trim()) {
      alert("작성된 내용이 없습니다.")
      return 
    }
    const comment: SendComment = {
      post_id: +paramsId,
      user_id: user?.user_id!,
      nickname: user?.nickname!,
      content: content.current.value,
    }
    const res = await axios.post("/api/posts/comment", comment);
    if(res.status === 200) {
      content.current.value=""
      location.reload()
    }
  }

  return (
    <div className="bg-[#fefefe] p-3 m-3 rounded-md text-sm">
      <form className="flex justify-between items-center p-3" onSubmit={handleSubmit}>
        <textarea
          ref={content}
          className="bg-default-color w-[85%] p-2 text-sm resize-none outline-none overflow-hidden h-[90px]"
          placeholder="내용을 입력해주세요"
        ></textarea>
        <button
          className="bg-theme-color rounded-md transition-all w-[120px] hover:bg-[#0073c6] text-gray-200 h-[90px]"
          title="댓글 등록하기"
        >
          등록하기
        </button>
      </form>
    </div>
  )
}