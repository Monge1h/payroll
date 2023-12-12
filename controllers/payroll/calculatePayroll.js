import { Employee } from "../../models/Employee.js";
import { calculatePayroll } from "../../libs/payrollHelpers.js";

export const calculatePayrollEmployee = async (req, res, next) => {
	try {
		const { currency = "USD" } = req.query;

		const allEmployee = await Employee.findAll({ raw: true });
		const globalPayroll = await calculatePayroll(allEmployee, currency);
		return res
			.status(200)
			.json({
				message: `calculated payroll in ${currency}`,
				data: { totalPayroll: globalPayroll, currency },
			});
	} catch (error) {
		next(error);
	}
};
