import express from 'express';

var router = express.Router();

import {
    GetFuncs, GetSimpleFuncs, GetItemCountFuncs, GetIsSettledFuncs,
    GetWithSettlementFuncs, GetWithDeliveryFuncs,
    GetSortByDateLatestFunc, GetSortByDateOldestFunc
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/', GetFuncs);
router.get('/Simple', GetSimpleFuncs);
router.get('/ItemCount', GetItemCountFuncs);
router.get('/IsSettled', GetIsSettledFuncs);
router.get('/WithSettlement', GetWithSettlementFuncs);
router.get('/WithDelivery', GetWithDeliveryFuncs);
router.get('/SortByDateLatest', GetSortByDateLatestFunc);
router.get('/SortByDateOldest', GetSortByDateOldestFunc);

export { router };