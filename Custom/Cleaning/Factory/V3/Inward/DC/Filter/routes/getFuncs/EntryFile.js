import express from 'express';

var router = express.Router();

import {
    GetFunc, GetSendDcFunc
} from '../../controllers/getFuncs/EntryFile.js';

router.get('/', GetFunc);
router.get('/SendDc', GetSendDcFunc);

export { router };