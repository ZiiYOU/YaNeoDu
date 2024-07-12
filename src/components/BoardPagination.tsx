"use client"

interface Props {
  currentPage: number,
  pageRange: { start: number, end: number },
  nextPage: any,
  prevPage: any,
}

export default function BoardPagination() {
  

  return (
    <div>
      <button className="w-5 h-5 text-slate-500">◄</button>
      <ul className="flex justify-center items-center gap-2 p-3 text-center">
        {

        }
        <li className="w-5 h-5 bg-slate-300 rounded-md">1{/* active */}</li>
        <li className="w-5 h-5">2</li>
      </ul>
      <button className="w-5 h-5 text-slate-500">►</button>
    </div>
  )
}