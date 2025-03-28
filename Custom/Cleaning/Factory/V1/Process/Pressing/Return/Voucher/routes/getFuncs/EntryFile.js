import express from 'express';

var router = express.Router();

import {
    GetFunc, GetFilterFunc
}
    from '../../controllers/getFuncs/EntryFile.js';

router.get('/:inFactory', GetFunc);
router.get('/Filter/:inFactory/:fromDate/:toDate', GetFilterFunc);

export { router };