import express from "express";

var router = express.Router();

import { router as InGenerate } from "./1-InGenerate/routes.js";
import { router as InBranch } from "./12-InBranch/routes.js";
import { router as InWashing } from "./13-InWashing/routes.js";
import { router as InPressing } from "./14-InPressing/routes.js";
import { router as InCompletion } from "./15-InCompletion/routes.js";
import { router as FactoryToBranch } from "./16-FactoryToBranch/routes.js";
import { router as F_F_Entry_Return_Scan } from "./17-F_F_Entry_Return_Scan/routes.js"
import { router as F_F_Pressing_Return_Scan } from "./18-F_F_Pressing_Return_Scan/routes.js"
import { router as Delivery } from "./19-Delivery/routes.js"

router.use("/InGenerate", InGenerate);
router.use("/InBranch", InBranch);
router.use("/InWashing", InWashing);
router.use("/InPressing", InPressing);
router.use("/InCompletion", InCompletion);
router.use("/FactoryToBranch", FactoryToBranch);
router.use("/F_F_Entry_Return_Scan", F_F_Entry_Return_Scan);
router.use("/F_F_Pressing_Return_Scan", F_F_Pressing_Return_Scan);
router.use("/Delivery", Delivery);

export { router };
