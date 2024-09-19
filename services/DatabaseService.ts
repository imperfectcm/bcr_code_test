
import { collections} from "./database.service";


class DatabaseService {

    constructor() { }

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
                return (res);
            }
        } catch (error: any) {
            return { error: error.message };
        }
    }


    async getAllData() {
        try {
            if (collections.rugby) {
                const res = await collections.rugby.find().sort({fixture_datetime: 1}).toArray();
                return (res);
            }    
        } catch (error: any) {
            return { error: error.message };
        }    
    }    


    async getDataByValue(key: string, value: string) {
        try {
            if (collections.rugby) {

                const result = { [key]: { $regex: new RegExp(value, 'i') } };
                const res = await collections.rugby.find(result).sort({fixture_datetime: 1}).toArray();

                return res;
            }    
        } catch (error: any) {
            return { error: error.message };
        }    
    }    


    async getAllKeys() {
        try {
            if (collections.rugby) {
                const res = await collections.rugby.findOne();
                let keyList: string[] = [];
                for (let key in res) {
                    keyList.push(key)
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
                const res = await collections.rugby.find(result).limit(5).sort({fixture_datetime: 1}).toArray();

                return res
            }
        } catch (error: any) {
            return { error: error.message };
        }
    }

}

export const dbService = new DatabaseService();