import express from "express";
const router = express.Router();

import PremiumController from "../controller/Premium.controller";

router.route("/ping").get(PremiumController.ping);
router.route("/calculate").post(PremiumController.calculateCost);
export = router;
