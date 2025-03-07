import express from 'express';

var router = express.Router();

import { router as AllOrders } from './AllOrders/routes.js';
import { router as AllQrcodes } from './AllQrcodes/routes.js';
import { router as Payments } from './Payments/routes.js';
import { router as Dcs } from './Dcs/routes.js';

router.use('/AllOrders', AllOrders);
router.use('/AllQrcodes', AllQrcodes);
router.use('/Payments', Payments);
router.use('/Dcs', Dcs);

export { router };