import express from 'express';

var router = express.Router();

import { router as routergetFuncs } from './routes/getFuncs/EntryFile.js';
import { router as routerDeleteFuncs } from './routes/DeleteFuncs/EntryFile.js';
import { router as routerAlterFuncs } from './routes/AlterFuncs/EntryFile.js';

router.use('/', routergetFuncs);
router.use('/', routerDeleteFuncs);
router.use('/', routerAlterFuncs);

export { router };