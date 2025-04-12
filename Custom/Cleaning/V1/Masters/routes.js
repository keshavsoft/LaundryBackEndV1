import express from 'express';

var router = express.Router();

import { router as routerFromCustomers } from './Customers/routes.js';
import { router as routerFromAddOns } from './AddOns/routes.js';
import { router as routerFromItemNames } from './ItemNames/routes.js';

router.use('/Customers', routerFromCustomers);
router.use('/AddOns', routerFromAddOns);
router.use('/ItemNames', routerFromItemNames);

export { router };