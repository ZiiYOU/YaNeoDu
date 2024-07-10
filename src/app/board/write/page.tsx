import Link from "next/link";

export default function Write() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[1000px] bg-default-color p-10">
        <div className="flex justify-between items-center p-3">
          <h1 className="text-2xl">질문 및 후기</h1>
        </div>
        <p className="h-[1px] w-full ml-auto mr-auto bg-slate-300"></p>
        <form className="flex flex-col gap-3 mt-3 mb-3">
          <div className="flex gap-3">
            <select name="자격증" id="license" className="w-[200px] text-sm p-2 outline-none rounded-md border">
              <option value="select">자격증 목록</option>
              <option value="전기기사">전기기사</option>
            </select>
            <select name="카테고리" id="category" className="w-[200px] text-sm p-2 outline-none rounded-md border">
              <option value="select">카테고리 목록</option>
              <option value="question">질문</option>
              <option value="review">후기</option>
            </select>
          </div>
          <input type="text" className="bg-[#fefefe] p-2 text-sm rounded-md border resize-none w-full outline-none" />
          <textarea className="bg-[#fefefe] p-2 rounded-md border h-[525px] resize-none w-full outline-none text-sm">
          </textarea>
          <div className="flex justify-end gap-3">
            <button className="text-gray-200 text-sm text-center w-[120px] pt-2 pb-2 bg bg-theme-color rounded-md transition-all hover:bg-[#0073c6]">등록하기</button>
            <button className="text-sm text-center w-[120px] pt-2 pb-2 bg border rounded-md transition-all bg-[#fefefe] hover:bg-gray-200">취소</button>
          </div>
        </form>
      </div>
    </div>
  )
}