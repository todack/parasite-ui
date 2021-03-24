import Vue from "vue";
import Vuex from "vuex";
import userActions from "./userActions";
import servicesActions from "./servicesActions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({}),
  getters: {},
  mutations: {},
  actions: {
    ...userActions,
    ...servicesActions
  }
});
