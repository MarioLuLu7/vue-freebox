import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [{
    path: "/",
    components: {
      menuList: () => import("./views/MenuList"),
      defaultPage: () => import("./views/defaultPage"),
      fixedPage: () => import("./views/fixedPage"),
      mapPage: () => import("./views/mapPage"),
      defaultPageChild: () => import("./views/defaultPageChild")
    }
  }]
});