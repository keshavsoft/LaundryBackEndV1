import express from "express";

var router = express.Router();

import { router as routerForAsArray } from "./AsArray/routes.js";

router.use("/AsArray", routerForAsArray);

export { router };
