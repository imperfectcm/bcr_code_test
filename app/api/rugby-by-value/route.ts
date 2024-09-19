
import { connectToDatabase } from "@/services/database.service";
import { dbService } from "@/services/DatabaseService";
import { NextRequest } from "next/server";


export async function GET(request: NextRequest) {
    // await connectToDatabase();

    const key = request.nextUrl.searchParams.get("key")
    const value = request.nextUrl.searchParams.get("value")
    // const key = "home_away"
    // const value = "fi"

    if (!key || !value) {
        return new Response(JSON.stringify({ error: "Key and value are required." }), { status: 400 });
    }

    try {
        const res = await dbService.getDataByValue(key, value);
        console.log("res: ", res)

        if (res) return new Response(JSON.stringify(res), { status: 200 });

    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

}