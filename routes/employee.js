import { Router } from 'express';
const router = Router();

import { listEmployee } from '../controllers/employee/listEmployee.js';
import { createEmployee } from '../controllers/employee/createEmployee.js';

import schemaValidationMiddleware from '../middlewares/schemaValidationMiddleware.js';
import { newEmployeeSchema } from '../schemas.js';

router.get('/',listEmployee);
router.post('/',schemaValidationMiddleware(newEmployeeSchema),  createEmployee);

export default router;
