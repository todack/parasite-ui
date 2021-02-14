import Vue from "vue";
import VueRouter from "vue-router";

import Landing from "../views/Landing.vue";
import Services from "../views/Services.vue";
import Api from "../views/Api.vue";
import Docs from "../views/Docs.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "landing",
    component: Landing
  },
  {
    path: "/services",
    name: "services",
    component: Services
  },
  {
    path: "/api",
    name: "api",
    component: Api
  },
  {
    path: "/docs",
    name: "docs",
    component: Docs
  }
];

const router = new VueRouter({
  routes
});

export default router;
