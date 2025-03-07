import express from 'express';

var router = express.Router();

import {
    GetFuncs, GetTodayFuncs, GetOrdersDeleteFunc
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/:inBranch', GetFuncs);
router.get('/Today/:inBranch', GetTodayFuncs);
router.get('/GetOrdersDelete/:inBranch', GetOrdersDeleteFunc);

export { router };