import express from 'express';

var router = express.Router();

import { router as routerFromgetFuncs } from './routes/getFuncs/EntryFile.js';
import { router as routerFromputFuncs } from './routes/putFuncs/EntryFile.js';
// import { router as routerFrompostFuncs } from './routes/postFuncs/EntryFile.js';
// import { router as routerFromdeleteFuncs } from './routes/deleteFuncs/EntryFile.js';

router.use('/', routerFromgetFuncs);
router.use('/', routerFromputFuncs);
// router.use('/', routerFrompostFuncs);
// router.use('/', routerFromdeleteFuncs);

export { router };