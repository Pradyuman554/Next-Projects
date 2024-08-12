import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request : NextRequest) {
    //Give header to client and set their browsers cookies
    cookies().set("Sasrikal","Paaji");

    //Get headers from client
  //   const headerlist = headers();
  //   const theme = request.cookies.get("theme");

  //   console.log(headerlist.get("Authorization"),theme);
  // return new Response("<h1>Done</h1>", {
  //   headers: {
  //       "Content-type":"text/html",
  //       "Set-Cookie":"theme=dark",
  //   },
  // }
//);
}