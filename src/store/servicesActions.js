import axios from "axios";

export default {
  async getDomainsList({ state, commit, dispatch }) {
    if (state.domainsList.length) return;
    try {
      let res = await axios.get("/domain");
      commit("setDomainsList", res.data);
    } catch (e) {
      dispatch("setBannerText", e.response.data.error);
    }
  },

  transformDomainName(_, data) {
    return data
      .split("-")
      .map(val => val[0] + val.slice(1))
      .join(" ");
  }
};
