import app from './app.js'
import {sequelize} from './database/database.js'

// Import models in order to create tables
import './models/Employe.js'
import './models/ExchangeRate.js'


const main = async () => {
	try {
		sequelize.authenticate()
		sequelize.sync()
		console.log('Connection has been established successfully.');
		app.listen(3000);
		console.log('Server on port 3000');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
}

main()
