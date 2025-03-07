import express from 'express';

var router = express.Router();

import { DeleteFunc, ReferenceCheckFunc, DeleteSubKeyFunc } from '../../controllers/DeleteFuncs/EntryFile.js';

import { DeleteFunc as DeleteFuncmiddleware } from '../../middlewares/DeleteFuncs/DeleteFunc.js';

router.delete('/SubKey/:Id/:inKey/:SubId', DeleteFuncmiddleware, DeleteSubKeyFunc);
router.delete('/:Id', DeleteFuncmiddleware, DeleteFunc);
router.delete('/ReferenceCheck/:Id', DeleteFuncmiddleware, ReferenceCheckFunc);

export { router };