"use client"
import useAuthStore from "@/zustand/store/authStore"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const useAdminAccess = () => {
  const router = useRouter()
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const isAdmin = useAuthStore((state) => state.user?.admin)

  useEffect(()=>{
    if(!isAuthenticated || !isAdmin) {
      router.push('/')
    }
  },[isAuthenticated, isAdmin, router])

  return { isAdmin, isAuthenticated}
}
export default useAdminAccess