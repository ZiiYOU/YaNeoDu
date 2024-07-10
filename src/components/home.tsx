"use client"

import React,{ useState, useEffect } from "react";
import { fetchLicenses } from "../lib/licensesSupabase";
import { LicensesType } from "../types/licensesType";
import { fetchQuestionPosts, fetchReviewPosts } from "../lib/postSupabase";
import { PostsType } from "@/types/postsType";

export default function Home() {
  const location : string[] = ['서울', '경기도','강원도', '충청도', '전라도', '경상도', '제주도']
  const [licenses,setLicenses] = useState<LicensesType[]>([])
  const [posts, setPosts] = useState<{[key:string] : PostsType[]}>({review:[], question:[]});


  useEffect(()=>{
    const getLicenses = async () => {
      try{
        const data : LicensesType[] = await fetchLicenses();
        setLicenses(data)
      }catch(error){
        console.log('licenses error',error)
      }
    }

    const getReviewPosts = async () => {
      try{
          const res : PostsType[] = await fetchReviewPosts();
          console.log(res)
          setPosts((prev)=>{
            return {...prev, review: res}
          })
      }catch(error){
          console.log('review error', error)
      }    
    }

    const getQuestionPosts = async () => {
      try{
        const res : PostsType[] = await fetchQuestionPosts();
        console.log(res)
        setPosts((prev)=>{
          return {...prev, question: res}
        })
      }catch(error){
        console.log('question error',error)
      }
    }

    getLicenses();
    getReviewPosts();
    getQuestionPosts();
  },[])

  
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
          return <option key={lo} value={lo}>{lo}</option>
        })}
      </select>
      <select className="w-8/12 h-8 px-4 bg-white border border-gray-300 border-solid rounded-lg drop-shadow-md" >
        {licenses.map((li:LicensesType)=>{
            return <option key={li.license_id} value={li.license_name}>{li.license_name}</option>
          })
        }
        
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
        {posts.review.map((post:PostsType)=>{
            return (
                <div key={post.post_id} className="w-full h-20 min-h-20 px-4 border border-solid border-gray-200 bg-gray-100 rounded-lg flex flex-col justify-center drop-shadow-md cursor-pointer hover:bg-white hover:scale-105 ease-in duration-300">
                    <div className="w-full h-6/12 flex flex-row justify-between">
                        <div className="text-md ">{post.title}</div>
                        <div className="text-sm text-neutral-500">{post.created_at.split('T')[0]}</div>
                    </div>
                    <div className="text-sm text-neutral-500">{post.content}</div>
                </div>
            )
        })}
      </div>
    </div>
    <div className="w-5/12 h-full flex flex-col items-center">
      <div className="w-4/5 h-16 px-8 flex flex-row items-center justify-between " >
         🙋🏻‍♀ Q & A
         <button className="text-sm text-gray-600 cursor-pointer hover:text-theme-color">+ 더보기</button>
      </div>
      <div className="w-4/5 h-72 px-4 py-4 mb-10 flex flex-col gap-4 overflow-y-auto">
      {posts.question.map((post:PostsType)=>{
            return (
                <div key={post.post_id} className="w-full h-20 min-h-20 px-4 border border-solid border-gray-200 bg-gray-100 rounded-lg flex flex-col justify-center drop-shadow-md cursor-pointer hover:bg-white hover:scale-105 ease-in duration-300">
                    <div className="w-full h-6/12 flex flex-row justify-between">
                        <div className="text-md ">{post.title}</div>
                        <div className="text-sm text-neutral-500">{post.created_at.split('T')[0]}</div>
                    </div>
                    <div className="text-sm text-neutral-500">{post.content}</div>
                </div>
            )
        })}
      </div>
    </div>
    
  </div>
  </>
  );
}
