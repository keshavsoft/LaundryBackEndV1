import express from 'express';

var router = express.Router();

import { router as V1 } from './V1/routes.js';
import { router as routerForV2 } from './V2/routes.js';
import { router as routerForV3 } from './V3/routes.js';

router.use('/V1', V1);
router.use('/V2', routerForV2);
router.use('/V3', routerForV3);

export { router };