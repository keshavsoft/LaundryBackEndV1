import express from 'express';

var router = express.Router();

import {
    GetFuncs, GetOrderDasboardFunc, GetTodayFunc, GetAllOrdersFunc
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/', GetFuncs);
router.get('/OrderDasboard', GetOrderDasboardFunc);
router.get('/TodayOrders/:inBranch', GetTodayFunc);
router.get('/AllOrders/:inBranch', GetAllOrdersFunc);

export { router };