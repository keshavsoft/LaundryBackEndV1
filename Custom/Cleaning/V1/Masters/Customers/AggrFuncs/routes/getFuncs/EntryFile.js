import express from 'express';

var router = express.Router();

import {
    GetCountFunc
} from '../../controllers/getFuncs/EntryFile.js';

router.get('/Count', GetCountFunc);

export { router };