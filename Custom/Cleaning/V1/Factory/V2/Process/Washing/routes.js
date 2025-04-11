import express from 'express';

var router = express.Router();

import { router as routerFromScan } from './Scan/routes.js';

router.use('/Scan', routerFromScan);

export { router };