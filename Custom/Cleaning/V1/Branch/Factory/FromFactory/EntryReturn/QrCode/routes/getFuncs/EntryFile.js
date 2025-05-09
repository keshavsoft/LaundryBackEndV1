import express from 'express';

var router = express.Router();

import {
    GetFunc, GetPendingFunc, GetScannedFunc, GetRowQrDataFunc,
    GetFromFactoryDcWiseItems, GetRowDataFunc, GetToScanPendingFunc,
    GetAllFunc, GetScannedWithOutFilterFunc
}
    from '../../controllers/getFuncs/EntryFile.js';

router.get('/Pending/:inBranch', GetPendingFunc);
router.get('/Scanned/:inBranch/:fromDate/:toDate', GetScannedFunc);
router.get('/RowQrData/:id', GetRowQrDataFunc);
router.get('/RowData/:id/:inBranch', GetRowDataFunc);
router.get('/FromFactoryDcWiseItems/:id/:inBranch', GetFromFactoryDcWiseItems);
router.get('/ToScanPending/:id/:inBranch', GetToScanPendingFunc);
router.get('/:inBranch/:fromDate/:toDate', GetFunc);
router.get('/All/:inBranch', GetAllFunc);
router.get('/ScannedWithOutFilter/:inBranch', GetScannedWithOutFilterFunc);

export { router };