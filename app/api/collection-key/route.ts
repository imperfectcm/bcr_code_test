import { connectToDatabase } from "@/services/database.service";
import { dbService } from "@/services/DatabaseService";
import { NextRequest } from "next/server";


export async function GET(request: NextRequest) {
    await connectToDatabase();

    try {
        const titleList = await dbService.getAllKeys();
        return new Response(JSON.stringify(titleList), { status: 200 });
        // return keys;
    } catch (error: any) {
        return { error: error.message };
    }

}