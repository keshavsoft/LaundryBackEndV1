import express from "express";

var router = express.Router();

import { router as StatusDC } from "./StatusDC/routes.js";

router.use("/StatusDC", StatusDC);


export { router };
