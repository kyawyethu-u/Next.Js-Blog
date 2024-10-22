export async function GET() {
const posts = [{id: 1, title: "Code.IO", body: "Next is so cool"}]
   
    return Response.json(posts)
  }