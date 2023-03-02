import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./lifecycle";
import "./plugin";

// const isProduction = process.env.NODE_ENV === "production";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
