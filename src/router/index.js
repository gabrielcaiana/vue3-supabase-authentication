import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    redirect: () => {
      return "/";
    },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../pages/public/AppRegister.vue"),
  },
  {
    path: "/email-confirmation",
    name: "EmailConfirmation",
    component: () => import("../pages/public/EmailConfirmation.vue"),
  },
  {
    path: "/",
    name: "login",
    component: () => import("../pages/public/AppLogin.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../pages/private/Home.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name === "EmailConfirmation" && !to.query.email)
    next({ name: "login" });
  else next();
});

export default router;
