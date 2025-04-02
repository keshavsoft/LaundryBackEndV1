import express from 'express';

var router = express.Router();

import {
    GetFilterFunc, GetGenerateFunc
} from '../../controllers/getFuncs/EntryFile.js';

router.get('/Filter/:inFilterKey/:inFilterValue', GetFilterFunc);
router.get('/Generate/:inBranch/:inId', GetGenerateFunc);

export { router };