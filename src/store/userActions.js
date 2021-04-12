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
  },

  async createProvider({ commit, dispatch }, data) {
    try {
      let res = await axios.post("/provider/", data, {
        headers: {
          authorization: "Bearer letmepass"
        }
      });
      commit("setUserProviders", res.data);
      dispatch("setBannerText", "Provider created successfully");
    } catch (e) {
      console.log(e.response.data.error);
      dispatch("setBannerText", e.response.data.error);
    }
  },

  async fetchUserProviders({ state, commit, dispatch }) {
    try {
      let res = await axios.get("/provider/", {
        authorization: "Bearer letmepass",
        params: {
          authorId: state.userData._id
        }
      });
      commit("setUserProviders", res.data);
    } catch (e) {
      dispatch("setBannerText", e.response.data.error);
    }
  }
};
