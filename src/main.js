import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "./map";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import HeadBar from "./components/HeadBar";
import FooterBar from "./components/FooterBar";
import HandelBar from "./components/HandelBar";
import Cookies from "js-cookie";

Vue.use(HeadBar);
Vue.use(FooterBar);
Vue.use(HandelBar);
Vue.use(ElementUI);


Vue.config.productionTip = false;
Vue.prototype.Cookies = Cookies;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");