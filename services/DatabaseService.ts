import { InsertManyResult } from "mongodb";
import { collections, connectToDatabase } from "./database.service";


class DatabaseService {

    constructor() { }

    async findLimit() {
        try {
            if (collections.test) {
                const res = await collections.test.find().limit(2).toArray();
                console.log(res);
                return (res);
            }
        } catch (error: any) {
            return { error: error.message };
        }
    }


    async getAllData() {
        try {
            if (collections.rugby) {
                const res = await collections.rugby.find().toArray();
                console.log(res.length);
                return (res.length);
            }
        } catch (error: any) {
            return { error: error.message };
        }
    }


    async isNewData(data: Document) {
        try {
            if (collections.rugby) {
                const res = await collections.rugby.find(data).toArray();
                if (res.length > 0) return false;
                return data;
            }
        } catch (error: any) {
            return { error: error.message };
        }
    }



    async insertRugbyData(data: Document[]) {
        try {
            if (collections.rugby) {
                const res = await collections.rugby.insertMany(data);
                console.log(res);
                return (res);
            }
        } catch (error: any) {
            return { error: error.message };
        }
    }


    async searchData(input: string) {
        if (collections.rugby) {
            const res = await collections.rugby.find({ field: `/${input}/` })
        }
    }



}

export const dbService = new DatabaseService();