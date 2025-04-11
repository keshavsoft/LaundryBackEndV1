import express from 'express';

var router = express.Router();

import { router as routerFromQrCode } from './QrCodeWise/routes.js';

router.use('/QrCodeWise', routerFromQrCode);

export { router };