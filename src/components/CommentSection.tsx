import React from 'react'
import CommentWrite from './CommentWrite'
import Comment from './Comment'

interface Props {
  paramsId: number
}

export default function CommentSection({paramsId}: Props) {
  

  return (
    <>
      <CommentWrite paramsId={paramsId} />
      <div className="bg-[#fefefe] p-3 m-3 rounded-md min-h-[200px]">
        <h2 className="p-3">댓글</h2>
        <p className="h-[1px] w-full ml-auto mr-auto bg-slate-300"></p>
        <Comment paramsId={paramsId} />
      </div>
    </>
  )
}

