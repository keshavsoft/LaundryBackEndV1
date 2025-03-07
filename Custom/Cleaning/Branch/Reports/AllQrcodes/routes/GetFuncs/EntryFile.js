import express from 'express';

var router = express.Router();

import {
    GetAllFuncs, GetInBranchFuncs, GetToFactoryFuncs
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/All/:inBranch/:inFromDate/:inToDate', GetAllFuncs);
router.get('/InBranch/:inBranch/:inFromDate/:inToDate', GetInBranchFuncs);
router.get('/ToFactory/:inBranch/:inFromDate/:inToDate', GetToFactoryFuncs);


export { router };