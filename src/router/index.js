import { createRouter, createWebHistory } from "vue-router";
import useAuthUser from "../composables/UseAuthUser";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const { isLoggedIn } = useAuthUser();

  if (to.hash.includes("type=recovery")) {
    const accessToken = to.hash.split("&")[0];
    const token = accessToken.replace("#access_token=", "");
    next({ name: "ResetPassword", query: { token } });
  }

  if (
    !isLoggedIn() &&
    to.meta.requiresAuth &&
    !Object.keys(to.query).includes("fromEmail")
  ) {
    next({ name: "login" });
  } else if (
    to.matched.some((record) => record.meta.hideForAuth && isLoggedIn())
  ) {
    next({ name: "Me" });
  } else {
    next();
  }
});

export default router;
