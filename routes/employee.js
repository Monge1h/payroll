import { Router } from 'express';
const router = Router();

import { listEmployee } from '../controllers/employee/listEmployee.js';

/* GET employee listing. */
router.get('/', listEmployee);

export default router;
