"use client"

interface Props {
  totalItems: number,
  itemsPerPage: number,
  currentPage: number,
  onPageChange: (pageNumber: number) => void,
}

export default function BoardPagination({totalItems, itemsPerPage, currentPage, onPageChange}: Props) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (pageNumber: number) => {
    onPageChange(pageNumber);
  };

  const active = "w-5 h-5 rounded-full bg-theme-color text-white"

  return (
    <div className="flex gap-3 justify-center items-center">
      <button onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1} className="w-5 h-5 text-slate-500 cursor-pointer">◄</button>
      <ul className="flex justify-center items-center gap-2 p-3 text-center">
        {Array.from({ length: totalPages }, (_, i) => (
          <li
            key={i + 1}
            onClick={() => handleClick(i + 1)}
            className={currentPage === i + 1 ? active : 'w-5 h-5 cursor-pointer'}
          >
            {i + 1}
          </li>
        ))}
      </ul>
      <button onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages} className="w-5 h-5 text-slate-500 cursor-pointer">►</button>
    </div>
  )
}