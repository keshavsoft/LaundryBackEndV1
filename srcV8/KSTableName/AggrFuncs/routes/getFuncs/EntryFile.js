import express from 'express';

var router = express.Router();

import {
    GetFunc, GetDataOnlyFunc, GetDataCountFunc
} from '../../controllers/getFuncs/EntryFile.js';

router.get('/', GetFunc);
router.get('/Count', GetDataOnlyFunc);
// router.get('/Count/:inKey/:inValue', GetDataCountFunc);

export { router };