import express from 'express';

var router = express.Router();

// import { router as Today } from './Today/routes.js';
import { router as Branch } from './Branch/routes.js';
import { router as Dashboard } from "./Dashboard/routes.js";
import { router as Factory } from "./Factory/routes.js";
import { router as Masters } from "./Masters/routes.js";
import { router as V1 } from "./V1/routes.js";

// router.use('/Today', Today);
router.use('/Branch', Branch);
router.use('/Dashboard', Dashboard);
router.use('/Factory', Factory);
router.use('/Masters', Masters);
router.use('/V1', V1);

export { router };