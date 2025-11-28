import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/works",
      name: "works",
      component: () => import("../views/WorksView.vue"),
    },
  ],
});

export default router;
