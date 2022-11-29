import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Profile from "../components/Profile.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/comment",
    component: () => import("../components/Comment.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
