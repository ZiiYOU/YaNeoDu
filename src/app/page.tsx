import React from "react";

export default function Home() {
  const location : string[] = ['서울', '경기도','강원도', '충청도', '전라도', '경상도', '제주도']
  const license : string[] = ['정보처리기사', '빅데이터분석기사']
  return (
<><div className="w-full h-80 px-56 bg-blue-100 flex flex-row items-center justify-between">
    <div className="text-6xl font-black flex flex-col gap-4 drop-shadow-md">
      <div className="text-white">야 ,</div>
    <div className="text-theme-color">너두</div>
    <div className="text-white">할 수 있어 !</div>
    </div>
    <div className="w-6/12 h-full py-10 flex flex-col items-center justify-end gap-6">
      <input type="date" className="w-8/12 h-8 px-4 bg-white border border-gray-300 border-solid rounded-lg drop-shadow-md" />
      <select className="w-8/12 h-8 px-4 bg-white border border-gray-300 border-solid rounded-lg drop-shadow-md" >
        {location.map((lo)=>{
          return <option value={lo}>{lo}</option>
        })}
      </select>
      <select className="w-8/12 h-8 px-4 bg-white border border-gray-300 border-solid rounded-lg drop-shadow-md" >
        {license.map((li)=>{
          return <option value={li}>{li}</option>
        })}
      </select>
    </div>
  </div>
  <div className="w-full h-6/12 py-4 flex flex-row justify-center">
    <div className="w-5/12 h-full flex flex-col items-center ">
      <div className="w-4/5 h-16 px-8 flex flex-row items-center justify-between ">
        <div>
          📔 합격 후기
        </div>
        <button className="text-sm text-gray-600 cursor-pointer hover:text-theme-color">+ 더보기</button>
      </div>
      <div className="w-4/5 h-72 px-4 py-4 flex flex-col gap-4 overflow-y-auto">
        <div className="w-full h-20 min-h-20 px-4 border border-solid border-gray-200 bg-gray-100 rounded-lg flex flex-col justify-center drop-shadow-md cursor-pointer hover:bg-white hover:scale-105 ease-in duration-300">
          <div className="w-full h-6/12 flex flex-row justify-between">
            <div className="text-md ">제목</div>
            <div className="text-sm text-neutral-500">2024.07.09.</div>
          </div>
          <div className="text-sm text-neutral-500">내용이 적히는 란입니다.</div>
        </div>
      </div>
    </div>
    <div className="w-5/12 h-full flex flex-col items-center">
      <div className="w-4/5 h-16 px-8 flex flex-row items-center justify-between " >
        🙋🏻‍♀ Q & A
        <button className="text-sm text-gray-600 cursor-pointer hover:text-theme-color">+ 더보기</button>
      </div>
      <div className="w-4/5 h-72 px-4 py-4 mb-10 flex flex-col gap-4 overflow-y-auto">
        <div className="w-full h-20 min-h-20 px-4 border border-solid border-gray-200 bg-gray-100 rounded-lg flex flex-col justify-center drop-shadow-md cursor-pointer hover:bg-white hover:scale-105 ease-in duration-300">
          <div className="w-full h-6/12 flex flex-row justify-between">
            <div className="text-md ">제목</div>
            <div className="text-sm text-neutral-500">2024.07.09.</div>
          </div>
          <div className="text-sm text-neutral-500">내용이 적히는 란입니다.</div>
        </div>
        <div className="w-full h-20 min-h-20 px-4 border border-solid border-gray-200 bg-gray-100 rounded-lg flex flex-col justify-center drop-shadow-md cursor-pointer hover:bg-white hover:scale-105 ease-in duration-300">
          <div className="w-full h-6/12 flex flex-row justify-between">
            <div className="text-md ">제목</div>
            <div className="text-sm text-neutral-500">2024.07.09.</div>
          </div>
          <div className="text-sm text-neutral-500">내용이 적히는 란입니다.</div>
        </div>
        <div className="w-full h-20 min-h-20 px-4 border border-solid border-gray-200 bg-gray-100 rounded-lg flex flex-col justify-center drop-shadow-md cursor-pointer hover:bg-white hover:scale-105 ease-in duration-300">
          <div className="w-full h-6/12 flex flex-row justify-between">
            <div className="text-md ">제목</div>
            <div className="text-sm text-neutral-500">2024.07.09.</div>
          </div>
          <div className="text-sm text-neutral-500">내용이 적히는 란입니다.</div>
        </div>
        <div className="w-full h-20 min-h-20 px-4 border border-solid border-gray-200 bg-gray-100 rounded-lg flex flex-col justify-center drop-shadow-md cursor-pointer hover:bg-white hover:scale-105 ease-in duration-300">
          <div className="w-full h-6/12 flex flex-row justify-between">
            <div className="text-md ">제목</div>
            <div className="text-sm text-neutral-500">2024.07.09.</div>
          </div>
          <div className="text-sm text-neutral-500">내용이 적히는 란입니다.</div>
        </div>
      </div>
    </div>
    
  </div>
  </>
  );
}
