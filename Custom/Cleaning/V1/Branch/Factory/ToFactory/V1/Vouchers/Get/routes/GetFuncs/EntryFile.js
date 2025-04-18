import express from 'express';

var router = express.Router();

import {
    GetFuncs, GetToScanFuncs, GetToScanOnlyFuncs, GetSentFuncs,
    GetSentAndFactoryScanFuncs, GetRowDataFuncs, GetToPrintOnlyFuncs, GetScanOnlyFuncs, GetDeleteVocherFuncs,
    GetQrDataWithPrintFunc, GetShowAllFunc, GetEntryScannedRowDataFunc
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/:inBranch', GetFuncs);
router.get('/ToScan/:inBranch/:inFromDate/:inToDate', GetToScanFuncs); //Only Sent Dcs
router.get('/ToScanOnly/:inBranch', GetToScanOnlyFuncs); //Only Ready to scan Dcs
router.get('/Sent/:inBranch', GetSentFuncs);
router.get('/SentAndFactoryScan/:inBranch', GetSentAndFactoryScanFuncs);
router.get('/RowData/:id', GetRowDataFuncs);
router.get('/ToPrintOnly/:inBranch/:inFromDate/:inToDate', GetToPrintOnlyFuncs); // only sent Dc Show for print
router.get('/ScanOnly/:inBranch', GetScanOnlyFuncs);
router.get('/DeleteVocher/:inBranch', GetDeleteVocherFuncs); // Only Delete Dc Shows
router.get('/QrDataWithPrint/:inDC', GetQrDataWithPrintFunc); //Dc print Show
router.get('/ShowAll/:inBranch/:inFromDate/:inToDate', GetShowAllFunc);
router.get('/EntryScannedRowData/:id', GetEntryScannedRowDataFunc);

export { router };