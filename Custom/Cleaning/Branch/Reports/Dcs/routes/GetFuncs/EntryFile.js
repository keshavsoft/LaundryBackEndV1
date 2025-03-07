import express from 'express';

var router = express.Router();

import {
    GetFuncs, GetToScanFuncs, GetSentAndFactoryScanFuncs

} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/:inBranch', GetFuncs);
router.get('/ToScan/:inBranch/:inFromDate/:inToDate', GetToScanFuncs); //Only Sent Dcs
router.get('/SentAndFactoryScan/:inBranch/:inFromDate/:inToDate', GetSentAndFactoryScanFuncs);

export { router };