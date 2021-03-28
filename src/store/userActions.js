import axios from "axios";

export default {
  async attemptSignup({ commit }, credentials) {
    let res = await axios.post("/user", credentials);

    if (res.data.body.error) {
      // Maybe show some dialog message.
      return false;
    }

    commit("setUserData", res.data.body.created);
    commit("toggleAuthenticated");
    return true;
  },

  async attemptLogin({ commit }, credentials) {
    let res = await axios.get(`/user/${credentials.email}`, {
      auth: {
        username: credentials.email,
        password: credentials.password
      }
    });

    if (res.data.body.error) {
      return false;
    }

    commit("setUserData", res.data.body);
    commit("toggleAuthenticated");
    return true;
  }
};
