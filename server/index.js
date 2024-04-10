import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';

const app = express();
const port = 3001;

// Lets any FE send requests to the server.
// TODO: change if/when you want to serve
// requests only coming from your own FE.
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const mongodbUri = 'mongodb://localhost:27017';
const client = new MongoClient(mongodbUri);

try {
  // Connect the client to the server
  await client.connect();
  // Establish and verify connection
  await client.db('dbname').command({ ping: 1 });
  console.log('Connected successfully to mongodb server');

  // Create a collection
  await client.db('dbname').createCollection('sampleCollection');
  console.log('Sample collection created');

  // Insert a sample document in the collection
  await client.db('dbname')
    .collection('sampleCollection')
    .insertOne({ name: 'name', email: 'email' });
  console.log('1 document inserted');

  // Find a document
  const result = await client.db('dbname')
    .collection('sampleCollection')
    .findOne({ name: 'name' });
  console.log('Found 1 document. email: ', result.email);
} catch (e) {
  console.error(e);
} finally {
  // Ensures that the client will close when you finish/error
  await client.close();
}