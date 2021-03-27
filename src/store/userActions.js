import axios from "axios";

export default {
  async attemptAuthentication({ commit }, credentials) {
    let res = await axios.post("/user", credentials);
    console.log(res);
    if (res.data.body.error) {
      // Maybe show some dialog message.
      return false;
    }
    commit("setUserData", res.data.body.created);
    commit("toggleAuthenticated");
    return true;
  }
};
