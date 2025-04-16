import express from 'express';

var router = express.Router();

import { router as routerFromAggrFuncs } from './AggrFuncs/routes.js';
import { router as routerFromGet } from './Get/routes.js';
import { router as routerFromAlter } from './Alter/routes.js';
import { router as routerFromDelete } from './Delete/routes.js';

router.use('/AggrFuncs', routerFromAggrFuncs);
router.use('/Get', routerFromGet);
router.use('/Alter', routerFromAlter);
router.use('/Delete', routerFromDelete);

export { router };