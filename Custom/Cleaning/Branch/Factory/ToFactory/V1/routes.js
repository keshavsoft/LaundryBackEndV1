import express from 'express';

var router = express.Router();

import { router as routerFromVouchers } from './Vouchers/routes.js';
import { router as routerFromQrCodes } from './QrCodes/routes.js';

router.use('/Vouchers', routerFromVouchers);
router.use('/QrCodes', routerFromQrCodes);

export { router };