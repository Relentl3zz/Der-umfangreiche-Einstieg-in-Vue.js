import Vue from "vue";
import VueRouter from "vue-router";
import ToDoList from "@/views/ToDoList.vue";
import Login from "@/views/Login.vue";
import ToDoDetails from "@/views/ToDoDetails.vue";

Vue.use(VueRouter);

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

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
