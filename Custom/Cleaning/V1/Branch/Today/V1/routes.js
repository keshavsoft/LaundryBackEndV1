import express from 'express';

var router = express.Router();

import { router as AmountSplit } from './AmountSplit/routes.js';

router.use('/AmountSplit', AmountSplit);

export { router };