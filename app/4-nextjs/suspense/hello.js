
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export default async function Hello() {
  await delay(1000)
  return <>Hello</>
}
