import express from 'express';

var router = express.Router();

import { router as routerFromVouchers } from './Vouchers/routes.js';

router.use('/Vouchers', routerFromVouchers);

export { router };