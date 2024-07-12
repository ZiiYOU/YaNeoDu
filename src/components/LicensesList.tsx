"use client";

import { TLicense } from "@/types/licenses";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import LicensesTr from "./LicensesTr";

async function fetchLicenses() {
  try {
    const response = await axios.get(`/api/licensesMy`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

function LicensesList() {
  const [licenses, setLicenses] = useState<TLicense[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadLicenses = async () => {
      const initialLicenses = await fetchLicenses();
      setLicenses(initialLicenses);
      setLoading(false);
    };

    loadLicenses();
  }, []);

  const addLicense = () => {
    // setLicenses([
    //   ...licenses,
      
    // ]);
  };

  if (loading) {
    return <div></div>;
  }

  return (
    <div className='w-[1240px] m-auto'>
      <button
        onClick={addLicense}
        className='px-5 py-2 mb-3 ml-auto bg-[#0090F9] flex items-center text-white font-bold text-center rounded-lg'
      >
        <FaPlus className='mr-2' color='#ffffff' /> 자격증 추가하기
      </button>
      <table className='w-full border-collapse table-fixed border border-slate-300 text-center '>
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
          {licenses.map((license, index) => (
            <LicensesTr key={license.id || index} license={license} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LicensesList;
