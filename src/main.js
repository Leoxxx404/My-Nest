// 入口文件
import "./mock";
import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "./router";
import store from "./store";
import showMessage from "./utils/showMessage";
Vue.prototype.$showMessage = showMessage;
import "./eventBus"
// 注册全局指令
import vLoading from "./directives/loading";
import vLazy from "./directives/lazy";
Vue.directive("loading", vLoading);
Vue.directive("lazy",vLazy);

store.dispatch("setting/fetchSetting");
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");


