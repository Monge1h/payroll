import { DataTypes } from '@sequelize/core'
import { sequelize } from "../database/database.js";

export const Employee = sequelize.define('employee', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: DataTypes.STRING,
	country: DataTypes.STRING,
	base_salary: DataTypes.REAL,
	currency: DataTypes.STRING
}, {
	timestamps: true
});
