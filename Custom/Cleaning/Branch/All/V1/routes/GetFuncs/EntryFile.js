import express from 'express';

var router = express.Router();

import {
    GetFuncs, GetOrdersDeleteFunc
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/:inBranch/:inFromDate/:inToDate', GetFuncs);
router.get('/GetOrdersDelete/:inBranch', GetOrdersDeleteFunc);

export { router };