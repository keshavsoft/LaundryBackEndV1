import express from 'express';

var router = express.Router();

import { router as routerFromVouchers } from './Voucher/routes.js';

router.use('/Vouchers', routerFromVouchers);

export { router };