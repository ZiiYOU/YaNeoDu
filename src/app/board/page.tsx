import Link from "next/link";

export const dynamic = "force-dynamic";

export default function Board() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[900px] h-[600px] bg-slate-100 p-10">
        <div className="flex justify-between items-center p-3">
          <h1 className="text-2xl">질문 및 후기</h1>
          <Link
            className="text-gray-200 text-sm pl-12 pr-12 pt-1 pb-1 bg bg-[#0090f9] rounded-md transition-all hover:bg-[#0073c6]"
            href={"#"}
          >
            글쓰기
          </Link>
        </div>
        <div className="h-[1px] w-full ml-auto mr-auto bg-slate-300" />
        <div className="bg-[#fefefe] p-3 m-3 rounded-md h-[410px]">
          <div>
            <ul className="text-[12px] flex border border-r-transparent border-l-transparent p-1 font-semibold">
              <li className="w-[15%] p-1 text-center">자격증</li>
              <li className="w-[10%] p-1 text-center">카테고리</li>
              <li className="w-[45%] p-1 text-center">제목</li>
              <li className="w-[10%] p-1 text-center">글쓴이</li>
              <li className="w-[12%] p-1 text-center">등록일</li>
              <li className="w-[8%] p-1 text-center">조회수</li>
            </ul>
          </div>
          <div>
            {/* 게시물 목록이 들어오는 곳, 아래는 예시입니다. 최대 10개의 게시물이 한 페이지에 들어옵니다 */}
            <Link href={"#"}>
              <ul className="text-[12px] flex p-1 border-b border-dotted">
                <li className="w-[15%] p-1 text-center">전기기사</li>
                <li className="w-[10%] p-1 text-center">질문</li>
                <li className="w-[45%] p-1 text-left">안녕하세요</li>
                <li className="w-[10%] p-1 text-center">뉴비</li>
                <li className="w-[12%] p-1 text-center">2024.07.09</li>
                <li className="w-[8%] p-1 text-center">999</li>
              </ul>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center text-sm">
          {/* 페이지네이션이 들어오는 곳 */}
          <ul className="flex justify-center items-center gap-2 p-3 text-center">
            <li className="w-5 h-5 text-slate-500">◄</li>
            <li className="w-5 h-5 bg-slate-300 rounded-md">1{/* active */}</li>
            <li className="w-5 h-5">2</li>
            <li className="w-5 h-5">3</li>
            <li className="w-5 h-5 text-slate-500">►</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
