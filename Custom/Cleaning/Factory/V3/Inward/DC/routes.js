import express from 'express';

var router = express.Router();

import { router as routerFromShowAll } from './ShowAll/routes.js';
import { router as routerFromFilter } from './Filter/routes.js';

router.use('/ShowAll', routerFromShowAll);
router.use('/Filter', routerFromFilter);

export { router };