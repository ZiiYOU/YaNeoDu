"use client"

import axios from "axios";
import { useEffect } from "react";

type Props = {
  views: number,
  id: number,
}

export default function ViewCount({id, views}: Props) {
  const patchData = async (): Promise<void> => {
    const view = {
      views,
    }
    await axios.patch(`/api/posts/${id}`, view)
    console.log("업데이트 완료?")
  }

  useEffect(() => {
    patchData()
  }, [])

  return (
    <p className="text-gray-400">
      👁&nbsp;<span>{views + 1}</span>
    </p>
  )
}