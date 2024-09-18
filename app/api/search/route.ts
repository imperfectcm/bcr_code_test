
import { connectToDatabase } from "@/services/database.service";
import { dbService } from "@/services/DatabaseService";
import { NextRequest } from "next/server";


export async function GET(request: NextRequest) {
    await connectToDatabase();

    const key = request.nextUrl.searchParams.get("key")
    const value = request.nextUrl.searchParams.get("value")

    if (!key || !value) {
        return new Response(JSON.stringify({ error: "Key and value are required." }), { status: 400 });
    }

    try {

        const res = await dbService.searchData(key, value);

        if (!res) {
            return new Response(JSON.stringify({ message: "No data found." }), { status: 404 });
        }
        
        if (res) {
            return new Response(JSON.stringify(res), { status: 200 });
        }

    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }



}