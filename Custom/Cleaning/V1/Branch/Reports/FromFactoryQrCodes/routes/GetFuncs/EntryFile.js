import express from 'express';

var router = express.Router();

import {
    GetAllFuncs, GetPendingFuncs, GetScannedFuncs
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/All/:inBranch/:inFromDate/:inToDate', GetAllFuncs);
router.get('/Pending/:inBranch/:inFromDate/:inToDate', GetPendingFuncs);
router.get('/Scanned/:inBranch/:inFromDate/:inToDate', GetScannedFuncs);

export { router };