import express from 'express';

var router = express.Router();

import { router as AllDays } from './AllDays/routes.js';
import { router as Common } from './Common/routes.js';

router.use('/AllDays', AllDays);
router.use('/Common', Common);

export { router };