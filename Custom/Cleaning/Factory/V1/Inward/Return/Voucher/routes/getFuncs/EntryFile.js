import express from 'express';

var router = express.Router();

import {
    GetFunc,GetidFunc
}
    from '../../controllers/getFuncs/EntryFile.js';

router.get('/:inFactory', GetFunc);
router.get('/RowData/:id', GetidFunc);

export { router };