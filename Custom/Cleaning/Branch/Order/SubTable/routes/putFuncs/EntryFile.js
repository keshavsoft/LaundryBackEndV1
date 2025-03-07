import express from 'express';
var router = express.Router();

import { putFuncs } from "../../controllers/putFuncs/EntryFile.js";

router.put('/ItemsInOrder/:inRow/:inId/:inBranch', putFuncs);


export { router };