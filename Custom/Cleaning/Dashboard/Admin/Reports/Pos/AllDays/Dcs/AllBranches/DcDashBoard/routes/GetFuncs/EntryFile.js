import express from 'express';

var router = express.Router();

import {
    GetFuncs, GetAllDcsFunc, GetTodayDcsFunc, GetAllBranchScannedFunc,
	GetAllFactoryPendingFunc, GetAllFactoryScannedFunc,
	GetTodayBranchScannedFunc, GetTodayFactoryPendingFunc,
	GetTodayFactoryScannedFunc
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/DcDashBoard', GetFuncs);
router.get('/AllDcs/:inBranch', GetAllDcsFunc);
router.get('/TodayDcs/:inBranch', GetTodayDcsFunc);
router.get('/AllBranchScanned/:id/:inBranch', GetAllBranchScannedFunc);
router.get('/AllFactoryPending/:id/:inFactory', GetAllFactoryPendingFunc);
router.get('/AllFactoryScanned/:id/:inFactory', GetAllFactoryScannedFunc);
router.get('/TodayBranchScanned/:id/:inBranch', GetTodayBranchScannedFunc);
router.get('/TodayFactoryPending/:id/:inFactory', GetTodayFactoryPendingFunc);
router.get('/TodayFactoryScanned/:id/:inFactory', GetTodayFactoryScannedFunc);

export { router };