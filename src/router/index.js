import { createRouter, createWebHistory } from "vue-router";
import useAuthUser from "../composables/UseAuthUser";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const { isLoggedIn } = useAuthUser();

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
