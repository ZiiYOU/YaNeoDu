"use client"

import { Post } from "@/types/post"
import useAuthStore from "@/zustand/store/authStore"
import axios from "axios"
import { useRouter } from "next/navigation"

type Props = {
  item: Post
}

export default function PostButtons({item}: Props) {
  const router = useRouter();
  const {user} = useAuthStore(state => state)

  const handleDelete = async () => {
    if(user?.user_id !== item.user_id) {
      alert("잘못된 접근입니다.")
      return
    }
    if(!confirm("작성하신 글을 삭제하시겠습니까?")) return 
    const res = await axios.delete(`/api/posts/${item.post_id}`)
    if(res.status === 200) {
      alert("정상적으로 삭제되었습니다.")
      router.push("/board")
      return
    }
  }

  const goRewrite = async () => {
    if(user?.user_id !== item.user_id) {
      alert("잘못된 접근입니다.")
      return
    }
    router.push(`/board/${item.post_id}/rewrite`)
  }

  return (
    <>
      <button
        className=" hover:underline hover:text-theme-color"
        title="글 삭제하기"
        onClick={handleDelete}
      >
        삭제하기
      </button>
      <button
        className=" hover:underline hover:text-theme-color"
        title="글 수정하기"
        onClick={goRewrite}
      >
        수정하기
      </button>
    </>
  )
}
  
