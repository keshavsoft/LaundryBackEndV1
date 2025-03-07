import express from "express";

var router = express.Router();

import { router as QrCodes } from "./3-QrCodes/routes.js";
import { router as Orders } from "./1-Orders/routes.js";
import { router as ItemWise } from "./2-ItemWise/routes.js";
import { router as ToFactory } from "./4-ToFactory/routes.js";
import { router as FactoryScan } from "./5-FactoryScan/routes.js";
import { router as FactoryInwardReturn } from "./6-FactoryInwardReturn/routes.js";
import { router as WashingStart } from "./7-WashingStart/routes.js";
import { router as WashingReject } from "./8-WashingReject/routes.js";
import { router as PressingStart } from "./9-PressingStart/routes.js";
import { router as PressingReject } from "./10-PressingReject/routes.js";
import { router as CompletionStart } from "./11-CompletionStart/routes.js";
import { router as LeftInBranch } from "./12-LeftInBranch/routes.js";
import { router as EntryFactoryReturn } from "./13-EntryFactoryReturn/routes.js";
import { router as PressingReturn } from "./14-PressingReturn/routes.js";
import { router as PressingRewash } from "./15-PressingRewash/routes.js";
import { router as FactoryToBranch } from "./16-FactoryToBranch/routes.js";
import { router as F_F_Entry_Return_Scan } from "./17-F_F_Entry_Return_Scan/routes.js";
import { router as F_F_Pressing_Return_Scan } from "./18-F_F_Pressing_Return_Scan/routes.js";
import { router as F_F_Completion_Scan } from "./19-F_F_Completion_Scan/routes.js";
import { router as Delivery } from "./20-Delivery/routes.js";

router.use("/QrCodes", QrCodes);
router.use("/Orders", Orders);
router.use("/ItemWise", ItemWise);
router.use("/ToFactory", ToFactory);
router.use("/FactoryScan", FactoryScan);
router.use("/FactoryInwardReturn", FactoryInwardReturn);
router.use("/WashingStart", WashingStart);
router.use("/WashingReject", WashingReject);
router.use("/PressingStart", PressingStart);
router.use("/PressingReject", PressingReject);
router.use("/CompletionStart", CompletionStart);
router.use("/LeftInBranch", LeftInBranch);
router.use("/EntryFactoryReturn", EntryFactoryReturn);
router.use("/PressingReturn", PressingReturn);
router.use("/PressingRewash", PressingRewash);
router.use("/FactoryToBranch", FactoryToBranch);
router.use("/F_F_Entry_Return_Scan", F_F_Entry_Return_Scan);
router.use("/F_F_Pressing_Return_Scan", F_F_Pressing_Return_Scan);
router.use("/F_F_Completion_Scan", F_F_Completion_Scan);
router.use("/Delivery", Delivery);

export { router };
