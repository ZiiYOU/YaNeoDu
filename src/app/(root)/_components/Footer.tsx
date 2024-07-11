import Link from "next/link"
import { FaGithub } from "react-icons/fa"

function Footer() {
  return (
  <footer className="w-full h-40 px-40 py-10 border border-solid border-gray-300 absolute bottom-[0] bg-white">
    <div className="text-lg font-black text-gray-400">you can do it !</div>
    <div className="flex flex-row justify-between">
      <div className="mt-4 text-sm text-gray-400">
        Team IS. 곽현정 김효진 방지영 이녕수 이준혁 장민영<br/>
        ⓒ 2024. Team IS All rights reserved.
      </div>
      <Link href='https://github.com/ZiiYOU/YaNeoDu' className="flex flex-row items-center gap-2 text-gray-500"><FaGithub className="text-2xl" />Github</Link>
    </div>
  </footer>
  )
}

export default Footer