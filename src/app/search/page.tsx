export default async function Page({
  searchParams
}: {
  searchParams: Promise<{q: string}>
}) {
  
  const { q } = await searchParams;

  return (
    <div>
      serach page : {q}
    </div>
  )
}