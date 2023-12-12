

import { DataTypes } from '@sequelize/core'
import { sequelize } from "../database/database.js";

export const ExchangeRate = sequelize.define('exchange_rate', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	from_currency: {
		type: DataTypes.STRING,
		unique: 'compositeIndex'
	}, 
	to_currency: {
		type: DataTypes.STRING,
		unique: 'compositeIndex'
	},
	rate: DataTypes.REAL,
}, {
	timestamps: true
});
