// import express, { Request, Response } from 'express';
import express from 'express';
// import db from "../config/database.config";
// import { ListInstance } from "../model/list";
// import { v4 as uuidv4 } from "uuid";
import TaskController from '../controller/task';
// const app = express();
// app.use(express.json())
const router = express.Router();

router.post(
	'/create',
	TaskController.create
);

router.get(
	'/read',
	TaskController.readPagination
);

router.put(
	'/update/:id',
	TaskController.update
);

router.delete(
	'/delete/:id',
	TaskController.delete
);
export default router;