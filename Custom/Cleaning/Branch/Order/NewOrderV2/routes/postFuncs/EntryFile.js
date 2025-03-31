import express from 'express';
var router = express.Router();

import { PostFunc, PostSettlementFunc ,SubTableFunc} from "../../controllers/postFuncs/EntryFile.js";

router.post('/:inBranch', PostFunc);
router.post('/Settlement/:inId/:inBranch', PostSettlementFunc);
router.post('/:inBranch/:id/:inKey', SubTableFunc);//SubTable For Order

export { router };