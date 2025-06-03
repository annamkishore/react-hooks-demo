
export async function GET(request) {
  console.log("krishna", new URL(request.url).searchParams.get("id"));
  return new Response("Cool", {status: 200});
}
