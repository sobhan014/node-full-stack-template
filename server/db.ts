import { MongoClient } from 'mongodb';
import env from './env';

const mongodbUri = env.mongodb.uri;
const client = new MongoClient(mongodbUri);

let db;

async function connectToDB() {
  await client.connect();
  db = client.db('dbname');
}

export {
  connectToDB,
  db,
}
