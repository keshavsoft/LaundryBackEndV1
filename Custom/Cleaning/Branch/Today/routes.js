import express from 'express';

var router = express.Router();

import { router as routerFromQrCodes } from './QrCodes/routes.js';
import { router as routerFromOrders } from './Orders/routes.js';
import { router as routerFromV1 } from './V1/routes.js';

router.use('/Qrcodes', routerFromQrCodes);
router.use('/Orders', routerFromOrders);
router.use('/V1', routerFromV1);

export { router };