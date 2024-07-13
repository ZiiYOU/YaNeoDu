import React from 'react'

const TestTableRow = ({title, data, bl, tl} : {title: string, data:string, bl:string, tl:string}) => {
  return (
    <tr className='h-16 flex items-center '>
        <td className={`w-2/5 min-w-56 min-h-full px-3 rounded-tl-${tl} rounded-bl-${bl} border-r border-solid border-slate-300 bg-gray-50 flex items-center font-semibold`}>{title}</td>
        <td className='w-3/5 px-3'>{data}</td>
    </tr>
  )
}

export default TestTableRow