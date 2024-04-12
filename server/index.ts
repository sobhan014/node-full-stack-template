import express from 'express';
import cors from 'cors';
import { connectToDB } from './db';

connectToDB().then(() => {
  const app = express();
  const port = 3001;

  // Lets any FE send requests to the server.
  // TODO: change if/when you want to serve
  // requests only coming from your own FE.
  app.use(cors());

  app.get('/', (_, res) => {
    res.send('Hello World!');
  });

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});
