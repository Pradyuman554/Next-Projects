import { NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET() {
  const headerlist = headers();

  console.log(headerlist.get("Authorization"));
  return new Response("<h1>Done</h1>", {
    headers: {
        "Content-type":"text/html",
    },
  });
}
