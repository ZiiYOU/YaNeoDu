"use client"
import { createClient } from "@/supabase/client";
import useAuthStore from "@/zustand/store/authStore";
import Link from "next/link"
import { useRouter } from "next/navigation";
const supabase = createClient()

function Header() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const logout = useAuthStore((state) => state.logout);
  const router = useRouter();

  const logoutHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        alert('로그아웃 실패')
      } else {
        logout();
        router.push('/')
      }
    } catch (error) {
      //console.log(error);
    }
  };

  return (
    <div className="fixed z-10 top-0 px-12 w-full h-16 bg-white border border-solid border-b-default-color drop-shadow-md flex flex-row items-center justify-between">
      <Link href={'/'} className="text-lg font-black text-theme-color drop-shadow-md cursor-pointer">you can do it!</Link>
      {
        !isAuthenticated ? (
          <div className="flex flex-row gap-3">
            <Link href={'/signup'} className="w-20 h-7 flex items-center justify-center border border-solid border-theme-color bg-theme-color rounded-lg text-sm text-white drop-shadow-md hover:bg-white hover:text-theme-color ease-in duration-300">회원가입</Link>
            <Link href={'/login'} className="w-20 h- flex items-center justify-center border border-solid border-theme-color bg-white rounded-lg text-sm text-theme-color drop-shadow-md hover:bg-theme-color hover:text-white ease-in duration-300 ">로그인</Link>
          </div>
        ) : (
          <div className="flex flex-row gap-3">
            <button onClick={logoutHandler} className="w-20 h- flex items-center justify-center border border-solid border-theme-color bg-white rounded-lg text-sm text-theme-color drop-shadow-md hover:bg-theme-color hover:text-white ease-in duration-300 ">로그아웃</button>
          </div>
        )
      }

    </div>
  )
}

export default Header