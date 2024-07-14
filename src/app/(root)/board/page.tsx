"use client"

import Link from "next/link";
import SummaryPost from "../../../components/SummaryPost";
import { useEffect, useState } from "react";
import axios from "axios";
import BoardPagination from "@/components/BoardPagination";
import PostsFilter from "@/components/PostsFilter";
import useAuthStore from "@/zustand/store/authStore";
import { useRouter } from "next/navigation";

export default function Board() {
  const {isAuthenticated} = useAuthStore(state => state)
  const router = useRouter()

  const [items, setItems] = useState<[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalItems = items.length
  const ITEMS_PER_PAGE = 10;
  
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login')
      return
    }
    const fetchData = async () => {
      const {data} = await axios.get("/api/posts");
      setItems(data);
    };
    fetchData();
  }, []);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const currentItems = items ? items.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * (ITEMS_PER_PAGE - 1)
  ) : [];

  return (
    <>
      <div className="flex justify-between items-center p-3">
        <h1 className="text-2xl"><Link className="transition-all hover:text-theme-color" href={"/board"}>질문 및 후기</Link></h1>
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
      <PostsFilter setItems={setItems} />
      <div className="flex justify-center items-center mt-3 text-sm">
        <BoardPagination totalItems={totalItems} itemsPerPage={ITEMS_PER_PAGE} currentPage={currentPage} onPageChange={handlePageChange}  />
      </div>
    </>
  );
}
