import express from 'express';

var router = express.Router();

import { router as routerFromDC } from './DC/routes.js';

router.use('/DC', routerFromDC);

export { router };