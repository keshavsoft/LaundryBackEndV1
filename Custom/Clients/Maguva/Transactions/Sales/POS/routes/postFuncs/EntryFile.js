import express from 'express';
var router = express.Router();

import { postFunc } from '../../controllers/postFuncs/EntryFile.js';

router.post('/', postFunc);

export { router };