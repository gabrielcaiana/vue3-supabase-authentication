import useAuthUser from "../composables/UseAuthUser";

const routes = [
  {
    path: "/login",
    redirect: () => {
      return "/";
    },
  },
  // {
  //   path: "/register",
  //   name: "register",
  //   meta: {
  //     hideForAuth: true,
  //   },
  //   component: () => import("../pages/public/AppRegister.vue"),
  // },
  // {
  //   path: "/email-confirmation",
  //   name: "EmailConfirmation",
  //   meta: {
  //     hideForAuth: true,
  //   },
  //   beforeEnter: (to) => {
  //     if (!to.query.email) {
  //       return { name: "login" };
  //     }
  //   },
  //   component: () => import("../pages/public/EmailConfirmation.vue"),
  // },
  {
    path: "/",
    name: "login",
    meta: {
      hideForAuth: true,
    },
    component: () => import("../pages/public/AppLogin.vue"),
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    meta: {
      hideForAuth: true,
    },
    component: () => import("../pages/public/ForgotPassword.vue"),
  },
  {
    path: "/reset-password",
    name: "ResetPassword",
    component: () => import("../pages/private/ResetPassword.vue"),
  },
  {
    name: "Logout",
    path: "/logout",
    beforeEnter: async () => {
      const { logout } = useAuthUser();
      await logout();
      return { name: "home" };
    },
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

export default routes;
