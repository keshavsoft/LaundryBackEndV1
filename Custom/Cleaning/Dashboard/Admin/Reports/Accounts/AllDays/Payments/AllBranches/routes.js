import express from "express";

var router = express.Router();

import { router as DateWise } from "./DateWise/routes.js";

router.use("/DateWise", DateWise);

export { router };
