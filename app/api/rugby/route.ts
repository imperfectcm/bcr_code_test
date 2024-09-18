import { connectToDatabase } from "@/services/database.service";
import { dbService } from "@/services/DatabaseService";
import { NextRequest } from "next/server";


export async function POST(request: NextRequest) {
    await connectToDatabase();

    const dataList = await request.json();

    const checkedDataList = await Promise.all(
        dataList.map(async (data: any) => {
            return await dbService.isNewData(data)
        })
    );

    const newDataList = dataList.filter((data: any) => checkedDataList.includes(data));

    const allDataDuplicated = checkedDataList.every(data => data == false);
    const someDataDuplicated = checkedDataList.some(data => data == false);

    try {

        if (allDataDuplicated)
            return new Response(JSON.stringify({ message: "All data are duplicated" }), { status: 201 });

        const res = await dbService.insertRugbyData(newDataList);

        if (someDataDuplicated)
            return new Response(JSON.stringify({ message: "Some data are duplicated, other data have been uploaded", data: res }), { status: 201 });

        return new Response(JSON.stringify({ message: "Files uploaded successfully", data: res }), { status: 201 });

    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

}


export async function GET(request: NextRequest) {
    await connectToDatabase();

    try {
        const res = await dbService.getAllData();
        return new Response(JSON.stringify({ data: res }), { status: 200 });

    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}