import express from 'express';

var router = express.Router();

import { router as routerFromClientsFolder } from './Clients/routes.js';
import { router as Cleaning } from './Cleaning/routes.js';
// import { router as routerFromGContacts } from './GContacts/routes.js';

router.use('/Clients', routerFromClientsFolder);
router.use('/Cleaning', Cleaning);
// router.use('/GContacts', routerFromGContacts);

export { router };