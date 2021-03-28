import axios from "axios";

axios.defaults.baseURL =
  process.env.NODE_ENV != "production"
    ? "http://localhost:3000"
    : "https://parasiteapi.todack.com";

axios.defaults.headers.common = {
  "Content-Type": "application/json"
};
