import express from 'express';

var router = express.Router();

import {
    GetFunc, GetPendingFunc, GetScannedFunc, GetRowDataFunc, GetReturnsFunc, GetRowQrDataFunc,
    GetRowCountFunc, GetFromBranchDcWiseItemsFunc, GetToScanPendingFunc, GetDCQrReturnFunc, GetAggregateFunc,
    GetFilterFunc,GetScannedFilterFunc,GetInWashingFunc
}
    from '../../controllers/getFuncs/EntryFile.js';

router.get('/:inFactory', GetFunc);
router.get('/Pending/:inFactory', GetPendingFunc);
router.get('/Scanned/:inFactory', GetScannedFunc);
router.get('/Returns/:inFactory', GetReturnsFunc);
router.get('/RowData/:id/:inFactory', GetRowDataFunc);
router.get('/RowQrData/:id', GetRowQrDataFunc);
router.get('/RowCount/:id/:inBranch', GetRowCountFunc);
router.get('/FromBranchDcWiseItems/:id/:inFactory', GetFromBranchDcWiseItemsFunc);
router.get('/ToScanPending/:id/:inFactory', GetToScanPendingFunc);
router.get('/DCQrReturn/:id/:inFactory', GetDCQrReturnFunc);
router.get('/Aggregate/:inFactory', GetAggregateFunc);
router.get('/Filter/:inFactory/:fromDate/:toDate', GetFilterFunc);
router.get('/ScannedFilter/:inFactory/:fromDate/:toDate', GetScannedFilterFunc);
router.get('/InWashing/:inFactory/:fromDate/:toDate', GetInWashingFunc);

export { router };