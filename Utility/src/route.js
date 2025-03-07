import express from 'express';

var router = express.Router();

import { router as routerForBackup } from './Backup/route.js';

router.use('/backup', routerForBackup);

export { router };