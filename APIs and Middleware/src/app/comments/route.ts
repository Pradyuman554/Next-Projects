import {data} from "./data";
import { NextRequest } from "next/server";

// export async function GET(){
//     return Response.json(data);
// }

export async function POST(request:Request){
    const comment = await request.json();
    const newcomment = {
        id : data.length + 1,
        text: comment.text,
    }

    data.push(comment);
    return new Response(
        JSON.stringify(newcomment),
        {
            headers : {
                "Content-type" : "application/json",
            },
            status:201
        }
    );
}

export async function GET(request: NextRequest) {
    const param = request.nextUrl.searchParams;
    const query = param.get("query"); // Get the value of query
    const comm = query ? data.filter(p=>p.name.includes(query)) : data;
    return Response.json(comm);
  }