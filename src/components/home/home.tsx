"use client"

import React,{ useState, useEffect } from "react";
import { fetchLicenses } from "../../lib/licensesSupabase";
import { LicensesType } from "../../types/licensesType";
import { fetchQuestionPosts, fetchReviewPosts } from "../../lib/postSupabase";
import { PostsType } from "@/types/postsType";
import PostBox from '../home/postBox'

export default function Home() {
  const location : {id: number, name:string}[] = [{id:1, name:'서울'},{id:2, name:'경기'},{id:3, name:'인천'},{id:4, name:'강원'},{id:5, name:'대전'},{id:6, name:'충청'},{id:7, name:'광주'},{id:8, name:'전라'},{id:9, name:'대구'},{id:10, name:'부산'},{id:11, name:'울산'},{id:12, name:'경상'},{id:13, name:'제주'}]
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
          const reviewUpToFive = res.filter((_,idx)=>idx<=4).sort((a,b)=>b.post_id-a.post_id)
          setPosts((prev)=>{
            return {...prev, review: reviewUpToFive}
          })
      }catch(error){
          console.log('review error', error)
      }    
    }

    const getQuestionPosts = async () => {
      try{
        const res : PostsType[] = await fetchQuestionPosts();
        const questionUpToFive = res.filter((_,idx)=>idx<=4).sort((a,b)=>b.post_id-a.post_id)
        console.log(res)
        setPosts((prev)=>{
          return {...prev, question: questionUpToFive}
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
    <form className="w-6/12 h-full py-10 flex flex-col items-center justify-end gap-6">
      <input type="date" className="w-8/12 h-8 px-4 bg-white border border-gray-300 border-solid rounded-lg drop-shadow-md" />
      <select className="w-8/12 h-8 px-4 bg-white border border-gray-300 border-solid rounded-lg drop-shadow-md" >
        {location.map((lo)=>{
          return <option key={lo.id} value={lo.name}>{lo.name}</option>
        })}
      </select>
      <select className="w-8/12 h-8 px-4 bg-white border border-gray-300 border-solid rounded-lg drop-shadow-md" >
        {licenses.map((li:LicensesType)=>{
            return <option key={li.license_id} value={li.license_name}>{li.license_name}</option>
          })
        }
      </select>
    </form>
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
                <PostBox post_id={post.post_id} title={post.title} content={post.content} created_at={post.created_at}/>
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
              <PostBox post_id={post.post_id} title={post.title} content={post.content} created_at={post.created_at}/>
          )
        })}
      </div>
    </div>
    
  </div>
  </>
  );
}
