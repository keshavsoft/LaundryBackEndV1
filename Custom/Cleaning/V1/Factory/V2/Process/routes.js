import express from 'express';

var router = express.Router();

import { router as Pressing } from './Pressing/routes.js';

router.use('/Pressing', Pressing);

export { router };