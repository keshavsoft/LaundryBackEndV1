import express from 'express';
var router = express.Router();

import {
    GetFunc, GetOrderShowFunc, GetRowSettlementFunc, GetInsertOrderFunc,
	GetTodayCustomerFilterFunc, GetYesterdayCustomerFilterFunc,
	GetWeekCustomerFilterFunc, GetAllCustomerFilterFunc
} from "../../controllers/getFuncs/EntryFile.js";

router.get('/MaxRow/:inBranch', GetFunc);
router.get('/RowData/:inRow/:inBranch', GetOrderShowFunc);
router.get('/RowSettlement/:inRow/:inBranch', GetRowSettlementFunc);
router.get('/InSertOrder/:inBranch/:inMobile', GetInsertOrderFunc);
router.get('/TodayCustomerFilter/:inBranch/:inMobile', GetTodayCustomerFilterFunc);  // customer find in customer.html
router.get('/YesterdayCustomerFilter/:inBranch/:inMobile', GetYesterdayCustomerFilterFunc); 
router.get('/WeekCustomerFilter/:inBranch/:inMobile', GetWeekCustomerFilterFunc);
router.get('/AllCustomerFilter/:inBranch/:inMobile', GetAllCustomerFilterFunc);

export { router };