import type { RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
   {
      path: "/",
      name: "home",
      component: () => import("../views/index/index.vue"),
   },
   {
      path: "/log",
      name: "log",
      component: () => import("../views/log/index.vue"),
   },
];
