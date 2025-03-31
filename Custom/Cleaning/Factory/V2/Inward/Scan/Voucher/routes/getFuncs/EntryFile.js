import express from 'express';

var router = express.Router();

import {
    GetFunc, GetQrStatusFunc, GetRowDataFunc, GetAggregateFunc
} from '../../controllers/getFuncs/EntryFile.js';

// router.get('/:inFactory', GetFunc);  //Not using this
router.get('/QrStatus/:inFactory', GetQrStatusFunc); //using at DC status
router.get('/RowData/:id', GetRowDataFunc); //Using at DC scan
router.get('/Aggregate/:id', GetAggregateFunc); //Routes to Dal only

export { router };