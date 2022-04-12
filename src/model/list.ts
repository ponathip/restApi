import { DataTypes, Model } from 'sequelize';
import db from '../config/database.config';

interface ListAttributes {
	id: string;
	title: string;
	createBy: string;
	// createDate: Date;
	updateBy: string;
	// updateDate: Date;
	// sortOrder: Int16Array;
}

export class ListInstance extends Model<ListAttributes> {}

ListInstance.init(
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
		tableName: 'list_ko',
	}
);
