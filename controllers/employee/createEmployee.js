// importar el modelo de empleados despues
// const Employee = require('../../models/employee');

export const createEmployee = async (req, res) =>{
	return res.status(201).json({message: 'createEmployee'});
}

