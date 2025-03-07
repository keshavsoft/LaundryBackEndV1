import express from 'express';

var router = express.Router();

import {
    GetFunc, GetOrderWithQrFunc, GetCheckFunc
}
    from '../../controllers/getFuncs/EntryFile.js';

router.get('/:OrderId/:inBranch', GetFunc);
// router.get('/OrderAsIsWithQrs/:OrderId/:inBranch', GetOrderWithQrFunc);
// router.get('/Check/:OrderId/:inBranch', GetCheckFunc);

// router.get('/RowData/:id', GetRowDataFunc);

export { router };