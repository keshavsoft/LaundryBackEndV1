import express from 'express';

var router = express.Router();

import { router as routerFromInward } from './Inward/routes.js';

router.use('/Inward', routerFromInward);

export { router };