import express from 'express';

var router = express.Router();

import {
    GetFuncs, GetFactoryFuncs
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/:inBranch', GetFuncs);
router.get('/Remain/:inFactory', GetFactoryFuncs);

export { router };