import { Request, Response, NextFunction } from "express";
import { UserData } from "../../shared/types";
import Log from "../models/Log.model";
import axios from "axios";

const ping = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).send("pong");
  } catch (e: unknown) {
    next(e);
  }
};

const calculateCost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user: UserData = req.body;
    console.log(user);
    const calculatedCost = await axios.post(
      "https://api.fwd.co.th/dev-ecommerce/getProduct",
      user,
      {
        headers: {
          "Postman-Token": "7454ba0a-cbf4-4282-aee6-56e6125718b2",
        },
      }
    );
    console.log(calculatedCost.data);
    const logger = new Log({
      ...user,
      cost: calculatedCost.data.quotationProductList[0],
    });
    await logger.save();
    res.send(calculatedCost.data.quotationProductList[0]);
  } catch (e: unknown) {
    next(e);
  }
};

export default {
  ping,
  calculateCost,
};
