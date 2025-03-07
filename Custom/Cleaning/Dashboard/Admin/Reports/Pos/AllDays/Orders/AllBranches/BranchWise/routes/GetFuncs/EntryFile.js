import express from 'express';

var router = express.Router();

import {
    GetFuncs, GetWithRowsFuncs
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/', GetFuncs);
router.get('/WithRows', GetWithRowsFuncs);

export { router };