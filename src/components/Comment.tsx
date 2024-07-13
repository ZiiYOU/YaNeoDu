"use client"

import { GetComment } from "@/types/comment"
import axios from "axios"
import { useEffect, useState } from "react"

interface Props {
  paramsId: number
}

export default function Comment({paramsId}: Props) {
  const [items, setItems] = useState<GetComment[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/api/posts/comment?id=${paramsId}`)
      setItems(data)
    }
    fetchData()
  }, [])

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
                <button className="p-1 hover:text-theme-color" title="삭제하기">
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