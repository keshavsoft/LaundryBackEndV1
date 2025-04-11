import express from 'express';

var router = express.Router();

import { router as routerFromEntryReturn } from './EntryReturn/routes.js';

router.use('/EntryReturn', routerFromEntryReturn);

export { router };