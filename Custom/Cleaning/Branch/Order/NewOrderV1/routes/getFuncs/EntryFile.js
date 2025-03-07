import express from 'express';
var router = express.Router();

import {
    GetFunc, GetOrderShowFunc, GetRowSettlementFunc, GetInsertOrderFunc,
	GetTodayCustomerFilterFunc, GetYesterdayCustomerFilterFunc
} from "../../controllers/getFuncs/EntryFile.js";

router.get('/MaxRow/:inBranch', GetFunc);
router.get('/RowData/:inRow/:inBranch', GetOrderShowFunc);
router.get('/RowSettlement/:inRow/:inBranch', GetRowSettlementFunc);
router.get('/InSertOrder/:inBranch/:inMobile', GetInsertOrderFunc);
router.get('/TodayCustomerFilter/:inBranch/:inMobile', GetTodayCustomerFilterFunc);  // customer find in customer.html
router.get('/YesterdayCustomerFilter/:inBranch/:inMobile', GetYesterdayCustomerFilterFunc);  // customer find in customer.html



export { router };