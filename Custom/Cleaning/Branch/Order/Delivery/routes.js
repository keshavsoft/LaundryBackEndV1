import express from 'express';
var router = express.Router();

import { router as Completion } from './Completion/routes.js';
import { router as OrderScan } from './OrderScan/routes.js';
import { router as QrScan } from './QrScan/routes.js';

router.use('/Completion', Completion);
router.use('/OrderScan', OrderScan);
router.use('/QrScan', QrScan);

export { router };