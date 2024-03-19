import express from "express";
import bodyParser from "body-parser";
import { Request, Response } from "express";

import { connect } from "./utils/connect";

import routes from "./router/index";
import cors from "cors";
import { config } from "./config";
console.log(typeof config.server.port);
const port = config.server.port || 3030;

const app = express();
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Hello, world!" });
});

app.listen(port, async () => {
  console.log("Server listening on port", config.server.port);
  await connect();
  const corsOptions = {
    origin: "*",
    credentials: true,
  };
  app.use(cors(corsOptions));
  routes(app);
});

export { app };
