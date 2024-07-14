
import Link from 'next/link'
import React from 'react'

export default function PostBox({postId, title, created_at, content} : {key: number, postId: number, title: string, created_at: string, content:string}) {
  
  return (
    <Link href={`/board/${postId}`} className="w-full h-20 min-h-20 px-4 border border-solid border-gray-200 bg-gray-100 rounded-lg flex flex-col justify-center drop-shadow-md cursor-pointer hover:bg-white hover:scale-105 ease-in duration-300">
        <div className="w-full h-6/12 flex flex-row justify-between">
            <div className="text-md ">{title}</div>
            <div className="text-sm text-neutral-500">{created_at.split('T')[0]}</div>
        </div>
        <div className="text-sm text-neutral-500">{content}</div>
    </Link>
  )
}
