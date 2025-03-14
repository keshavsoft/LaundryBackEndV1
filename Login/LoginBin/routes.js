import express from 'express';

var router = express.Router();

// import { StartFunc as MiddlewaresForUsers } from "./Middlewares/Users/EntryFile.js";

import { router as routerFromCreateToken } from './CreateToken/routes.js';
import { router as routerFromUsers } from "./Users/routes.js";
import { router as routerFromValidateToken } from "./ValidateToken/routes.js";
import { router as Branch } from "./Branch/routes.js";
import { router as Factory } from "./Factory/routes.js";

router.use('/CreateToken', routerFromCreateToken);
router.use('/Users', routerFromUsers);
router.use('/ValidateToken', routerFromValidateToken);
router.use('/Branch', Branch);
router.use('/Factory', Factory);

export { router };