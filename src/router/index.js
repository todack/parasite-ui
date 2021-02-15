import Vue from "vue";
import VueRouter from "vue-router";

import Landing from "../views/Landing.vue";
import Services from "../views/Services.vue";
import Api from "../views/Api.vue";
import Docs from "../views/Docs.vue";
import Request from "../views/Request.vue";
import Result from "../views/Result.vue";

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
  },
  {
    path: "/request",
    name: "request",
    component: Request
  },
  {
    path: "/result",
    name: "result",
    component: Result
  }
];

const router = new VueRouter({
  routes
});

export default router;
