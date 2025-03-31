import express from 'express';

var router = express.Router();

import { router as V1 } from './V1/routes.js';
import { router as V2 } from './V2/routes.js';

router.use('/V1', V1);
router.use('/V2', V2);

export { router };