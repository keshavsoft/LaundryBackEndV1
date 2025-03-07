import express from 'express';

var router = express.Router();

import { router as routerFromQrCodes } from './QrCodes/routes.js';
import { router as routerFromOrders } from './Orders/routes.js';

router.use('/Qrcodes', routerFromQrCodes);
router.use('/Orders', routerFromOrders);

export { router };