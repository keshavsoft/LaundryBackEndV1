import express from 'express';

var router = express.Router();

import {
    GetFuncs, GetItemsFuncs, GetGetUpComingDeliveryFunc
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/:inBranch/:inFromDate/:inToDate', GetFuncs);
router.get('/:inBranch', GetItemsFuncs);
router.get('/UpComingDelivery/:inBranch/:inFromDate/:inToDate', GetGetUpComingDeliveryFunc);

export { router };