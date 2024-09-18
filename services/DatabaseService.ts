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


    async getAllKeys() {
        try {
            if (collections.rugby) {
                const keyList = await collections.rugby.findOne();
                for (let key in keyList) {
                    console.log(key);
                }
                return keyList;
            }
        } catch (error: any) {
            return { error: error.message };
        }
    }


    async searchData(key: string, value: string) {
        try {
            if (collections.rugby) {

                const result = { [key]: { $regex: new RegExp(value, 'i') } };
                const res = await collections.rugby.find(result).limit(2).toArray();
                console.log(res)

                return res
            }
        } catch (error: any) {
            return { error: error.message };
        }
    }



}

export const dbService = new DatabaseService();