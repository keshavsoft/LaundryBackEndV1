import express from 'express';

var router = express.Router();

import { DeleteFunc } from '../../controllers/DeleteFuncs/EntryFile.js';

router.delete('/:inBranch/:inId', DeleteFunc);

export { router };