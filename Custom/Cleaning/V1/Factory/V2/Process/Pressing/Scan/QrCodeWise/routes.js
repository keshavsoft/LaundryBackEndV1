import express from 'express';

var router = express.Router();

import { router as routerFromAsIs } from './AsIs/routes.js';
import { router as routerFromWithVouDet } from './WithVouDet/routes.js';

router.use('/AsIs', routerFromAsIs);
router.use('/WithVouDet', routerFromWithVouDet);

export { router };