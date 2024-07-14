import { LicenseListsProps } from '@/types/admin'
import React from 'react'


const LicenseLists: React.FC<LicenseListsProps> = ({ handleConfirm, formatDate, filteredLicenses }) => {
  return (
    <tbody>
      {filteredLicenses.map((license) => (
        <tr className='border-b border-solid' key={license.license_check_id}>
          <td className='p-[18px] text-center'>{license.user_id}</td>
          <td className='p-[18px] text-center'>{license.user_name}</td>
          <td className='p-[18px] text-center'>{formatDate(license.user_birth)}</td>
          <td className='p-[18px] text-center'>{license.license_number}</td>
          <td className='p-[18px] text-center'>{formatDate(license.license_issue)}</td>
          <td className='p-[18px] text-center'>{license.license_sub_number}</td>
          <td className='p-[18px] text-center'>{formatDate(license.confirm_date)}</td>
          <td>
            <button 
              className={`border border-solid py-[7px] px-[10px] rounded-xl text-white ${license.is_confirm ? 'bg-[#FF3030]' : 'bg-[#0090F9]'}`}
              onClick={() => handleConfirm(license.license_check_id, license.is_confirm)}
            >
              {license.is_confirm ? '승인취소' : '승인확인'}
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default LicenseLists;
