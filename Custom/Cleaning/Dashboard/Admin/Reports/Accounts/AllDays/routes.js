import express from 'express';

var router = express.Router();

import { router as Payments } from './Payments/routes.js'

router.use('/Payments', Payments);

export { router };