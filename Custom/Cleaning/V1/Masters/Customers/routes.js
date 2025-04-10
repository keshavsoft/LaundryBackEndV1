import express from 'express';

var router = express.Router();

import { router as routerFromShowAll } from './ShowAll/routes.js';

router.use('/ShowAll', routerFromShowAll);

export { router };