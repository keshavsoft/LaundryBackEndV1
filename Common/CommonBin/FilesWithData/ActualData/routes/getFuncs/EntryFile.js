import express from 'express';
var router = express.Router();

import { GetFunc, GetAsArrayFunc, GetRowWithDataFunc } from '../../controllers/getFuncs/EntryFile.js';

router.get('/', GetFunc);
router.get('/AsArray', GetAsArrayFunc);
router.get('/RowWithData', GetRowWithDataFunc);

export { router };