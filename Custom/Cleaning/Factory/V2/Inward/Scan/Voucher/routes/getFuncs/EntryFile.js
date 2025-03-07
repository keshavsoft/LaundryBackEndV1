import express from 'express';

var router = express.Router();

import {
    GetFunc, GetQrStatusFunc, GetSummaryFunc, GetAsIsFunc, GetRowDataFunc, GetAggregateFunc, GetOnlyScanDcFunc
} from '../../controllers/getFuncs/EntryFile.js';

// router.get('/:inFactory', GetFunc);  //Not using this
router.get('/QrStatus/:inFactory', GetQrStatusFunc);//using at DC status
router.get('/Summary/:inFactory', GetSummaryFunc);
router.get('/AsIs/:inFactory', GetAsIsFunc);
router.get('/RowData/:id', GetRowDataFunc); //Using at DC scan
router.get('/Aggregate/:id', GetAggregateFunc); //Routes to Dal only
router.get('/OnlyScanDc/:inFactory', GetOnlyScanDcFunc);//using at DC status

export { router };