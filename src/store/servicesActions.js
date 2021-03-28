import axios from "axios";

export default {
  async getDomainsList({ state, commit }) {
    if (state.domainsList.length) return;

    let res = await axios.get("/domain");

    if (res.data.body.error) {
      throw new Error(res.data.body.error.message);
    } else {
      commit("setDomainsList", res.data.body);
    }
  },

  transformDomainName(_, data) {
    return data
      .split("-")
      .map(val => val[0] + val.slice(1))
      .join(" ");
  }
};
