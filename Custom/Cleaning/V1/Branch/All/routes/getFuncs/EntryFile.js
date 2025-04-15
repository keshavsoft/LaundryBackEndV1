import express from 'express';

var router = express.Router();

import {
    GetNoSettlementFunc, GetItemsOnlyFunc,
    GetOrderFromToDateFunc
} from '../../controllers/getFuncs/EntryFile.js';

router.get('/NoSettlement/:inBranch', GetNoSettlementFunc);
router.get('/ItemsOnly/:inBranch/:inFromDate/:inToDate', GetItemsOnlyFunc);
router.get('/OrderFromToDate/:inBranch/:inFromDate/:inToDate', GetOrderFromToDateFunc);

export { router };