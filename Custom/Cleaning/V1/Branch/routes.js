import express from 'express';

var router = express.Router();

import { router as Today } from './Today/routes.js';
import { router as Factory } from './Factory/routes.js';
import { router as All } from './All/routes.js';

router.use('/Today', Today);
router.use('/Factory', Factory);
router.use('/All', All);

export { router };