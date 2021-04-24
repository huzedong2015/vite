import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";

const history = createWebHistory(import.meta.env.BASE_URL);

export const router = createRouter({
   history,
   routes,
   scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
         return savedPosition;
      }
      return { top: 0 };
   },
});
