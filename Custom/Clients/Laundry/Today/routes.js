import express from 'express';
var router = express.Router();

import { router as routerFromOrders } from './Orders/routes.js';
import { router as routerFromQrcodes } from './Qrcodes/routes.js';
import { router as routerFromReports } from './Reports/routes.js';
import { router as routerFromSend } from './Send/routes.js';

router.use('/Orders', routerFromOrders);
router.use('/Qrcodes', routerFromQrcodes);

router.use('/Reports', routerFromReports);
router.use('/Send', routerFromSend);


export { router };