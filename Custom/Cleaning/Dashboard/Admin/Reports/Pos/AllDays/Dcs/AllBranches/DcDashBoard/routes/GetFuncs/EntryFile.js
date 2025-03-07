import express from 'express';

var router = express.Router();

import {
    GetFuncs, GetAllDcsFunc, GetTodayDcsFunc
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/DcDashBoard', GetFuncs);
router.get('/AllDcs/:inBranch', GetAllDcsFunc);
router.get('/TodayDcs/:inBranch', GetTodayDcsFunc);

export { router };