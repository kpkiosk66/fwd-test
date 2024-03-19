import supertest from "supertest";
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();
import { connect } from "../utils/connect";
import routes from "../router/Premium.routes";
const app = express();
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use("/api/premium", routes);

beforeEach(async () => {
  await connect();
});

describe("GET /api/premium", () => {
  it("should return pong", async () => {
    const res = await supertest(app).get("/api/premium/ping");
    expect(res.statusCode).toBe(200);
  });
  it("should return quotationProduct", async () => {
    const body = {
      name: "Test",
      surname: "Test",
      gender: "male",
      dob: "1998-01-30",
      planCode: "T11A20",
      premiumPerYear: "300",
      paymentFrequency: "YEARLY",
    };
    const res = await supertest(app).post("/api/premium/calculate").send(body);
    expect(res.statusCode).toBe(200);
  });
});
