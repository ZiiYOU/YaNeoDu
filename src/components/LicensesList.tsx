"use client";

import { createClient } from "@/supabase/client";
import { TLicense } from "@/types/licenses";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import LicensesTr from "./LicensesTr";

function LicensesList({ id }: { id?: string }) {
  const router = usePathname();

  const [licenses, setLicenses] = useState<TLicense[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string>("");
  const [modifiedLicenses, setModifiedLicenses] = useState<Record<string, TLicense>>({});
  const supabase = createClient();



  const fetchLicenses = useCallback(async () => {
    try {
      let response;
      if (router === '/my') {
        const { data: { user } } = await supabase.auth.getUser();
        setUserEmail(user.email);
        console.log(user)
        response = await axios.get(`/api/licensesMy/${user.email}`);
      } else if (id && typeof id === 'string') {
        response = await axios.get(`/api/licensesMy/${id}`);
      } else {
        throw new Error('Invalid route');
      }

      return response.data;
    } catch (error) {
      console.error("데이터 가져오기 오류:", error);
      setError("데이터 가져오기 오류");
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
    const uuid = uuidv4();
    setLicenses((prevLicenses) => [
      ...prevLicenses,
      {
        id: uuid,
        user_id: userEmail,
        license_name: '',
        license_number: '',
        license_issue: '',
        license_sub_number: '',
        is_confirm: false,
      },
    ]);
  }, [userEmail]);

  const handleLicenseChange = (id: string, updatedLicense: Partial<TLicense>) => {
    setLicenses((prevLicenses) => 
      prevLicenses.map((license) => 
        license.id === id ? { ...license, ...updatedLicense } : license
      )
    );
    setModifiedLicenses((prevModifiedLicenses) => ({
      ...prevModifiedLicenses,
      [id]: { ...prevModifiedLicenses[id], ...updatedLicense }
    }));
  };

  const deleteLicense = async (id: string) => {
    const confirmed = window.confirm("정말로 이 자격증을 삭제하시겠습니까?");
    if (!confirmed) return;

    try {
      await axios.delete(`/api/licensesMy/${id}`);
      setLicenses((prevLicenses) => prevLicenses.filter(license => license.id !== id));
      setModifiedLicenses((prevModifiedLicenses) => {
        const newModifiedLicenses = { ...prevModifiedLicenses };
        delete newModifiedLicenses[id];
        return newModifiedLicenses;
      });
    } catch (error) {
      console.error("자격증 삭제 오류:", error);
    }
  };

  const saveAllLicenses = async () => {
    const emptyFields = licenses.some(license => 
      !license.license_name.trim() || !license.license_number.trim() || !license.license_issue || !license.license_sub_number.trim()
    );

    console.log(licenses);

    if (emptyFields) {
      alert("모든 필드를 채워야 합니다.");
      return;
    }

    if (Object.keys(modifiedLicenses).length === 0) {
      alert("수정되거나 추가된 데이터가 없습니다.");
      return;
    }

    try {
      await axios.post('/api/licensesMy/saveAll', Object.values(modifiedLicenses));
      alert("모든 자격증이 저장되었습니다.");
      setModifiedLicenses({});
    } catch (error) {
      console.error("자격증 저장 오류:", error);
    }
  };

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-[1240px] m-auto">
      <div className="flex">
        <button
          onClick={addLicense}
          className="px-5 py-2 mb-3 ml-auto bg-[#0090F9] flex items-center text-white font-bold text-center rounded-lg"
        >
          <FaPlus className="mr-2" color="#ffffff" /> 자격증 추가하기
        </button>
        <button
          onClick={saveAllLicenses}
          className="px-5 py-2 mb-3 ml-3 bg-[#0090F9] flex items-center text-white font-bold text-center rounded-lg"
        >
          전체 자격증 저장하기
        </button>
      </div>
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
          {licenses.length > 0 ? 
            licenses.map((license) => (
              <LicensesTr key={license.id} license={license} onDelete={deleteLicense} onChange={handleLicenseChange} />
            ))
            : 
            <tr>
              <td colSpan="6" className="text-center leading-10">추가한 자격증이 없습니다.</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  );
}

export default LicensesList;
