import { Router } from 'express';
const router = Router();

import { setRate } from '../controllers/rates/setRate.js';
import { getRate } from '../controllers/rates/getRates.js';

router.post('/', setRate);
router.get('/', getRate);

export default router;