import express from 'express';

var router = express.Router();

import { router as routerForV1 } from './V1/routes.js';
import { router as routerForV2 } from './V2/routes.js';

router.use('/V1', routerForV1);
router.use('/V2', routerForV2);

export { router };