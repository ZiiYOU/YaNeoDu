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
    await axios.patch(`/api/posts/${id}/viewCount`, view)
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