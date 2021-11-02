import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import NewMedia from "../views/NewMedia.vue";
import ShowMedia from "../views/ShowMedia.vue";
import EditMedia from "../views/EditMedia.vue";
import ShowUser from "../views/ShowUser.vue";
import EditUser from "../views/EditUser.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/new",
    name: "new-media",
    component: NewMedia,
  },

  {
    path: "/media/:id",
    name: "show-media",
    component: ShowMedia,
  },

  {
    path: "/media/:id/edit",
    name: "edit-media",
    component: EditMedia,
  },

  {
    path: "/users/me",
    name: "show-user",
    component: ShowUser,
  },

  {
    path: "/users/:id/edit",
    name: "edit-user",
    component: EditUser,
  },

  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },

  {
    path: "/login",
    name: "login",
    component: Login,
  },

  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
