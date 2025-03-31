import express from 'express';

var router = express.Router();

import { AlterFunc } from '../../controllers/AlterFuncs/EntryFile.js';

router.get('/:Id', AlterFunc);

export { router };