import express from "express";

var router = express.Router();

import { router as StatusDC } from "./StatusDC/routes.js";
import { router as DcDashBoard } from "./DcDashBoard/routes.js";


router.use("/StatusDC", StatusDC);
router.use("/DcDashBoard", DcDashBoard);



export { router };
