import express from 'express';

var router = express.Router();

import {
    GetFuncs, GetItemsFuncs, GetOrdersDeleteFunc,GetBillPrintFunc,GetAllBillPrintFunc
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/:inBranch', GetFuncs);
router.get('/Items/:inBranch', GetItemsFuncs);
router.get('/GetOrdersDelete/:inBranch', GetOrdersDeleteFunc);
router.get('/BillPrint/:inId/:inBranch', GetBillPrintFunc);
// router.get('/AllBillPrint/:inId/:inBranch', GetAllBillPrintFunc);

export { router };