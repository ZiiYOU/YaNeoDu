"use client"

import { Post } from "@/types/post";
import Link from "next/link";

interface Props {
  currentItems: Post[],
}

export default function SummaryPost({currentItems}: Props) {

  console.log(currentItems)
  return (
    <div>
      {
        currentItems.length ? currentItems.map(item => 
          <Link href={`/board/${item.post_id}`} key={item.post_id}>
            <ul className="text-[12px] h-[45px] flex items-center border-b border-dotted">
              <li className="w-[15%] p-1 text-center">{item.license_name}</li>
              <li className="w-[10%] p-1 text-center">{item.category}</li>
              <li className="w-[45%] p-1 text-left">{item.title}</li>
              <li className="w-[10%] p-1 text-center">{item.nickname}</li>
              <li className="w-[12%] p-1 text-center">{item.created_at?.slice(0, 10)}</li>
              <li className="w-[8%] p-1 text-center">{item.views}</li>
            </ul>
          </Link>
        )
        :
        <div className="text-[12px] h-[45px] flex items-center justify-center">게시물이 없습니다.</div>
      }
    </div>
  )
}