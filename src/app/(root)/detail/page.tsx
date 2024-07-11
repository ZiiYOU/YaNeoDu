'use client';

import React, { useEffect, useState } from 'react';
import { License } from '../../types/License';
import axios from 'axios';
import { parseString } from 'xml2js';

// const API_ENDPOINT = 'http://openapi.q-net.or.kr/api/service/rest/InquiryListNationalQualifcationSVC';

export default function Detail() {
  const [licenses, setLicenses] = useState<License[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/licenses/');
        if (!res.data) {
          throw new Error('fetch data 가져오기 실패');
        }

        parseString(res.data, (error: any, result: any) => {
          if (error) {
            throw new Error('Failed to parse XML');
          }
          console.log('Parsed JSON data:', result);
        });

        // setLicenses(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center flex-col">
        <div className="w-16 h-16 rounded-full border border-solid border-gray-100 border-t-blue-500 border-4 mt-96 animate-spin"></div>
        <div className="text-center mt-8">Loading...</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto mt-40 flex">
      <aside className="w-1/4  bg-gray-200 flex flex-col rounded-lg mr-10 p-6 mb-28">
        <input type="search" placeholder="검색어를 입력하세요." className="bg-white rounded p-2 mb-3" />
        <p className="m-1">월간</p>
        <input type="date" className="bg-white rounded p-1 mb-3" />
        <p className="m-1">연간</p>
        <input type="date" className="bg-white rounded p-1 mb-3" />
        <p className="m-1">종목</p>
        <input type="search" className="bg-white rounded p-1 mb-3" />
        <p className="m-1">시험장</p>
        <input type="search" className="bg-white rounded p-1 mb-3" />
        <button className="mx-auto bg-blue-500 text-white w-32 py-1.5 mt-5 rounded-md">검색</button>
      </aside>

      <section className="w-3/4 flex flex-col mb-20">
        <header className="bg-gray-200 flex items-center justify-between px-7 p-4 rounded-md mb-8">
          <h2 className="text-center text-lg font-semibold">시험 일정</h2>
          <button className="bg-blue-500 text-white w-32 py-1.5 rounded-md">보러가기</button>
        </header>

        <ol className="overflow-y-auto flex-1 bg-white">
          {/* {licenses.map((schedule, index) => ( */}
          <li key="" className="border border-2 border-gray-300 rounded-lg p-5 mb-7">
            <div className="mb-3">
              <h4 className="font-semibold">시험 정보</h4>
              <p>시험 상세 정보</p>
            </div>

            <table className="min-w-full bg-white my-2 mt-7">
              <thead className="border-y-2">
                <tr>
                  <th className="text-center">필기시험 원서 접수 시작일자</th>
                  <th className="text-center">필기시험 원서 접수 종료일자</th>
                  <th className="text-center">필기시험 일자</th>
                  <th className="text-center">필기시험 합격(예정)자 발표 일자</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2">
                  <td className="text-center">0000.00.00</td>
                  <td className="text-center">0000.00.00</td>
                  <td className="text-center">0000.00.00</td>
                  <td className="text-center">0000.00.00</td>
                </tr>
              </tbody>
            </table>

            <table className="min-w-full bg-white my-2 mt-7">
              <thead className="border-y-2">
                <tr>
                  <th className="text-center">응시자격 서류제출 및 필기 시험 합격자 결정 시작일자</th>
                  <th className="text-center">응시자격 서류제출 및 필기 시험 합격자 결정 종료일자</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2">
                  <td className="text-center">0000.00.00</td>
                  <td className="text-center">0000.00.00</td>
                </tr>
              </tbody>
            </table>

            <table className="min-w-full bg-white my-2 mt-7">
              <thead className="border-y-2">
                <tr>
                  <th className="text-center">면접 시험 원서접수 시작일자</th>
                  <th className="text-center">면접 시험 원서접수 종료일자</th>
                  <th className="text-center">면접 시험 시작일자</th>
                  <th className="text-center">면접 시험 종료일자</th>
                  <th className="text-center">합격자 발표 일자</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2">
                  <td className="text-center">0000.00.00</td>
                  <td className="text-center">0000.00.00</td>
                  <td className="text-center">0000.00.00</td>
                  <td className="text-center">0000.00.00</td>
                  <td className="text-center">0000.00.00</td>
                </tr>
              </tbody>
            </table>
          </li>
          {/* ))} */}
        </ol>
      </section>
    </div>
  );
}
