import express from 'express';

var router = express.Router();

import { router as routerFromAlter } from './Alter/routes.js';

router.use('/Alter', routerFromAlter);

export { router };