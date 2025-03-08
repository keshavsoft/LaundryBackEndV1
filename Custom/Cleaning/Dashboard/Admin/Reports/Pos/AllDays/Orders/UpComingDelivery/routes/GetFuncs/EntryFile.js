import express from 'express';

var router = express.Router();

import { GetFuncs } from '../../controllers/GetFuncs/EntryFile.js';
import { GetFunc as GetFuncmiddlewares } from "../../middlewares/GetFuncs/EntryFile.js";

router.get('/:inBranch/:fromDate/:toDate', GetFuncmiddlewares, GetFuncs);

export { router };