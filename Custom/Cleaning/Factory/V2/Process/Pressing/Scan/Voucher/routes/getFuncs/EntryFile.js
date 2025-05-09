import express from 'express';

var router = express.Router();

import {
    GetFunc, GetQrStatusFunc, GetRowDataFunc, GetFilterFunc, GetTodayFilterFunc
}
    from '../../controllers/getFuncs/EntryFile.js';

router.get('/:inFactory', GetFunc);
router.get('/QrStatus/:inFactory', GetQrStatusFunc);
router.get('/RowData/:id', GetRowDataFunc);
router.get('/Filter/:inFactory/:fromDate/:toDate', GetFilterFunc);
router.get('/Today/:inFactory', GetTodayFilterFunc);

export { router };