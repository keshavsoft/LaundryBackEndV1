import express from 'express';

var router = express.Router();

import {
    GetFuncs, GetItemsFuncs, GetOrdersDeleteFunc,GetBillPrintFunc
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/:inBranch', GetFuncs);
router.get('/Items/:inBranch', GetItemsFuncs);
router.get('/GetOrdersDelete/:inBranch', GetOrdersDeleteFunc);
router.get('/BillPrint/:inId/:inBranch', GetBillPrintFunc);

export { router };