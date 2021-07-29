import Vue from "vue";
import VueRouter from "vue-router";
import VuePageStack from "vue-page-stack";
import Home from "../views/Home.vue";
import Camera from "../views/Camera.vue";
import Recorder from "../views/Microphone.vue";
import FaceAI from "../views/FaceAI.vue";
import EditProfile from "../views/EditProfile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/camera",
    name: "camera",
    component: Camera,
  },
  {
    path: "/microphone",
    name: "microphone",
    component: Recorder,
  },
  {
    path: "/faceai",
    name: "faceai",
    component: FaceAI,
  },
  {
    path: "/editprofile",
    name: "editprofile",
    component: EditProfile,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// vue-router is necessary
Vue.use(VuePageStack, { router });

export default router;