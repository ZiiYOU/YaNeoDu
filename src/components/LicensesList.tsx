"use client";

import { createClient } from "@/supabase/client";
import { TLicense } from "@/types/licenses";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import LicensesTr from "./LicensesTr";

function LicensesList() {
  const [licenses, setLicenses] = useState<TLicense[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const supabase = createClient();

  const fetchLicenses = useCallback(async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      console.log(user);
      const response = await axios.get(`/api/licensesMy/${user.email}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data");
      return [];
    }
  }, [supabase]);

  useEffect(() => {
    const loadLicenses = async () => {
      const initialLicenses = await fetchLicenses();
      setLicenses(initialLicenses);
      setLoading(false);
    };

    loadLicenses();
  }, [fetchLicenses]);

  const addLicense = useCallback(() => {
    setLicenses((prevLicenses) => [
      ...prevLicenses,
      {
        id: uuidv4(),
        user_id: '',
        license_number: '',
        license_issue: '',
        license_sub_number: '',
        is_confirm: false,
      },
    ]);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-[1240px] m-auto">
      <button
        onClick={addLicense}
        className="px-5 py-2 mb-3 ml-auto bg-[#0090F9] flex items-center text-white font-bold text-center rounded-lg"
      >
        <FaPlus className="mr-2" color="#ffffff" /> 자격증 추가하기
      </button>
      <table className="w-full border-collapse table-fixed border border-slate-300 text-center ">
        <thead>
          <tr className="h-12 font-bold text-lg border-b border-slate-300 bg-gray-50">
            <td>자격증 명</td>
            <td>자격증 번호</td>
            <td>발급 연월일</td>
            <td>내지번호</td>
            <td className="w-[8%]">확인 유무</td>
            <td className="w-[5%]"></td>
          </tr>
        </thead>
        <tbody>
          {licenses ? 
            licenses.map((license) => (
              <LicensesTr key={license.id} license={license} />
            ))
            : 
            <tr>
              <td colSpan="6" className="text-center leading-10">값이 없습니다.</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  );
}

export default LicensesList;
