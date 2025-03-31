import express from 'express';

var router = express.Router();

import { router as AddOns } from "./AddOns/routes.js";
import { router as ItemType} from "./ItemType/routes.js";
import { router as Customers} from "./Customers/routes.js";

router.use('/AddOns', AddOns);
router.use('/ItemType', ItemType);
router.use('/Customers', Customers);

export { router };