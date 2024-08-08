import { data } from "../data";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {

    const comment = data.filter((p)=>(p.id)==params.id);

  return Response.json(comment);
}
