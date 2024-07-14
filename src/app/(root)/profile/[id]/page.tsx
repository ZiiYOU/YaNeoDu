
import LicensesList from '@/components/LicensesList';
function myPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <LicensesList profileId={params.id as string}/>
    </div>
  )
}

export default myPage