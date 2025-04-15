import express from 'express';

var router = express.Router();

import {
    GetAllFuncs, GetInBranchFuncs, GetToFactoryFuncs
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/InBranch/:inBranch', GetInBranchFuncs);
router.get('/ToFactory/:inBranch', GetToFactoryFuncs);
router.get('/:inBranch', GetAllFuncs);

export { router };