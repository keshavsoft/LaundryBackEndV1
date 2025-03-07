import express from 'express';

var router = express.Router();

import {
    GetFuncs, GetTodayFuncs
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/:inBranch', GetFuncs);
router.get('/Today/:inBranch', GetTodayFuncs);

export { router };