import express from 'express';

var router = express.Router();

import {
    GetFunc, GetQrStatusFunc, GetRowDataFunc,GetTodayFunc
}
    from '../../controllers/getFuncs/EntryFile.js';

router.get('/:inFactory/:fromDate/:toDate', GetFunc);
router.get('/Today/:inFactory', GetTodayFunc);
router.get('/QrStatus/:inFactory', GetQrStatusFunc);
router.get('/RowData/:id', GetRowDataFunc);

export { router };