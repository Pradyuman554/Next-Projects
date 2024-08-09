import { data } from "../data";
import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  if (id > data.length) {
    redirect('/data');
  }

  const comment = data.filter((p) => p.id == params.id);

  return NextResponse.json(comment);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { name } = body;
  const index = data.findIndex((com) => com.id === params.id);
  data[index].name = name;
  return Response.json(data[index]);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const index = data.findIndex((p) => p.id === params.id);
  const comment = data[index];
  data.splice(index, 1);
  return Response.json(comment);
}