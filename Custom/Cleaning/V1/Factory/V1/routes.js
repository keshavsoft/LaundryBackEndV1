import express from 'express';

var router = express.Router();

import { router as Outward } from './Outward/routes.js';
import { router as Inward } from './Inward/routes.js';

router.use('/Outward', Outward);
router.use('/Inward', Inward);

export { router };