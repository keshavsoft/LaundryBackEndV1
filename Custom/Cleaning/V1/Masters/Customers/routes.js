import express from 'express';

var router = express.Router();

import { router as routerFromShowAll } from './ShowAll/routes.js';
import { router as routerFromNameAndMobile } from './NameAndMobile/routes.js';
import { router as routerFromAggrFuncs } from './AggrFuncs/routes.js';

router.use('/ShowAll', routerFromShowAll);
router.use('/NameAndMobile', routerFromNameAndMobile);
router.use('/AggrFuncs', routerFromAggrFuncs);

export { router };