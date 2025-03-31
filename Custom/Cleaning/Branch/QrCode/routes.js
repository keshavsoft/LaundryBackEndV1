import express from 'express';

var router = express.Router();

import { router as Status } from './Status/routes.js';
import { router as V1 } from './V1/routes.js';

router.use('/Status', Status);
router.use('/V1', V1);

export { router };