import express from 'express';

var router = express.Router();

import {
    GetFunc, GetQrStatusFunc, GetFilterFunc
}
    from '../../controllers/getFuncs/EntryFile.js';

router.get('/:inFactory', GetFunc);
router.get('/QrStatus/:inFactory', GetQrStatusFunc);
router.get('/Filter/:inFactory/:fromDate/:toDate', GetFilterFunc);

export { router };