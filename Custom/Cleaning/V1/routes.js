import express from 'express';

var router = express.Router();

import { router as Branch } from './Branch/routes.js';
import { router as Factory } from './Factory/routes.js';
import { router as routerFromMasters } from './Masters/routes.js';

router.use('/Branch', Branch);
router.use('/Factory', Factory);
router.use('/Masters', routerFromMasters);

export { router };