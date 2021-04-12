import axios from "axios";

export default {
  async fetchDomainsList({ state, commit, dispatch }) {
    if (state.domainsList.length) return;
    try {
      let res = await axios.get("/domain");
      commit("setDomainsList", res.data);
    } catch (e) {
      dispatch("setBannerText", e.response.data.error);
    }
  },

  async getDomain({ dispatch }, domainId) {
    try {
      let res = await axios.get(`/domain/${domainId}`);
      return res.data;
    } catch (e) {
      dispatch("setBannerText", e.response.data.error);
    }
  },

  async requestService({ dispatch }, { data, domainId }) {
    try {
      let res = await axios.post(`/request/${domainId}`, data, {
        headers: {
          authorization: "Bearer letmepass"
        }
      });
      console.log(res);
      return res.data._id;
    } catch (e) {
      dispatch("setBannerText", e.response.data.error);
    }
  }
};
