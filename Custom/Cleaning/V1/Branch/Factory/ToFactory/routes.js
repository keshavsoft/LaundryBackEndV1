import express from 'express';

var router = express.Router();

import { router as RouterFromV1 } from './V1/routes.js';

router.use('/V1', RouterFromV1);

export { router };