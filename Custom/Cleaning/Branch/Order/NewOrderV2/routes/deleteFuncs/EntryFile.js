import express from 'express';

var router = express.Router();

import { mainTableDeleteFunc, addOnTableDeleteFunc } from '../../controllers/DeleteFuncs/EntryFile.js';

router.delete('/addOn/:inBranch/:mainId/:Id/:AddOnKey', addOnTableDeleteFunc);
router.delete('/Item/:inBranch/:Id/:inSubId', mainTableDeleteFunc);

export { router };