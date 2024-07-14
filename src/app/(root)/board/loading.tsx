import React from 'react'

function loading() {
  return (
    <div className='w-full h-[780px] flex justify-center items-center'>
      <div className='w-36 h-36 bg-white bg-opacity-60 flex justify-center rounded-md items-center'>
        <div className='w-24 h-24 rounded-full border-4 border-theme-color text-center flex justify-center items-center text-[12px] font-bold'>
          Loading
        </div>
      </div>
    </div>
  )
}

export default loading