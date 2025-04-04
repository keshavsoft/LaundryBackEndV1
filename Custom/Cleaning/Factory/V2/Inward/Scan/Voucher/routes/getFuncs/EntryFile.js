import express from 'express';

var router = express.Router();

import {
    GetFunc, GetQrStatusFunc, GetSummaryFunc, GetAsIsFunc, GetRowDataFunc, GetAggregateFunc, GetOnlyScanDcFunc,GetQrStatusFilterFunc
} from '../../controllers/getFuncs/EntryFile.js';

// router.get('/:inFactory', GetFunc);  //Not using this
router.get('/QrStatus/:inFactory', GetQrStatusFunc);//using at DC status-Old Without FromDate To Date
router.get('/Summary/:inFactory', GetSummaryFunc);
router.get('/AsIs/:inFactory', GetAsIsFunc);
router.get('/RowData/:id', GetRowDataFunc); //Using at DC scan
router.get('/Aggregate/:id', GetAggregateFunc); //Routes to Dal only
router.get('/OnlyScanDc/:inFactory', GetOnlyScanDcFunc);//using at DC status
router.get('/QrStatusFilter/:inFactory/:fromDate/:toDate', GetQrStatusFilterFunc);//using at DC status-New Without FromDate To Date

export { router };