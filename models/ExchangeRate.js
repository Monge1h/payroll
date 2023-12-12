

import { DataTypes } from '@sequelize/core'
import { sequelize } from "../database/database.js";

export const ExchangeRate = sequelize.define('exchange_rate', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	from_currency: DataTypes.STRING,
	to_currency: DataTypes.STRING,
	rate: DataTypes.REAL,
}, {
	timestamps: true
});
