
// importar el modelo de empleados despues
// const Employee = require('../../models/employee');

export const listEmployee = async (req, res) => {
	return res.status(200).json({message: 'listEmployee', data: []});
}


