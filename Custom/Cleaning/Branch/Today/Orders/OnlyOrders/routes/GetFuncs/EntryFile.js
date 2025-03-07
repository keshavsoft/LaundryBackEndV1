import express from 'express';

var router = express.Router();

import {
    GetFuncs, GetItemsFuncs, GetOrdersDeleteFunc
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/:inBranch', GetFuncs);
router.get('/Items/:inBranch', GetItemsFuncs);
router.get('/GetOrdersDelete/:inBranch', GetOrdersDeleteFunc);

export { router };