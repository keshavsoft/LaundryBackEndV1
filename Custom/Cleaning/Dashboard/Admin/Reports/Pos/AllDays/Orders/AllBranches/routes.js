import express from "express";

var router = express.Router();

import { router as routerForOrders } from "./Orders/routes.js";
import { router as routerForBranchWise } from "./BranchWise/routes.js";
import { router as routerForAsArray } from "./AsArray/routes.js";

router.use("/Orders", routerForOrders);
router.use("/BranchWise", routerForBranchWise);
router.use("/AsArray", routerForAsArray);

export { router };
