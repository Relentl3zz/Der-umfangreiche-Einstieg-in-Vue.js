import { createRouter, createWebHistory } from "vue-router";
import ToDoList from "@/views/ToDoList.vue";
import Login from "@/views/Login.vue";
import ToDoDetails from "@/views/ToDoDetails.vue";

const routes = [
  {
    component: ToDoList,
    path: "/",
    name: "Home",
  },
  {
    component: Login,
    path: "/login",
    name: "Login-Page",
  },
  {
    component: ToDoDetails,
    path: "/todo/:id",
    name: "ToDo-Details",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
