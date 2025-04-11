import express from 'express';

var router = express.Router();

import { router as AllDays } from './AllDays/routes.js';

router.use('/AllDays', AllDays);

export { router };