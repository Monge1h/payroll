import { Employee } from '../../models/Employee.js'

export const createEmployee = async (req, res) =>{
	const { country, name, base_salary, currency } = req.body
	const employe = await Employee.create({
		country,
		name, 
		base_salary,
		currency
	})
	return res.status(201).json({message: 'Employe created', data: {idUser: employe.id}});
}

