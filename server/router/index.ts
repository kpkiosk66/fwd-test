import express, { Express } from "express";
import PremiumRouter from "../router/Premium.routes";
const router = express.Router();

function routes(app: Express) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api", router);
  router.use("/premium", PremiumRouter);
}

export default routes;
