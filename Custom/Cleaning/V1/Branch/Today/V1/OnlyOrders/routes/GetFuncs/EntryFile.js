import express from 'express';

var router = express.Router();

import {
    GetFuncs, GetItemsFuncs, GetBillPrintFunc,
	GetNoSettlementFunc
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/ItemsOnly/:inBranch', GetItemsFuncs);
router.get('/BillPrint/:inId/:inBranch', GetBillPrintFunc);
router.get('/NoSettlement', GetNoSettlementFunc);
router.get('/:inBranch', GetFuncs);

export { router };