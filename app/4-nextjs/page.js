
// no client based hooks means, this is a SSR page

export default async function Hello({ params, searchParams }) {
  let paramsJson = await params
  let searchParamsJson = await searchParams

  const id = parseInt(searchParamsJson.id, 10);

  if (isNaN(id)) {
    return <h1>Invalid ID</h1>;
  }

  console.log(paramsJson, searchParamsJson)
  return <h1>User ID is: {id}</h1>;
}
