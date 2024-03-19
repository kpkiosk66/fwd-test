import mongoose from "mongoose";
import { config } from "../config";
import { TextEncoder, TextDecoder } from "util";
global.TextEncoder = TextEncoder;
// @ts-expect-error
global.TextDecoder = TextDecoder;

async function connect() {
  try {
    mongoose.set({ strictQuery: true });
    await mongoose.connect(config.mongo.url);
    // console.log("DB Connected");
  } catch (error) {
    console.log("Could not connect to db");
    process.exit(1);
  }
}

export { connect };
