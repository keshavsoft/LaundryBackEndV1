import express from 'express';

var router = express.Router();

import { router as QrCodes} from './QrCodes/routes.js';

router.use('/QrCode', QrCodes);



export { router };