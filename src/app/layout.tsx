import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "You can do it!",
  description: "Register your license",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className= 'relative mt-16 flex flex-col items-center'>
        <header className="fixed z-10 top-0 px-12 w-full h-16 bg-white border border-solid border-b-default-color drop-shadow-md flex flex-row items-center justify-between">
          <div className="text-lg font-black text-theme-color drop-shadow-md cursor-pointer">you can do it!</div>
          <div className="flex flex-row gap-3">
            <button className="w-20 h-7 border border-solid border-theme-color bg-theme-color rounded-lg text-sm text-white drop-shadow-md hover:bg-white hover:text-theme-color ease-in duration-300">회원가입</button>
            <button className="w-20 h-7 border border-solid border-theme-color bg-white rounded-lg text-sm text-theme-color drop-shadow-md hover:bg-theme-color hover:text-white ease-in duration-300 ">로그인</button>
          </div>
        </header>
        <div className="w-full min-h-screen">
          {children}
        </div>
        
        <footer className="w-full h-40 px-40 py-10 border border-solid border-gray-300">
          <div className="text-lg font-black text-gray-400">you can do it !</div>
          <div className="flex flex-row justify-between">
            <div className="mt-4 text-sm text-gray-400">
              Team IS. 곽현정 김효진 방지영 이녕수 이준혁 장민영<br/>
              ⓒ 2024. Team IS All rights reserved.
            </div>
            <Link href='https://github.com/ZiiYOU/YaNeoDu' className="flex flex-row items-center gap-2 text-gray-500"><FaGithub className="text-2xl" />Github</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
