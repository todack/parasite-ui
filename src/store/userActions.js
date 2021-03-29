import axios from "axios";

export default {
  async attemptSignup({ commit }, credentials) {
    try {
      let res = await axios.post("/user", credentials);
      commit("setUserData", res.data);
      commit("toggleAuthenticated");
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  },

  async attemptLogin({ commit }, credentials) {
    try {
      let res = await axios.get(`/user/${credentials.email}`, {
        auth: {
          username: credentials.email,
          password: credentials.password
        }
      });
      commit("setUserData", res.data);
      commit("toggleAuthenticated");
      return true;
    } catch (e) {
      console.log(e, e.response.data.error);
      return false;
    }
  }
};
