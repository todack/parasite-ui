import axios from "axios";

export default {
  async attemptSignup({ commit, dispatch }, credentials) {
    try {
      let res = await axios.post("/user", credentials);
      commit("setUserData", res.data);
      commit("toggleAuthenticated");
      return true;
    } catch (e) {
      dispatch("setBannerText", e.response.data.error);
      return false;
    }
  },

  async attemptLogin({ commit, dispatch }, credentials) {
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
      dispatch("setBannerText", e.response.data.error);
      return false;
    }
  }
};
