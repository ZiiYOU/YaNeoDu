
import LicensesList from '@/components/LicensesList';
function myPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <LicensesList id={params.id as string}/>
    </div>
  )
}

export default myPage