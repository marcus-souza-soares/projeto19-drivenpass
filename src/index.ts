import express, { json } from 'express';
import cors from 'cors';
import chalk from 'chalk';
import './envConfig/envConfig.js';
import { errorHandlingMiddleware } from "./middlewares/errorMiddleware.js"
import "express-async-errors"

import router from './routes/index.js';

const app = express();
app.use(json());
app.use(cors());
app.use(router);
app.use(errorHandlingMiddleware)


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(chalk.green.bold(`\nServer running on port ${port}...`));
});