import express from 'express';

var router = express.Router();

import {
    GetFuncs, GetAsIsFuncs, GetCashFunc, GetCardFunc,
	GetUpiFunc
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/:inBranch/:inFromDate/:inToDate', GetFuncs);
router.get('/AsIs', GetAsIsFuncs);
router.get('/Cash/:inBranch/:inFromDate/:inToDate', GetCashFunc);
router.get('/Card/:inBranch/:inFromDate/:inToDate', GetCardFunc);
router.get('/Upi/:inBranch/:inFromDate/:inToDate', GetUpiFunc);

export { router };