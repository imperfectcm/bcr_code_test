import * as mongoDB from "mongodb";

export const collections: { rugby?: mongoDB.Collection, test?: mongoDB.Collection } = {}

export async function connectToDatabase() {

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING as string || "mongodb+srv://christophermyh:christophermyh@bcr-test.le5fy.mongodb.net/?retryWrites=true&w=majority&appName=bcr-test");

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME as string || "bcr-test");

  const rugbyCollection: mongoDB.Collection = db.collection(process.env.RUGBY_COLLECTION_NAME as string || "rugby");
  // const testCollection: mongoDB.Collection = db.collection(process.env.TEST_COLLECTION_NAME as string);

  collections.rugby = rugbyCollection;
  // collections.test = testCollection;

  // await client.close();

}
