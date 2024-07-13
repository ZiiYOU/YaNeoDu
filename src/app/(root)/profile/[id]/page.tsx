
import LicensesList from '@/components/LicensesList';
function myPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h3 className="font-bold text-4xl leading-[8rem] mt-3 text-gray-800 text-center ">OOO님의 자격증 정보</h3>
      <LicensesList id={params.id as string}/>
    </div>
  )
}

export default myPage