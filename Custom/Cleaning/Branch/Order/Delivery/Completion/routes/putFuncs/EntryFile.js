import express from 'express';
var router = express.Router();

import { putFuncs } from "../../controllers/putFuncs/EntryFile.js";

router.put('/ReCheckOutData/:inRow/:inId/:inBranch', putFuncs);


export { router };