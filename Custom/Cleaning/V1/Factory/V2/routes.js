import express from 'express';

var router = express.Router();

import { router as Process } from './Process/routes.js';

router.use('/Process', Process);

export { router };