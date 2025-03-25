import express from 'express';

var router = express.Router();

import {
    GetFuncs, GetToScanFuncs, GetSentAndFactoryScanFuncs, GetEntryReturnFuncs, GetProcessReturnFuncs, GetCompletionReturnFuncs

} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/:inBranch', GetFuncs);
router.get('/ToScan/:inBranch/:inFromDate/:inToDate', GetToScanFuncs); //Only Sent Dcs
router.get('/SentAndFactoryScan/:inBranch/:inFromDate/:inToDate', GetSentAndFactoryScanFuncs);
router.get('/EntryReturn/:inBranch/:inFromDate/:inToDate', GetEntryReturnFuncs);
router.get('/ProcessReturn/:inBranch/:inFromDate/:inToDate', GetProcessReturnFuncs);
router.get('/CompletionReturn/:inBranch/:inFromDate/:inToDate', GetCompletionReturnFuncs);

export { router };