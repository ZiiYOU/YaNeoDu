"use client";

import Input from "@/components/Input";
import { TLicense } from "@/types/licenses";
import { SelectOption } from "@/types/ui";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsFillXCircleFill } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import Select from "react-select";

interface LicensesTrProps {
  license: TLicense;
}

function LicensesTr({ license }: LicensesTrProps) {
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
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <tr className="h-16">
      <td className="px-3 text-left">
        <Select
          options={options}
          value={{ label: license.license_name, value: license.license_name }}
          placeholder="자격증 목록..."
          isDisabled
        />
      </td>
      <td className="px-3">
        <Input value={license.license_number} placeholder="자격증 번호" />
      </td>
      <td className="px-3">
        <Input value={license.license_issue} placeholder="발급 연월일" type="date" />
      </td>
      <td className="px-3">
        <Input value={license.license_sub_number} placeholder="내지번호" />
      </td>
      <td>
        <Input value={license.is_confirm ? "Yes" : "No"} placeholder="확인 유무" />
      </td>
      <td>
        <BsFillXCircleFill className="m-auto" size={35} color={"#d80e0e"} />
      </td>
      <td>
        <MdDeleteForever className="cursor-pointer m-auto" size={35} />
      </td>
    </tr>
  );
}

export default LicensesTr;
