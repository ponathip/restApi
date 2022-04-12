// import db from "./config/database.config";
// import app from "./app";

import express, { Request, Response } from 'express';

import  ListRouter  from './route/list';
import  TaskRouter  from './route/task';
// var bodyParser = require('body-parser');

const app = express();
const port = 9000;
// app.use(bodyParser.json()); 
// app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.json());

app.use("/api/list", ListRouter);
app.use("/api/task", TaskRouter);

app.listen(port, () => {
	console.log("server is running on port " + port);
});

export default app;