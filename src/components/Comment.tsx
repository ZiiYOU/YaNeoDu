import React from 'react'

export default function Comment() {
  return (
    <div className="p-3 border-b border-dotted">
      <ul className="flex items-center text-sm justify-between text-center">
        <li className="w-[10%]">
          <span className="font-bold">뉴비</span>&nbsp;님
        </li>
        <li className="w-[55%] text-left overflow-hidden white">
          도배 좀 그만하세요;;도배 좀 그만하세요;;도배 좀 그만하세요;;도배
          좀 그만하세요;;도배 좀 그만하세요;;도배 좀 그만하세요;;도배 좀
          그만하세요;;도배 좀 그만하세요;;도배 좀 그만하세요;;도배 좀
          그만하세요;;도배 좀 그만하세요;;도배 좀 그만하세요;;도배 좀
          그만하세요;;도배 좀 그만하세요;;도배 좀 그만하세요;;도배 좀
          그만하세요;;도배 좀 그만하세요;;도배 좀 그만하세요;;도배 좀
          그만하세요;;도배 좀 그만하세요;;도배 좀 그만하세요;;도배 좀
          그만하세요;;도배 좀 그만하세요;;도배 좀 그만하세요;;도배 좀
          그만하세요;;도배 좀 그만하세요;;도배 좀 그만하세요;;도배 좀
          그만하세요;;도배 좀 그만하세요;;도배 좀 그만하세요;;도배 좀
          그만하세요;;
        </li>
        <li className="w-[20%] text-gray-400">2024.07.08 15:00:09</li>
        <li className="w-[10%] flex justify-evenly">
          <button className="p-1 hover:text-theme-color" title="수정하기">
            ✎
          </button>
          <button className="p-1 hover:text-theme-color" title="삭제하기">
            ✕
          </button>
        </li>
      </ul>
    </div>
  )
}