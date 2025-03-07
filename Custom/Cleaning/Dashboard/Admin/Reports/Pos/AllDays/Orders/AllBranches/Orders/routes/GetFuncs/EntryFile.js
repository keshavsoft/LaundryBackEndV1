import express from 'express';

var router = express.Router();

import {
    GetFuncs, GetAsIsFuncs, GetWithRowsFuncs, GetOrderDasboardFunc
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/', GetFuncs);
router.get('/AsIs', GetAsIsFuncs);
router.get('/WithRows', GetWithRowsFuncs);
router.get('/OrderDasboard', GetOrderDasboardFunc);


export { router };