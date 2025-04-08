import express from 'express';

var router = express.Router();

import {
    GetFunc, GetQrStatusFunc, GetFilterFunc, GetTodayFilterFunc, GetRowDataFunc
}
    from '../../controllers/getFuncs/EntryFile.js';

router.get('/:inFactory', GetFunc);
router.get('/QrStatus/:inFactory', GetQrStatusFunc);
router.get('/Filter/:inFactory/:fromDate/:toDate', GetFilterFunc);
router.get('/Today/:inFactory', GetTodayFilterFunc);
router.get('/RowData/:id', GetRowDataFunc);

export { router };