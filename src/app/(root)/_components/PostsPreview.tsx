"use client"

import { PostsType } from '@/types/postsType';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PostBox from './postBox';

const PostsPreview = () => {
    const [posts, setPosts] = useState<{[key:string] : PostsType[]}>({review:[], question:[]});


    useEffect(()=>{
  
      const getReviewPosts = async () => {
        try{
            const res = await axios('/api/posts/review')
            console.log(res)
            const reviewUpToFive = res.data.sort((a : PostsType, b : PostsType)=>b.post_id-a.post_id).filter((_ :string,idx : number)=>idx<=4)
            setPosts((prev)=>{
              return {...prev, review: reviewUpToFive}
            })
        }catch(error){
            console.log('review error', error)
        }    
      }
  
      const getQuestionPosts = async () => {
        try{
          const res = await axios ('/api/posts/question')
          const questionUpToFive = res.data.sort((a : PostsType,b : PostsType)=>b.post_id-a.post_id).filter((_ : string,idx : number)=>idx<=4)
          console.log(res)
          setPosts((prev)=>{
            return {...prev, question: questionUpToFive}
          })
        }catch(error){
          console.log('question error',error)
        }
      }
  
      getReviewPosts();
      getQuestionPosts();
    },[])
    
  return (
    <>
        <div className="w-full h-6/12 py-4 flex flex-row justify-center">
    <div className="w-5/12 min-w-72 h-full flex flex-col items-center ">
      <div className="w-4/5 min-w-72 h-16 px-8 flex flex-row items-center justify-between ">
        <div>
          📔 합격 후기
        </div>
        <button className="text-sm text-gray-600 cursor-pointer hover:text-theme-color">+ 더보기</button>
      </div>
      <div className="w-4/5 min-w-72 h-72 px-4 py-4 flex flex-col gap-4 overflow-y-auto">
        {posts.review.map((post:PostsType)=>{
            return (
                <PostBox key={post.post_id} title={post.title} content={post.content} created_at={post.created_at}/>
            )
        })}
      </div>
    </div>
    <div className="w-5/12 min-w-72 h-full flex flex-col items-center">
      <div className="w-4/5 min-w-72 h-16 px-8 flex flex-row items-center justify-between " >
         🙋🏻‍♀ Q & A
         <button className="text-sm text-gray-600 cursor-pointer hover:text-theme-color">+ 더보기</button>
      </div>
      <div className="w-4/5 min-w-72 h-72 px-4 py-4 mb-10 flex flex-col gap-4 overflow-y-auto">
      {posts.question.map((post:PostsType)=>{
            return (
              <PostBox key={post.post_id} title={post.title} content={post.content} created_at={post.created_at}/>
          )
        })}
      </div>
    </div>
  </div>
    </>
  )
}

export default PostsPreview