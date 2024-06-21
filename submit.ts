// src/routes/submit.ts

import { Router } from 'express';
import { Submission } from '../models/submission';
import fs from 'fs';
import path from 'path';

const submitRouter = Router();

submitRouter.post('/', (req, res) => {
  const { name, email, phone, github_link, stopwatch_time } = req.body;
  if (!name || !email || !phone || !github_link || !stopwatch_time) {
    return res.status(400).send('Missing fields in the request body');
  }

  const newSubmission: Submission = { name, email, phone, github_link, stopwatch_time };
  const dbPath = path.resolve(__dirname, '../db/db.json');
  const submissions: Submission[] = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));

  submissions.push(newSubmission);
  fs.writeFileSync(dbPath, JSON.stringify(submissions, null, 2));

  res.status(201).send('Submission saved successfully');
});

export { submitRouter };
