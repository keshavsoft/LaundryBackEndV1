import express from 'express';

var router = express.Router();

import { router as FromFactoryQrCodes } from './FromFactoryQrCodes/routes.js';
import { router as ToFactoryQrCodes } from './ToFactoryQrCodes/routes.js';

router.use('/FromFactoryQrCodes', FromFactoryQrCodes);
router.use('/ToFactoryQrCodes', ToFactoryQrCodes);

export { router };