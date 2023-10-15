export async function GET(request: Request) {
  const jsonData = {
    message: "Hello, this is example JSON data!",
    status: "Success",
    data: {
      key1: "value1",
      key2: "value2",
    },
  };

  return new Response(JSON.stringify(jsonData), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
