import express from 'express';

var router = express.Router();

import { router as Pos } from './Pos/routes.js';
import { router as Accounts } from './Accounts/routes.js';

router.use('/Pos', Pos);
router.use('/Accounts', Accounts);

export { router };