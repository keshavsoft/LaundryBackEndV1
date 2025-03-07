import express from 'express';
var router = express.Router();

import { PostFunc,PostSettlementFunc } from "../../controllers/postFuncs/EntryFile.js";

router.post('/:inBranch', PostFunc);
router.post('/Settlement/:inId/:inBranch', PostSettlementFunc);


export { router };