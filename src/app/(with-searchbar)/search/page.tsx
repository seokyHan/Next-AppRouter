export default async function Page({
  searchParams
}: {
  searchParams: { q?: string }
}) {
  
  return (
    <div>
      serach page : {searchParams.q}
    </div>
  )
}