import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
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
