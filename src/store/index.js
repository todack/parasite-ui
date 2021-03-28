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
    domainsList: []
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
    }
  },
  actions: {
    ...userActions,
    ...servicesActions
  }
});
