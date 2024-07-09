import Link from "next/link";

export default function Detail() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[1000px] bg-slate-100 p-10">
        <div className="flex justify-between items-center p-3">
          <h1 className="text-2xl">질문 및 후기</h1>
          <Link
            className="text-gray-200 text-sm text-center w-[120px] pt-2 pb-2 bg bg-[#0090f9] rounded-md transition-all hover:bg-[#0073c6]"
            href={"#"}
            title="글쓰기"
          >
            글쓰기
          </Link>
        </div>
        <p className="h-[1px] w-full ml-auto mr-auto bg-slate-300"></p>
        <div className="bg-[#fefefe] p-3 m-3 rounded-md min-h-[300px] text-[12px]">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1 p-3">
              <h2 className="text-sm text-gray-400">
                <span>전기기사</span> / <span>후기</span>
              </h2>
              <h1 className="text-xl font-bold">xx자격증 너무 쉽네요</h1>
            </div>
            <div className="flex justify-between p-3">
              <div className="flex gap-3">
                <p>
                  <span className="font-bold p-1 bg-slate-200 rounded-md">
                    고수
                  </span>
                  &nbsp;님
                </p>
                <p className="text-gray-400">2024.07.09 12:34:56</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  className=" hover:underline hover:text-[#0090f9]"
                  title="글 수정하기"
                >
                  수정하기
                </button>
                <p className="text-gray-400">
                  👁&nbsp;<span>9,999</span>
                </p>
              </div>
            </div>
          </div>
          <p className="h-[1px] w-full ml-auto mr-auto bg-slate-300"></p>
          {/* 게시글 상단 */}
          <div className="text-sm p-3">
            내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
          </div>
        </div>
        <div className="bg-[#fefefe] p-3 m-3 rounded-md text-sm">
          <div className="flex justify-between items-center p-3">
            <textarea
              className="bg-gray-100 w-[85%] p-2 text-sm resize-none outline-none overflow-hidden h-[90px]"
              placeholder="내용을 입력해주세요"
            ></textarea>
            <button
              className="bg-[#0090f9] rounded-md transition-all w-[120px] hover:bg-[#0073c6] text-gray-200 h-[90px]"
              title="댓글 등록하기"
            >
              등록하기
            </button>
          </div>
        </div>
        {/* 댓글 작성란 */}
        <div className="bg-[#fefefe] p-3 m-3 rounded-md min-h-[200px]">
          <h2 className="p-3">댓글</h2>
          <p className="h-[1px] w-full ml-auto mr-auto bg-slate-300"></p>
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
                <button className="p-1 hover:text-[#0073c6]" title="수정하기">
                  ✎
                </button>
                <button className="p-1 hover:text-[#0073c6]" title="삭제하기">
                  ✕
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* 댓글 표시란 */}
      </div>
    </div>
  );
}
