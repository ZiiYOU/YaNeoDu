
import React, { useEffect, useState } from 'react'
import { CheckLicense } from '@/types/admin'
const useLicenses = () => {
  const [licenses, setLicenses] = useState<CheckLicense[]>([])
  const [filterData, setFilterData] = useState('pending')
  // supabase데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/licensesCheck')
        const data = await response.json()

        if (response.ok) {
          setLicenses(data)
        } else {
          console.error('에러 발생', data.error)
        }
      } catch (error) {
        console.error('에러 발생', error)
      }
    }
    fetchData()
  }, [])

  const handleConfirm = async (license_check_id: string, is_confirm: boolean) => {
    try {
      const updatedConfirmStatus = !is_confirm;
      const confirmDate = updatedConfirmStatus ? new Date().toISOString().split('T')[0] : null;
  
      const response = await fetch('/api/licensesCheck', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ license_check_id, is_confirm: updatedConfirmStatus, confirm_date: confirmDate }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setLicenses(licenses.map(license =>
          license.license_check_id === license_check_id ? { ...license, is_confirm: updatedConfirmStatus, confirm_date: confirmDate } : license
        ));
      } else {
        console.error('에러 발생', data.error);
      }
    } catch (error) {
      console.error('에러 발생', error);
    }
  };
  
  
  
  // 승인 여부 필터링
  const filteredLicenses = licenses.filter((license)=> {
    if(filterData === 'pending') return !license.is_confirm
    if(filterData === 'confirmed') return license.is_confirm
    return true
  })

  const formatDate = (date : Date | string | null) => {
    if(date instanceof Date) { 
      return date.toLocaleString()
    }
    return date
  }
  return { licenses, filterData, setFilterData, handleConfirm, filteredLicenses, formatDate}
}

export default useLicenses
