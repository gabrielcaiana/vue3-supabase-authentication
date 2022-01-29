import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    redirect: () => {
      return "/";
    },
  },
  {
    path: "/",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
