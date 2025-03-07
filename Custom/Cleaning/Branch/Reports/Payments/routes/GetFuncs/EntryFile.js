import express from 'express';

var router = express.Router();

import {
    GetFuncs, GetCashFuncs, GetCardFuncs, GetUPIFuncs
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/:inBranch/:inFromDate/:inToDate', GetFuncs);
router.get('/CashAmount/:inBranch/:inFromDate/:inToDate', GetCashFuncs);
router.get('/CardAmount/:inBranch/:inFromDate/:inToDate', GetCardFuncs);
router.get('/UPIAmount/:inBranch/:inFromDate/:inToDate', GetUPIFuncs);

export { router };