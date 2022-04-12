// import express, { Request, Response } from 'express';
import express from 'express';
// import db from "../config/database.config";
// import { ListInstance } from "../model/list";
// import { v4 as uuidv4 } from "uuid";
import ListController from '../controller/list';
// const app = express();
// app.use(express.json())
const router = express.Router();

router.post(
	'/create',
	ListController.create
);

router.get(
	'/read',
	ListController.readPagination
);

router.put(
	'/update/:id',
	ListController.update
);

router.delete(
	'/delete/:id',
	ListController.delete
);
export default router;