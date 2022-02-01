import { defineStore } from "pinia";

export const useLoggedInUserStore = defineStore({
  id: "loggedInUser",
  state: () => ({
    logged: false,
  }),
  getters: {},
  actions: {},
});
