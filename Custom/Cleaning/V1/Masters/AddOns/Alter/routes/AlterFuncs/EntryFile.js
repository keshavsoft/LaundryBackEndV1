import express from 'express';

var router = express.Router();

import { AlterFunc } from '../../controllers/AlterFuncs/EntryFile.js';

router.put('/:Id', AlterFunc);

export { router };