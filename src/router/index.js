import { createRouter, createWebHistory } from "vue-router";
import useAuthUser from "../composables/UseAuthUser";

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
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () => import("../pages/public/ForgotPassword.vue"),
  },
  {
    path: "/home",
    name: "home",
    meta: {
      requiresAuth: true,
    },
    component: () => import("../pages/private/Home.vue"),
  },
  {
    path: "/me",
    name: "Me",
    meta: {
      requiresAuth: true,
    },
    component: () => import("../pages/private/Me.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const { isLoggedIn } = useAuthUser();
  if (!isLoggedIn() && to.meta.requiresAuth) {
    next({ name: "login" });
  }

  if (to.name === "EmailConfirmation" && !to.query.email)
    next({ name: "login" });
  else next();
});

export default router;
