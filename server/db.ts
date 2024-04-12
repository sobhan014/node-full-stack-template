import { MongoClient } from 'mongodb';

const mongodbUri = 'mongodb://localhost:27017';
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
