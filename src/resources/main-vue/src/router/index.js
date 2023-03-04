import Vue from "vue";
import VueRouter from "vue-router";

const basename = process.env.NODE_ENV === "production" ? "" : "";

Vue.use(VueRouter);

export const routeHome = ''

const routes = [
  {
    path: "/",
    redirect: "/home/recommend",
  },
  {
    path: "/home/recommend",
    name: "recommend",
    component: () => import("@/views/Recommend.vue")
  },
  {
    path: "/home/essential",
    name: "essential",
    component: () => import("@/views/Essential.vue")
  },
  {
    path: "/home/game",
    name: "game",
    component: () => import("@/views/Game.vue")
  },
  {
    path: "/home/work",
    name: "work",
    component: () => import("@/views/Work.vue")
  },
  {
    path: "/home/all",
    name: "all",
    component: () => import("@/views/All.vue")
  },
  {
    path: "/home/upgrade",
    name: "upgrade",
    component: () => import("@/views/Upgrade.vue")
  },
  {
    path: "/home/unload",
    name: "unload",
    component: () => import("@/views/Unload.vue")
  },
  {
    path: "/home/soft/:id",
    name: "soft",
    component: () => import("@/views/SoftDetails.vue")
  },
  {
    path: "/home/soft_list/:id",
    name: "soft_list",
    component: () => import("@/views/SoftList.vue")
  },
  {
    path: "/home/search",
    name: "search",
    component: () => import("@/views/Search.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: basename,
  routes,
});

export default router;
