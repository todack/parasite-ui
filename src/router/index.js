import Vue from "vue";
import VueRouter from "vue-router";

import Landing from "../views/Landing.vue";
import Services from "../views/Services.vue";

import Docs from "../views/Docs.vue";

import Introduction from "../components/docs/Introduction.vue";
import ProgrammaticAccess from "../components/docs/ProgrammaticAccess.vue";
import WebInterface from "../components/docs/WebInterface.vue";

import Request from "../views/Request.vue";
import Result from "../views/Result.vue";

import Dashboard from "../views/Dashboard.vue";

import AccountSettings from "../components/dashboard/AccountSettings.vue";
import ApiAccess from "../components/dashboard/ApiAccess.vue";
import Billing from "../components/dashboard/Billing.vue";
import Support from "../components/dashboard/Support.vue";

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
    path: "/docs",
    name: "docs",
    component: Docs,
    children: [
      {
        path: "introduction",
        component: Introduction
      },
      {
        path: "programmatic-access",
        component: ProgrammaticAccess
      },
      {
        path: "web-interface",
        component: WebInterface
      },
      {
        path: "",
        redirect: "introduction"
      }
    ]
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
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "account-settings",
        component: AccountSettings
      },
      {
        path: "api-access",
        component: ApiAccess
      },
      {
        path: "billing",
        component: Billing
      },
      {
        path: "support",
        component: Support
      },
      {
        path: "",
        redirect: "account-settings"
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
