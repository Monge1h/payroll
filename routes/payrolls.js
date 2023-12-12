import { Router } from 'express';
const router = Router();

import { calculatePayrollEmployee } from '../controllers/payroll/calculatePayroll.js';

router.get('/calculate-payroll', calculatePayrollEmployee);

export default router;