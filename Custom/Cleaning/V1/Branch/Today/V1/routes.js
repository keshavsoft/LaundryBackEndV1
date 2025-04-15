import express from 'express';

var router = express.Router();

import { router as AmountSplit } from './AmountSplit/routes.js';
import { router as OnlyOrders } from './OnlyOrders/routes.js';
import { router as OnlyQrs } from './OnlyQrs/routes.js';
import { router as OrdersWithQrs } from './OrdersWithQrs/routes.js';

router.use('/AmountSplit', AmountSplit);
router.use('/OnlyOrders', OnlyOrders);
router.use('/OnlyQrs', OnlyQrs);
router.use('/OrdersWithQrs', OrdersWithQrs);

export { router };