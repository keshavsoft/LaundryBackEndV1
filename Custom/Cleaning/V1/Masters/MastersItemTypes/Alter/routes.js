import express from 'express';

var router = express.Router();

import { router as routerAlterFuncs } from './routes/AlterFuncs/EntryFile.js';

router.use('/', routerAlterFuncs);

export { router };