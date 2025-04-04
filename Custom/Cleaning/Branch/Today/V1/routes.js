import express from 'express';

var router = express.Router();

import { router as routerFromAmountSplit } from './AmountSplit/routes.js';
import { router as routerFromOrdersWithQrs } from './OrdersWithQrs/routes.js';
import { router as OnlyOrders } from './OnlyOrders/routes.js';
import { router as OnlyQrs } from './OnlyQrs/routes.js';

router.use('/OrdersWithQrs', routerFromOrdersWithQrs);
router.use('/AmountSplit', routerFromAmountSplit);
router.use('/OnlyOrders', OnlyOrders);
router.use('/OnlyQrs', OnlyQrs);

export { router };