import express from 'express';

var router = express.Router();

import {
    GetFunc, GetVoucherFindFunc
}
    from '../../controllers/getFuncs/EntryFile.js';

router.get('/:inFactory', GetFunc);
router.get('/RowData/:id', GetVoucherFindFunc);

export { router };