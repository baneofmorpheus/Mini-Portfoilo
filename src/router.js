import Vue from "vue";
import Router from "vue-router";
import LandingPage from "./components/LandingPage.vue";
import AdminManagement from "./components/AdminManagement.vue";
import Login from "./components/Login.vue";
import UiDesigns from "./components/UiDesigns.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "LandingPage",
      component: LandingPage,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/admin",
      name: "AdminManagement",
      component: AdminManagement,
    },
    {
      path: "/ui-designs",
      name: "UiDesigns",
      component: UiDesigns,
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
