import express from 'express';

var router = express.Router();

import { router as routerFromScan } from './Scan/routes.js';
import { router as routerFromScanV1 } from './ScanV1/routes.js';
import { router as routerFromVoucher } from './Voucher/routes.js';
import { router as RouterFromV1 } from './V1/routes.js';
import { router as RouterFromV2 } from './V2/routes.js';

router.use('/Scan', routerFromScan);
router.use('/ScanV1', routerFromScanV1);
router.use('/Voucher', routerFromVoucher);
router.use('/V1', RouterFromV1);
router.use('/V2', RouterFromV2);


export { router };