import {data} from "./data";

export async function GET(){
    return Response.json(data);
}

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