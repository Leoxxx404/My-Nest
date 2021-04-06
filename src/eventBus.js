import Vue from "vue";
const app = new Vue({});
/*
 * 事件名：mainScroll
 * 含义：主区域滚动条位置变化后触发
 * 参数：
 * - 滚动的dom元素
 */
Vue.prototype.$bus = app;
export default app;
