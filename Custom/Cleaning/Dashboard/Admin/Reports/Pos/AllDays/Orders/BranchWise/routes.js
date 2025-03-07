import express from "express";

var router = express.Router();

import { router as QrCodes } from "./3-QrCodes/routes.js";
import { router as Orders } from "./1-Orders/routes.js";

router.use("/QrCodes", QrCodes);
router.use("/Orders", Orders);

export { router };
