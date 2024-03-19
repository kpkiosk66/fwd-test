import dotenv from "dotenv";

dotenv.config();

const MONGO_URL = process.env.MONGO_URL || "";
const SERVER_PORT = process.env.SERVER_PORT
  ? Number(process.env.SERVER_PORT)
  : 3030;
const SERVER_URL = process.env.SERVER_URL;
// const REDISHOST = process.env.REDISHOST;
// const REDISPASSWORD = process.env.REDISPASSWORD || null;
// const REDISPORT = process.env.REDISPORT;

export const config = {
  mongo: {
    url: MONGO_URL,
  },
  server: {
    url: SERVER_URL,
    port: SERVER_PORT,
  },
  //   redis: {
  //     url: `redis://${REDISHOST}:${REDISPORT}`,
  //     password: REDISPASSWORD === null ? "" : REDISPASSWORD,
  //   },
};
