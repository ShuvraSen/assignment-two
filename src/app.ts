// const express = require("express");

import express, { Application, Request, Response } from 'express';

import cors from 'cors';
import { UserRoute } from './app/modules/user/user.route';
const app: Application = express();
// const port = 3000;

app.use(express.json());
app.use(cors());
app.use('/api/users', UserRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
