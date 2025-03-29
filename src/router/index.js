import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import TaskView from "@/views/TaskView.vue";
import GroupSessionView from "@/views/GroupSessionView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/tasks",
      name: "Tasks",
      component: TaskView,
    },
    {
      path: "/group-session",
      name: "Group Session",
      component: GroupSessionView,
    },
  ],
});

export default router;
