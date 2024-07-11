"use client";

import Input from '@/components/Input';
import { SelectOption } from '@/types/ui';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { BsFillXCircleFill } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import Select from 'react-select';


function LicensesTr() {
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
    <tr className='h-16'>
      <td className='px-3 text-left'>
        <Select options={options} placeholder="자격증 목록..." isDisabled={true} />
      </td>
      <td className='px-3'>
        <Input value="자격증" placeholder="자격증" />
      </td>
      <td className='px-3'><Input value="발급 연월일" placeholder="발급 연월일" /></td>
      <td className='px-3'><Input value="내지번호" placeholder="내지번호" /></td>
      <td>
        <BsFillXCircleFill className='m-auto' size={35} color={"#d80e0e"} />
      </td>
      <td>
        <MdDeleteForever className='cursor-pointer m-auto' size={35} />
      </td>
    </tr>
  );
}

export default LicensesTr;


