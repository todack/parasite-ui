import axios from "axios";

axios.defaults.baseURL = "https://parasiteapi.todack.com";
axios.defaults.headers.common = {
  "Content-Type": "application/json"
};
