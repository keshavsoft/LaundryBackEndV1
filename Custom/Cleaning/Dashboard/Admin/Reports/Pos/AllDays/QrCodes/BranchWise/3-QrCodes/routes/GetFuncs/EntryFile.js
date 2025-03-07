import express from 'express';

var router = express.Router();

import {
    GetFuncs, GetAsIsFuncs, GetTodayOrdersFunc, GetQrCodesDashBoardFunc,
	GetTodayDashBoardQrCodesFunc, GetAllDashBoardQrCodesFunc
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/', GetFuncs);
router.get('/AsIs', GetAsIsFuncs);
router.get('/TodayQrCodes', GetTodayOrdersFunc);
router.get('/QrCodesDashBoard', GetQrCodesDashBoardFunc);
router.get('/TodayDashBoardQrCodes/:inBranch', GetTodayDashBoardQrCodesFunc);
router.get('/AllDashBoardQrCodes/:inBranch', GetAllDashBoardQrCodesFunc);

export { router };