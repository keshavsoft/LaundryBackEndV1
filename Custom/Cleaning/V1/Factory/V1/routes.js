import express from 'express';

var router = express.Router();

import { router as Outward } from './Outward/routes.js';

router.use('/Outward', Outward);

export { router };