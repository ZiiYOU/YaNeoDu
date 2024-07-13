"use client"

import { SendComment } from "@/types/comment"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useRef } from "react"

interface Props {
  paramsId: number
}

export default function CommentWrite({paramsId}: Props) {
  const router = useRouter()
  const content = useRef<HTMLTextAreaElement>(null)
  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    if(!content.current?.value.trim()) {
      alert("작성된 내용이 없습니다.")
      return 
    }
    try {
      const comment: SendComment = {
        post_id: paramsId,
        user_id: "댓글을 작성한 사용자의 고유 ID",
        nickname: "댓글을 작성한 사용자의 닉네임",
        content: content.current.value,
      }
      /* const response = await axios.post("/api/posts/comment", comment); */
      /* 이곳에 등록에 따른 alert 작성 */
      content.current.value=""
      router.refresh()
    } catch (error) {
      console.error("Error posting data:", error);
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