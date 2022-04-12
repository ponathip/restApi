import { Request, Response } from "express";

import { v4 as uuidv4 } from "uuid";
import { TaskInstance } from "../model/task";

class TaskController {
	async create(req: Request, res: Response) {

		const id = uuidv4();
		try {
			const record = await TaskInstance.create({...req.body, id });
            
			return res.json({ record, msg: "Successfully create" });
		} catch (e) {
			return res.json({ msg: "fail to create", status: 500, route: "/create" });
		}
	}

	async readPagination(req: Request, res: Response) {
		try {
			const limit = (req.query.limit as number | undefined) || 10;
			const offset = req.query.offset as number | undefined;

			const records = await TaskInstance.findAll({ where: {}, limit, offset });
			return res.json(records);
		} catch (e) {
			return res.json({ msg: "fail to read", status: 500, route: "/read" });
		}
	}

	async update(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const record = await TaskInstance.findOne({ where: { id } });

			if (!record) {
				return res.json({ msg: "Can not find existing record" });
			}
            const { title } = req.body;
			const updatedRecord = await record.update({
                title: title 
            });
            return res.json({ record: updatedRecord });
		} catch (e) {
			return res.json({
				msg: "fail to read",
				status: 500,
				route: "/update/:id",
			});
		}
	}
	async delete(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const record = await TaskInstance.findOne({ where: { id } });

			if (!record) {
				return res.json({ msg: "Can not find existing record" });
			}

			const deletedRecord = await record.destroy();
			return res.json({ record: deletedRecord });
		} catch (e) {
			return res.json({
				msg: "fail to read",
				status: 500,
				route: "/delete/:id",
			});
		}
	}
}

export default new TaskController();
