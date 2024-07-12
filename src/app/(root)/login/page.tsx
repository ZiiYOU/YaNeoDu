"use client";

import "@/app/globals.css";
import { createClient } from '@/supabase/client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
const supabase = createClient()

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const loginHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // const signInWithGithub = async () => {
  //   const { data, error } = await supabase.auth.signInWithOAuth({
  //     provider: 'github',
  //     options: {
  //       redirectTo: '/'
  //     }
  //   });
  // };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={loginHandler} className="space-y-6">
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
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  비밀번호
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-theme-color hover:text-sky-400">
                    비밀번호를 까먹으셨나요?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter Password..."
                  onChange={passwordChangeHandler}
                  required
                  autoComplete="current-password"
                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <Link href='/'>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-theme-color px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ease-out duration-100"
                >
                  로그인
                </button>
              </Link>

            </div>
          </form>

          <p className="w-80 mt-5 text-center text-sm text-gray-500">
            아직 계정이 없으신가요?{' '}
            <Link href="/signup" className="font-semibold leading-6 text-theme-color hover:text-sky-400">
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </>
  )

}