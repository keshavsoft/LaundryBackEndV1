import express from 'express';
var router = express.Router();

import { GetFunc,GetOrderShowFunc,GetRowSettlementFunc
 } from "../../controllers/getFuncs/EntryFile.js";

router.get('/MaxRow/:inBranch', GetFunc);
router.get('/RowData/:inRow/:inBranch', GetOrderShowFunc);
router.get('/RowSettlement/:inRow/:inBranch', GetRowSettlementFunc);



export { router };