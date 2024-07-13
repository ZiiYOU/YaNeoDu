import { Post } from "@/types/post";
import Link from "next/link";
import { getPostsData } from "../../_api/posts";
import CommentSection from "@/components/CommentSection";

export default async function Detail({params}: {params: {id: number}}) {
  const item: Post = await getPostsData(params.id)

  return (
    <>
      <div className="flex justify-between items-center p-3">
        <h1 className="text-2xl">
          <Link href={"/board"}>질문 및 후기</Link>
        </h1>
        <Link
          className="text-gray-200 text-sm text-center w-[120px] pt-2 pb-2 bg bg-theme-color rounded-md transition-all hover:bg-[#0073c6]"
          href={"/board/write"}
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
              <span>{item.license_name}</span> / <span>{item.category}</span>
            </h2>
            <h1 className="text-xl font-bold">{item.title}&nbsp;<span>{item.is_confirm ? "✅" : ""}</span></h1>
          </div>
          <div className="flex justify-between p-3">
            <div className="flex gap-3">
              <p>
                <span className="font-bold p-1 bg-default-color rounded-md">
                  {item.nickname ?? "알 수 없음"}
                </span>
                &nbsp;님
              </p>
              <p className="text-gray-400">{item.created_at}</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                className=" hover:underline hover:text-theme-color"
                title="글 삭제하기"
              >
                삭제하기
              </button>
              <button
                className=" hover:underline hover:text-theme-color"
                title="글 수정하기"
              >
                수정하기
              </button>
              <p className="text-gray-400">
                👁&nbsp;<span>{item.views}</span>
              </p>
            </div>
          </div>
        </div>
        <p className="h-[1px] w-full ml-auto mr-auto bg-slate-300"></p>
        <div className="text-sm p-3">
          {item.content}
        </div>
      </div>
      <CommentSection paramsId={params.id}/>
    </>
  );
}
