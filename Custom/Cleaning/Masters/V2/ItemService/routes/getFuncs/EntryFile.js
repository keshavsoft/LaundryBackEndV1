import express from 'express';

var router = express.Router();

import {
    GetDataOnlyFunc, GetRowDataFunc,
    GetFilterFunc
} from '../../controllers/getFuncs/EntryFile.js';

router.get('/DataOnly', GetDataOnlyFunc); //Get Data All
router.get('/Filter/:inFilterKey/:inFilterValue', GetFilterFunc);//filter Data
router.get('/RowData/:id', GetRowDataFunc);//Row Data

export { router };