import express from 'express';

var router = express.Router();

import { router as routerFromGetFuncs } from './routes/getFuncs/EntryFile.js';

router.use('/', routerFromGetFuncs);

export { router };