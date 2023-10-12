import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Login from "./pages/Login.vue";
import Register from "./pages/Register.vue";
import Home from "./pages/Home.vue"
const routes = [
  { path: "/login", component: Login , name: Login},
  { path: "/register", component: Register },
  {path: "/", component: Home},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
createApp(App).use(router).mount("#app");

export default router
