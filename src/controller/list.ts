import { Request, Response } from "express";

import { v4 as uuidv4 } from "uuid";
import { ListInstance } from "../model/list";

class ListController {
	async create(req: Request, res: Response) {
        
		const id = uuidv4();
		try {
			const record = await ListInstance.create({ ...req.body, id });
			return res.json({ record, msg: "Successfully create" });
		} catch (e) {
			return res.json({ msg: "fail to create", status: 500, route: "/create" });
		}
	}

	async readPagination(req: Request, res: Response) {
		try {
			const limit = (req.query.limit as number | undefined) || 10;
			const offset = req.query.offset as number | undefined;

			const records = await ListInstance.findAll({ where: {}, limit, offset });
			return res.json(records);
		} catch (e) {
			return res.json({ msg: "fail to read", status: 500, route: "/read" });
		}
	}

	async update(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const record = await ListInstance.findOne({ where: { id } });

			if (!record) {
				return res.json({ msg: "Can not find existing record" });
			}
            const { title, description, labels, member, thumbnail } = req.body;
            let savedata = {
                title: title,
                description: description,
                labels: labels,
                member: member,
                thumbnail: thumbnail,
            };
			const updatedRecord = await record.update(savedata);
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
			const record = await ListInstance.findOne({ where: { id } });

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

export default new ListController();
