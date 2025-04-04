import express from 'express';

var router = express.Router();

import {
    GetRowDataFunc, GetRowCountFunc, GetPendingFunc
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/RowData/:id/:inBranch', GetRowDataFunc);
router.get('/RowCount/:id/:inBranch', GetRowCountFunc);
router.get('/Pending/:inId/:inFactory', GetPendingFunc);

export { router };