import express from 'express';

var router = express.Router();

import { router as routerFromShowAll } from './ShowAll/routes.js';
import { router as routerFromNameAndMobile } from './NameAndMobile/routes.js';

router.use('/ShowAll', routerFromShowAll);
router.use('/NameAndMobile', routerFromNameAndMobile);

export { router };