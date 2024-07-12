"use client"

import Link from "next/link";
import Select from 'react-select'
import SummaryPost from "../../../components/SummaryPost";
import { useEffect, useState } from "react";
import axios from "axios";
import { Post } from "@/types/post";
import BoardPagination from "@/components/BoardPagination";

export default function Board() {
  const licenses = [
    { value: "정보처리기사", label: "정보처리기사" },
    { value: "전기기사", label: "전기기사" }
  ]
  const category = [
    {value: "질문", label: "질문"},
    {value: "후기", label: "후기"},
  ]

  const [items, setItems] = useState<[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalItems = items.length
  const ITEMS_PER_PAGE = 10;
  
  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get("/api/posts");
      setItems(data);
    };

    fetchData();
  }, []);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const currentItems = items.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * (ITEMS_PER_PAGE - 1)
  );

  return (
    <>
      <div className="flex justify-between items-center p-3">
        <h1 className="text-2xl">질문 및 후기</h1>
        <Link
          className="text-gray-200 text-sm p-2 pl-12 pr-12 bg-theme-color rounded-md transition-all hover:bg-[#0073c6]"
          href={"/board/write"}
        >
          글쓰기
        </Link>
      </div>
      <p className="h-[1px] w-full ml-auto mr-auto bg-slate-300"></p>
      <div className="bg-[#fefefe] p-3 mt-3 mb-3 rounded-md h-[525px]">
        <div>
          <ul className="text-[12px] h-[50px] flex items-center border border-r-transparent border-l-transparent font-semibold">
            <li className="w-[15%] p-1 text-center">자격증</li>
            <li className="w-[10%] p-1 text-center">카테고리</li>
            <li className="w-[45%] p-1 text-center">제목</li>
            <li className="w-[10%] p-1 text-center">글쓴이</li>
            <li className="w-[12%] p-1 text-center">등록일</li>
            <li className="w-[8%] p-1 text-center">조회수</li>
          </ul>
        </div>
        <div>
          <SummaryPost currentItems={currentItems} />
        </div>
      </div>
      <div>
        <form className="flex gap-3 items-center justify-end">
          <div className="flex gap-3">
            <Select className="w-[180px] text-[12px]" options={licenses} />
            <Select className="w-[180px] text-[12px]" options={category} />
          </div>
          <div className="flex gap-3">
            <input type="text" placeholder="찾아보기" className="w-[220px] text-[12px] p-2 h-[38px] outline-none border border-gray-300 rounded-md" />
            <button className="text-gray-200 bg-theme-color transition-all hover:bg-[#0073c6] text-[12px] p-1 outline-none rounded-md border w-[50px]">검색</button>
          </div>
        </form>
      </div>
      <div className="flex justify-center items-center mt-3 text-sm">
        <BoardPagination totalItems={totalItems} itemsPerPage={ITEMS_PER_PAGE} currentPage={currentPage} onPageChange={handlePageChange}  />
      </div>
    </>
  );
}
