import express from 'express';

var router = express.Router();

import { router as routerFromAlter } from './Alter/routes.js';
import { router as routerFromGet } from './Get/routes.js';

router.use('/Alter', routerFromAlter);
router.use('/Get', routerFromGet);

export { router };