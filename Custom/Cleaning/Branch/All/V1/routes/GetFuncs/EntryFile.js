import express from 'express';

var router = express.Router();

import {
    GetFuncs, GetOrdersDeleteFunc, GetAllItemsFunc
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/:inBranch/:inFromDate/:inToDate', GetFuncs);
router.get('/GetOrdersDelete/:inBranch', GetOrdersDeleteFunc);
router.get('/AllItems/:inBranch/:inFromDate/:inToDate', GetAllItemsFunc);

export { router };