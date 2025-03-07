import express from 'express';

var router = express.Router();

import { router as Orders } from './Orders/routes.js';
import { router as QrCodes } from './QrCodes/routes.js';
import { router as QrCodesAtStage } from './QrCodesAtStage/routes.js';
import { router as Dcs } from './Dcs/routes.js';


router.use('/Orders', Orders);
router.use('/QrCodes', QrCodes);
router.use('/QrCodesAtStage', QrCodesAtStage);
router.use('/Dcs', Dcs);


export { router };