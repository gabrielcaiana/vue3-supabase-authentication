import { defineStore } from "pinia";

export const useLoggedInUserStore = defineStore({
  id: "loggedInUser",
  state: () => ({
    logged: false,
    user: {},
  }),
  getters: {
    isLogged: (state) => state.logged,
    getUser: (state) => state.user,
  },
  actions: {
    setUser(user) {
      if (user) {
        this.user = {
          email: user.email,
          id: user.id,
          last_sign: user.last_sign_in_at,
          role: user.role,
          name: user.user_metadata.name,
        };
      }
    },

    setLogged(isLogged) {
      this.logged = isLogged;
    },
  },
});
