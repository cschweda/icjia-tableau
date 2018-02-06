import Vue from "vue";
import Router from "vue-router";
import article from "@/pages/Article";


Vue.use(Router);

export default new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes: [
    // {
    //   path: "/",
    //   redirect: "/article"
    // },

    {
      path: "/",
      name: "article",
      component: article
    },


    { path: "/*", redirect: "/" }
  ]
});
