import Link from "next/link";

export default function SummaryPost() {
  return (
    <div>
      <Link href={"/board/123"}>
        <ul className="text-[12px] h-[45px] flex items-center border-b border-dotted">
          <li className="w-[15%] p-1 text-center">전기기사</li>
          <li className="w-[10%] p-1 text-center">질문</li>
          <li className="w-[45%] p-1 text-left">안녕하세요</li>
          <li className="w-[10%] p-1 text-center">뉴비</li>
          <li className="w-[12%] p-1 text-center">2024.07.09</li>
          <li className="w-[8%] p-1 text-center">999</li>
        </ul>
      </Link>
    </div>
  )
}