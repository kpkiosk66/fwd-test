import axios from "axios";
// import {config} from "../server/config"
const options = {
  baseURL: "http://localhost:3001/api",
  headers: {
    "Content-Type": "application/json",
  },
};
const instance = axios.create(options);

export default instance;
