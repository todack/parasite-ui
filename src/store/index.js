import Vue from "vue";
import Vuex from "vuex";
import userActions from "./userActions";
import servicesActions from "./servicesActions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    isAuthenticated: false,
    userData: null
  }),
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    userData: state => state.userData
  },
  mutations: {
    toggleAuthenticated(state) {
      state.isAuthenticated = !state.isAuthenticated;
    },
    setUserData(state, data) {
      state.userData = data;
    }
  },
  actions: {
    ...userActions,
    ...servicesActions
  }
});
