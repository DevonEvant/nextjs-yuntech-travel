import { getToken, fetchData } from "./route";


export async function GET() {
    // try {
    // 1. get access token.
    const token = await getToken();
    // 2. get data from TDX api
    const apiData = await fetchData(token["access_token"]);
    // } catch () { } finally {
    //     return Response.data()
    // }
    return Response.json(apiData);
}

