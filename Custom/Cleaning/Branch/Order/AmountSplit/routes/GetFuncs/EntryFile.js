import express from 'express';

var router = express.Router();

import {
    GetFuncs, GetCashFuncs, GetCardFuncs, GetUpiFuncs
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/:inBranch', GetFuncs);
router.get('/Cash/:inBranch', GetCashFuncs);
router.get('/Card/:inBranch', GetCardFuncs);
router.get('/Upi/:inBranch', GetUpiFuncs);

export { router };