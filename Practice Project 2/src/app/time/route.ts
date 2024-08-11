export const dynamic = "force-dynamic"; //Segment Config Option to opt out of caching

export async function GET() {
    return Response.json({
        time : new Date().toLocaleTimeString(),
    })
}