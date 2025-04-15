import express from 'express';

var router = express.Router();

import {
    GetFuncs, GetOrdersDeleteFunc, GetAllItemsFunc
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/GetOrdersDelete/:inBranch', GetOrdersDeleteFunc);
router.get('/AllItems/:inBranch/:inFromDate/:inToDate', GetAllItemsFunc);
router.get('/:inBranch/:inFromDate/:inToDate', GetFuncs);

export { router };