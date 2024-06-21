// src/index.ts

import express from 'express';
import bodyParser from 'body-parser';
import { submitRouter } from './routes/submit';
import { readRouter } from './routes/read';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/submit', submitRouter);
app.use('/read', readRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
