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
    bannerText: "",
    userProviders: []
  }),
  getters: {},
  mutations: {
    toggleAuthenticated(state) {
      state.isAuthenticated = !state.isAuthenticated;
    },
    setUserData(state, data) {
      state.userData = { ...state.userData, ...data };
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
    },
    setUserProviders(state, data) {
      if (Array.isArray(data)) state.userProviders = data;
      else state.userProviders.unshift(data);
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
