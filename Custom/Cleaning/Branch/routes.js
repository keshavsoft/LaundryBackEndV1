import express from 'express';

var router = express.Router();

import { router as QrCode } from './QrCode/routes.js';
import { router as Factory } from './Factory/routes.js';
import { router as Today } from './Today/routes.js';
import { router as Order } from './Order/routes.js';
import { router as Dashboard } from './Dashboard/routes.js';
import { router as Reports } from './Reports/routes.js';
import { router as All } from './All/routes.js';

router.use('/QrCode', QrCode);
router.use('/Factory', Factory);
router.use('/Today', Today);
router.use('/Order', Order);
router.use('/Dashboard', Dashboard);
router.use('/Reports', Reports);
router.use('/All', All);

export { router };