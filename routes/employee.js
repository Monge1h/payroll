import { Router } from 'express';
const router = Router();

import { listEmployee } from '../controllers/employee/listEmployee.js';
import { createEmployee } from '../controllers/employee/createEmployee.js';

router.get('/', listEmployee);
router.post('/', createEmployee);

export default router;
