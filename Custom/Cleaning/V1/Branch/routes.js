import express from 'express';

var router = express.Router();

import { router as Today } from './Today/routes.js';
import { router as Factory } from './Factory/routes.js';

router.use('/Today', Today);
router.use('/Factory', Factory);

export { router };