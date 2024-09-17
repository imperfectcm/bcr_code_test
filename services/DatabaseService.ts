import { collections } from "./database.service";


class DatabaseService {

    constructor() { }

    async getDataTest() {
        try {
            if (collections.test) {
                const data = (await collections.test.find({}).toArray());
                console.log(data);
                return (data);
            }
        } catch (error: any) {
            return { error: error.message };
        }
    };


    

}

export const dbService = new DatabaseService();