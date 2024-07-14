"use client"

import { GetComment } from "@/types/comment"
import useAuthStore from "@/zustand/store/authStore"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface Props {
  paramsId: number
}

export default function Comment({paramsId}: Props) {
  const [items, setItems] = useState<GetComment[]>([])
  const router = useRouter()

  const {user} = useAuthStore((state) => state);


  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/api/posts/comment?id=${paramsId}`)
      setItems(data)
    }
    fetchData()
  }, [])

  const handleDelete = async (commentId: number, userId: string) => {
    /* id와 현재 로그인한 사용자의 고유 id가 일치하는지 검사 */
    if(user?.user_id !== userId) {
      alert("잘못된 접근입니다.")
      return 
    }
    const res = await axios.delete(`/api/posts/comment`, {
      params: {
        commentId: commentId
      }
    })
    if(res.status === 200) {
      alert("댓글이 삭제되었습니다.")
      router.refresh()
    } else {
      alert("요청을 처리중에 문제가 발생했습니다. 다시 시도해보세요")
    }
  }

  return (
    <>
      {
        items?.map(item => 
          <div className="p-3 border-b border-dotted" key={item.comment_id}>
            <ul className="flex items-center text-sm justify-between text-center">
              <li className="w-[10%]">
                <span className="font-bold">{item.nickname}</span>&nbsp;님
              </li>
              <li className="w-[55%] text-left overflow-hidden white">
                {item.content}
              </li>
              <li className="w-[20%] text-gray-400">{item.created_at}</li>
              <li className="w-[10%] flex justify-evenly">
                <button onClick={() => handleDelete(item.comment_id, item.user_id)} className={user?.user_id ? "p-1 hover:text-theme-color" : "hidden"} title="삭제하기">
                  ✕
                </button>
              </li>
            </ul>
          </div>
        )
      }
    </>
    
  )
}