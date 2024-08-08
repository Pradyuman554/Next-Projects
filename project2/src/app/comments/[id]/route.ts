import { data } from "../data";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {

    const comment = data.filter((p)=>(p.id)==params.id);

  return Response.json(comment);
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