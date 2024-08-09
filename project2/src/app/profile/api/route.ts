import { NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(){
    const header = headers();

    console.log(header.get("Authorization"));
    return new Response("Done");
}