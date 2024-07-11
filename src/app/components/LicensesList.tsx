"use client";

import axios from 'axios';
import { useEffect, useState } from 'react';
import { BsCheckCircleFill, BsFillXCircleFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Select from 'react-select';

type LicenseOption = {
  value: string;
  label: string;
};

function LicensesList() {
  const [options, setOptions] = useState<LicenseOption[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/licenses");
        const licenses = response.data.map((license: { license_name: string }) => ({
          value: license.license_name,
          label: license.license_name,
        }));
        setOptions(licenses);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='w-[1240px] m-auto'>
      <button className='px-5 py-2 mb-3 ml-auto bg-[#0090F9] flex items-center text-white font-bold text-center rounded-lg'><FaPlus className='mr-2' color='#ffffff'/> 자격증 추가하기</button>
      <table className='w-full border-collapse table-fixed  border border-slate-300 text-center '>
        <thead>
          <tr className='h-12 font-bold text-lg border-b border-slate-300 bg-gray-50'>
            <td>자격증 명</td>
            <td>자격증 번호</td>
            <td>발급 연월일</td>
            <td>내지번호</td>
            <td className='w-[8%]'>확인 유무</td>
            <td className='w-[5%]'></td>
          </tr>
        </thead>
        <tbody>
          <tr className='h-16'>
            <td className='px-3 text-left'><Select options={options} placeholder="자격증 목록..."/></td>
            <td className='px-3'>자격증 번호</td>
            <td className='px-3'>발급 연월일</td>
            <td className='px-3'>내지번호</td>
            <td><BsFillXCircleFill className='m-auto' size={35} color={"#d80e0e"}/> </td>
            {/* <BsCheckCircleFill className='m-auto' size={35} color={"#3e8311"}/> */}
            <td><MdDeleteForever className='cursor-pointer m-auto' size={35}/></td>
          </tr>
          <tr className='h-16'>
            <td className='px-3 text-left'><Select options={options} placeholder="자격증 목록..."/></td>
            <td className='px-3'>자격증 번호</td>
            <td className='px-3'>발급 연월일</td>
            <td className='px-3'>내지번호</td>
            {/* <td><BsFillXCircleFill className='m-auto' size={35} color={"#d80e0e"}/> </td> */}
            <td><BsCheckCircleFill className='m-auto' size={35} color={"#3e8311"}/></td>
            <td><MdDeleteForever className='cursor-pointer m-auto' size={35}/></td>
          </tr>
          <tr className='h-16'>
            <td className='px-3 text-left'><Select options={options} placeholder="자격증 목록..."/></td>
            <td className='px-3'>자격증 번호</td>
            <td className='px-3'>발급 연월일</td>
            <td className='px-3'>내지번호</td>
            <td><BsFillXCircleFill className='m-auto' size={35} color={"#d80e0e"}/> </td>
            {/* <BsCheckCircleFill className='m-auto' size={35} color={"#3e8311"}/> */}
            <td><MdDeleteForever className='cursor-pointer m-auto' size={35}/></td>
          </tr>
          <tr className='h-16'>
            <td className='px-3 text-left'><Select options={options} placeholder="자격증 목록..."/></td>
            <td className='px-3'>자격증 번호</td>
            <td className='px-3'>발급 연월일</td>
            <td className='px-3'>내지번호</td>
            <td><BsFillXCircleFill className='m-auto' size={35} color={"#d80e0e"}/> </td>
            {/* <BsCheckCircleFill className='m-auto' size={35} color={"#3e8311"}/> */}
            <td><MdDeleteForever className='cursor-pointer m-auto' size={35}/></td>
          </tr>
          <tr className='h-16'>
            <td className='px-3 text-left'><Select options={options} placeholder="자격증 목록..."/></td>
            <td className='px-3'>자격증 번호</td>
            <td className='px-3'>발급 연월일</td>
            <td className='px-3'>내지번호</td>
            <td><BsFillXCircleFill className='m-auto' size={35} color={"#d80e0e"}/> </td>
            {/* <BsCheckCircleFill className='m-auto' size={35} color={"#3e8311"}/> */}
            <td><MdDeleteForever className='cursor-pointer m-auto' size={35}/></td>
          </tr>
          <tr className='h-16'>
            <td className='px-3 text-left'><Select options={options} placeholder="자격증 목록..."/></td>
            <td className='px-3'>자격증 번호</td>
            <td className='px-3'>발급 연월일</td>
            <td className='px-3'>내지번호</td>
            <td><BsFillXCircleFill className='m-auto' size={35} color={"#d80e0e"}/> </td>
            {/* <BsCheckCircleFill className='m-auto' size={35} color={"#3e8311"}/> */}
            <td><MdDeleteForever className='cursor-pointer m-auto' size={35}/></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LicensesList;
