import express from 'express';

var router = express.Router();

import { router as routerForV1 } from './V1/routes.js';

router.use('/V1', routerForV1);

export { router };