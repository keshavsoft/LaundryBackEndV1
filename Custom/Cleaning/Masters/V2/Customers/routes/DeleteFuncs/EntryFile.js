import express from 'express';

var router = express.Router();

import { DeleteFunc } from '../../controllers/DeleteFuncs/EntryFile.js';

router.delete('/:Id', DeleteFunc);

export { router };