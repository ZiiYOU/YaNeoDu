"use client";

import Input from "@/components/Input";
import { TLicense } from "@/types/licenses";
import { SelectOption } from "@/types/ui";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsCheckCircleFill, BsFillXCircleFill } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import Select from "react-select";

interface LicensesTrProps {
  license: TLicense;
  onDelete: (id: string) => void;
  onChange: (id: string, updatedLicense: Partial<TLicense>) => void;
}

function LicensesTr({ license, onDelete, onChange }: LicensesTrProps) {
  const [options, setOptions] = useState<SelectOption[]>([]);



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
        console.error("데이터 가져오기 오류:", error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name)
    onChange(license.id, { [name]: value });
  };

  const handleSelectChange = (option: SelectOption | null) => {
    onChange(license.id, { license_name: option ? option.value : '' });
  };

  return (
    <tr className="h-16">
      <td className="px-3 text-left">
        <Select
          options={options}
          value={{ label: license.license_name, value: license.license_name }}
          placeholder="자격증 목록..."
          isDisabled={license.is_confirm}
          onChange={handleSelectChange}
        />
      </td>
      <td className="px-3">
        <Input 
          name="license_number"
          value={license.license_number} 
          placeholder="자격증 번호" 
          disabled={license.is_confirm} 
          onChange={handleInputChange}
        />
      </td>
      <td className="px-3">
        <Input 
          name="license_issue"
          value={license.license_issue} 
          placeholder="발급 연월일" 
          type="date" 
          disabled={license.is_confirm} 
          onChange={handleInputChange}
        />
      </td>
      <td className="px-3">
        <Input 
          name="license_sub_number"
          value={license.license_sub_number} 
          placeholder="내지번호" 
          disabled={license.is_confirm} 
          onChange={handleInputChange}
        />
      </td>
      <td>
        {license.is_confirm ? <BsCheckCircleFill className='m-auto' size={35} color={"#3e8311"} /> : <BsFillXCircleFill className="m-auto" size={35} color={"#d80e0e"} />}
      </td>
      <td>
        <MdDeleteForever className="cursor-pointer m-auto" size={35} onClick={() => onDelete(license.id)} />
      </td>
    </tr>
  );
}

export default LicensesTr;
