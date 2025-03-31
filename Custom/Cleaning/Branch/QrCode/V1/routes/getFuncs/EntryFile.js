import express from 'express';

var router = express.Router();

import {
    GetFilterFunc
} from '../../controllers/getFuncs/EntryFile.js';

router.get('/Filter/:inFilterKey/:inFilterValue', GetFilterFunc);

export { router };