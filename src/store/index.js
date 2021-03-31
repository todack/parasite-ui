import Vue from "vue";
import Vuex from "vuex";
import userActions from "./userActions";
import servicesActions from "./servicesActions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    isAuthenticated: false,
    userData: null,
    searchText: "",
    domainsList: [],
    bannerText: ""
  }),
  getters: {},
  mutations: {
    toggleAuthenticated(state) {
      state.isAuthenticated = !state.isAuthenticated;
    },
    setUserData(state, data) {
      state.userData = data;
    },
    setSearchText(state, data) {
      state.searchText = data;
    },
    setDomainsList(state, data) {
      state.domainsList = data;
    },
    setBannerText(state, data) {
      if (data.length > 0) {
        state.bannerText = `Something just broke, ${data}.`;
      } else state.bannerText = data;
    }
  },
  actions: {
    ...userActions,
    ...servicesActions,
    setBannerText({ commit }, data) {
      commit("setBannerText", data);
      if (data.length > 0) {
        setTimeout(() => {
          commit("setBannerText", "");
        }, 10000);
      }
    }
  }
});
