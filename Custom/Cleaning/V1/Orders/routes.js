import express from 'express';

var router = express.Router();

import { router as routerFromAdmin } from './Admin/routes.js';

router.use('/Admin', routerFromAdmin);

export { router };