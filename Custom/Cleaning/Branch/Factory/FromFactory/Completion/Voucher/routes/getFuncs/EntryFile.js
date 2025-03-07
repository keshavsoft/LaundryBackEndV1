import express from 'express';

var router = express.Router();

import {
    GetFunc, GetQrStatusFunc, GetRowDataFunc,GetOnlyScanDcFunc
}
    from '../../controllers/getFuncs/EntryFile.js';

router.get('/:inBranch', GetFunc);
router.get('/QrStatus/:inBranch', GetQrStatusFunc);
router.get('/RowData/:id', GetRowDataFunc);
router.get('/OnlyScanDc/:inBranch', GetOnlyScanDcFunc);

export { router };