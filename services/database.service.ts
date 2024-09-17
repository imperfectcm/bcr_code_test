import * as mongoDB from "mongodb";

export const collections: { rugby?: mongoDB.Collection, test?: mongoDB.Collection } = {}

export async function connectToDatabase() {

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING as string);

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const rugbyCollection: mongoDB.Collection = db.collection(process.env.RUGBY_COLLECTION_NAME as string);
  const testCollection: mongoDB.Collection = db.collection(process.env.TEST_COLLECTION_NAME as string);

  collections.rugby = rugbyCollection;
  collections.test = testCollection;

  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${rugbyCollection.collectionName}`);
  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${testCollection.collectionName}`);
}
