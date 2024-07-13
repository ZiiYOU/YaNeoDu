"use client";

import "@/app/globals.css";
import React, { useState } from "react";
import { createClient } from '@/supabase/client'
import Router, { useRouter } from "next/navigation";
import Link from "next/link";
const supabase = createClient()

export default function Signup() {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordCheck, setPasswordCheck] = useState<string>("");
  
  const [name, setName] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [birth, setBirth] = useState<string>("");
  
  const router = useRouter();

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const passwordCheckChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(e.target.value);
  };
  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const nicknameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  const birthChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirth(e.target.value.toString());
  };

  const signupHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            password: password,
            name: name,
            nickname: nickname,
            birth: birth
          }
        }
      })
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={signupHandler} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                이메일
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter Email..."
                  required
                  onChange={emailChangeHandler}
                  autoComplete="email"
                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                비밀번호
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter Password..."
                  onChange={passwordChangeHandler}
                  required
                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="passwordCheck" className="block text-sm font-medium leading-6 text-gray-900">
                비밀번호 확인
              </label>
              <div className="mt-2">
                <input
                  id="passwordCheck"
                  name="passwordCheck"
                  type="password"
                  onChange={passwordCheckChangeHandler}
                  required
                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                이름
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  onChange={nameChangeHandler}
                  autoComplete="current-name"
                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="nickname" className="block text-sm font-medium leading-6 text-gray-900">
                닉네임
              </label>
              <div className="mt-2">
                <input
                  id="nickname"
                  name="nickname"
                  type="text"
                  required
                  onChange={nicknameChangeHandler}
                  autoComplete="current-nickname"
                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="birth" className="block text-sm font-medium leading-6 text-gray-900">
                생년월일
              </label>
              <div className="mt-2">
                <input
                  id="birth"
                  name="birth"
                  type="date"
                  required
                  autoComplete="date"
                  onChange={birthChangeHandler}
                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-theme-color px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ease-out duration-100"
                >
                  가입하기
                </button>
            </div>
          </form>

          <p className="w-80 mt-5 text-center text-sm text-gray-500">
            이미 계정이 있으신가요?{' '}
            <Link href="/login" className="font-semibold leading-6 text-theme-color hover:text-sky-400">
              로그인
            </Link>
          </p>
        </div>
      </div>
    </>
  )

}