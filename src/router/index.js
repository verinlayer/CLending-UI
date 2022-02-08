import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home"),
  },
  {
    path: "/borrow",
    name: "Borrow",
    component: () => import("@/views/Borrow"),
  },
  {
    path: "/mint",
    name: "Mint",
    component: () => import("@/views/Mint"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
