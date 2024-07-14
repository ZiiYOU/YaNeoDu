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
  onDelete?: (id: string) => void;
  onChange?: (id: string, updatedLicense: Partial<TLicense>) => void;
  isInput?: boolean;
}

function LicensesTr({ license, onDelete, onChange, isInput = false }: LicensesTrProps) {
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
        console.error("자격증 목록 가져오기 오류:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (field: keyof TLicense, value: any) => {
    onChange(license.license_check_id, { [field]: value });
  };

  return (
    <tr className="h-12 border-b border-slate-300">
      {isInput ? (
        <>
          <td>
            <Select
              options={options}
              value={options.find(option => option.value === license.license_name) || null}
              onChange={(selectedOption) => handleChange("license_name", selectedOption ? selectedOption.value : '')}
              isDisabled={license.is_confirm}
              className="w-[95%] mx-auto"
            />
          </td>
          <td>
            <Input
              value={license.license_number}
              onChange={(e) => handleChange("license_number", e.target.value)}
              isDisabled={license.is_confirm}
            />
          </td>
          <td>
            <Input
              type="date"
              value={license.license_issue}
              onChange={(e) => handleChange("license_issue", e.target.value)}
              isDisabled={license.is_confirm}
            />
          </td>
          <td>
            <Input
              value={license.license_sub_number}
              onChange={(e) => handleChange("license_sub_number", e.target.value)}
              isDisabled={license.is_confirm}
            />
          </td>
          <td>
            <div className="flex justify-center items-center">
              {license.is_confirm ? (
                <BsCheckCircleFill color="green" size={30}/>
              ) : (
                <BsFillXCircleFill color="red" size={30}/>
              )}
            </div>
          </td>
          <td>
            <button onClick={() => onDelete(license.license_check_id)}>
              <MdDeleteForever color="red" size={30} />
            </button>
          </td>
        </>
      ) : (
        <>
          <td>{license.license_name}</td>
          <td>{license.license_number}</td>
          <td>{license.license_issue}</td>
          <td>{license.license_sub_number}</td>
          <td>
            <div className="flex justify-center items-center">
                <BsCheckCircleFill color="green" size={30}/>
            </div>
          </td>
        </>
      )}
    </tr>
  );
}

export default LicensesTr;
