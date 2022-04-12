import { DataTypes, Model } from 'sequelize';
import db from '../config/database.config';

interface TaskAttributes {
	id: string;
	title: string;
	createBy: string;
    description: string;
    thumbnail: string;
    startDate: Date;
    endDate:Date;
    labels: string;
    member: string;
    list_id: string;
	// createDate: Date;
	updateBy: string;
	// updateDate: Date;
	// sortOrder: Int16Array;
}

export class TaskInstance extends Model<TaskAttributes> {}

TaskInstance.init(
	{
		id: {
			type: DataTypes.UUIDV4,
			primaryKey: true,
			allowNull: false,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
        description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
        thumbnail: {
			type: DataTypes.STRING,
			allowNull: false,
		},
        startDate: {
			type: DataTypes.DATE,
			allowNull: false,
		},
        endDate: {
			type: DataTypes.STRING,
			allowNull: false,
		},
        labels: {
			type: DataTypes.STRING,
			allowNull: false,
		},
        member: {
			type: DataTypes.STRING,
			allowNull: false,
		},
        list_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		createBy: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		// createDate: DataTypes.DATE,
		updateBy: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		// updateDate: DataTypes.DATE,
		// sortOrder: DataTypes.INTEGER,
	},
	{
		sequelize: db,
		tableName: 'task_ko',
	}
);
