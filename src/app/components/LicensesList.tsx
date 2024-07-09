"use client";

import axios from 'axios';
import { useEffect } from 'react';
import { BsFillXCircleFill } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]



function LicensesList() {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/licenses");
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [])
  
  return (

  
  <table className='border-collapse table-auto w-[1240px] m-auto border border-slate-300 text-center '>
    <thead>
      <tr className='h-12 font-bold text-lg border-b border-slate-300'>
        <td>자격증 명</td>
        <td>자격증 번호</td>
        <td>발급 연월일</td>
        <td>내지번호</td>
        <td className='w-[10%]'>확인 유무</td>
        <td className='w-[5%]'></td>
      </tr>
    </thead>
    <tbody>
      <tr className='h-16'>
        <td>자격증 명</td>
        <td>자격증 번호</td>
        <td>발급 연월일</td>
        <td>내지번호</td>
        <td><BsFillXCircleFill className='m-auto' size={40} color={"#d80e0e"}/> </td>
        {/* <BsCheckCircleFill className='m-auto' size={40} color={"#3e8311"}/> */}
        <td><MdDeleteForever className='cursor-pointer m-auto' size={30}/></td>
      </tr>
    </tbody>
  </table>
  )
}
{/* <Select options={options} /> */}
export default LicensesList