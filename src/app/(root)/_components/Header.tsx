
function Header() {
  return (
    <header className="fixed z-10 top-0 px-12 w-full h-16 bg-white border border-solid border-b-default-color drop-shadow-md flex flex-row items-center justify-between">
    <div className="text-lg font-black text-theme-color drop-shadow-md cursor-pointer">you can do it!</div>
    <div className="flex flex-row gap-3">
      <button className="w-20 h-7 border border-solid border-theme-color bg-theme-color rounded-lg text-sm text-white drop-shadow-md hover:bg-white hover:text-theme-color ease-in duration-300">회원가입</button>
      <button className="w-20 h-7 border border-solid border-theme-color bg-white rounded-lg text-sm text-theme-color drop-shadow-md hover:bg-theme-color hover:text-white ease-in duration-300 ">로그인</button>
    </div>
  </header>
  )
}

export default Header