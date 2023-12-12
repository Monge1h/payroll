import { Employee } from '../../models/Employee.js'

export const listEmployee = async (req, res) => {
	// todo add pagination
	const employee = await Employee.findAll()
	return res.status(200).json({message: 'list of employee', data: employee});
}


