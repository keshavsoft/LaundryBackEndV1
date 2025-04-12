import express from 'express';

var router = express.Router();

import { router as routerFromAggrFuncs } from './AggrFuncs/routes.js';

router.use('/AggrFuncs', routerFromAggrFuncs);

export { router };