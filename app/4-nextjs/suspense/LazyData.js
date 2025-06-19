export default async function LazyData() {
  await new Promise(resolve => setTimeout(resolve, 1000)); // simulate 1 second network/data delay

  return <div>👤 User</div>;
}
