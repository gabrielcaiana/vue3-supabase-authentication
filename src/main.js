import { createApp } from "vue";
import App from "./App.vue";
import "./scss/index.css";
import { createPinia } from "pinia";
import router from "./router";

createApp(App).use(createPinia()).use(router).mount("#app");
