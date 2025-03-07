import express from 'express';
var router = express.Router();

import { router as NewOrder } from './NewOrder/routes.js';
import { router as Delivery } from './Delivery/routes.js';
import { router as SubTable } from './SubTable/routes.js';
import { router as NewOrderV1 } from './NewOrderV1/routes.js';
import { router as AmountSplit } from './AmountSplit/routes.js';

router.use('/NewOrder', NewOrder);
router.use('/Delivery', Delivery);
router.use('/SubTable', SubTable);
router.use('/NewOrderV1', NewOrderV1);
router.use('/AmountSplit', AmountSplit);

export { router };