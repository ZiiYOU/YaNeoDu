import { ConfirmStateProps } from '@/types/admin'
import React from 'react'

const ConfirmState:React.FC<ConfirmStateProps> = ({setFilterData, filterData}) => {
  return (
    <div className='flex mt-[30px] ml-[50px]'>
    <button 
      className={`border-x border-t border-solid py-2 px-4 rounded ${filterData === 'pending'? 'bg-[#0090F9] text-white' : 'bg-white'}`}
      onClick={()=> setFilterData('pending')}
    >
      승인 대기중
    </button>
    <button 
      className={`border-x border-t py-2 px-4 border border-solid rounded ${filterData === 'confirmed'? 'bg-[#0090F9] text-white' : 'bg-white'}`}
      onClick={()=> setFilterData('confirmed')}
    >
      승인 완료
    </button>
  </div>
  )
}

export default ConfirmState