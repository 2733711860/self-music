import Vue from "vue";
// import "vant/lib/index.css";
import App from "./App.vue";
import router from "./router/index";
// import "@/assets/style/font/iconfont.css";
import "@/assets/style/index.less";
import "./assets/css/index.less";
import $axios from "@/utils/request";
import store from "./store/index";
import jquery from './utils/jquery' // jquery
import './assets/Iconfont/iconfont.css'

// 接口请求
import {post,get,patch,put} from './api/http.js'
import api from './api'
Vue.prototype.$post=post;
Vue.prototype.$get=get;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
Vue.prototype.$api=api;

// mock模拟请求数据
import Mock from '@/mock'

import 'font-awesome/css/font-awesome.css' // 图标库

import VueTouch from 'vue-touch' // v-touch滑动库
Vue.use(VueTouch, {
  name: 'v-touch'
})

// 图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  error: require('./assets/img/404.jpg'),
//loading: require('./assets/img/octocat-spinner-128.gif'),
  attempt: 1
})

// 图片预览
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
Vue.use(Viewer)
Viewer.setDefaults({
  zIndexInline: 9999,
  navbar: false,
  toolbar:false,
  minWidth: 375
})


/*自定义组件*/
import cBase from '@/components' // 基础组件
Vue.use(cBase)// 基础组件

import Loading from './components/me-loading'
Vue.use(Loading)

import Toast from './components/me-toast'
Vue.use(Toast)

import MsgBox from './components/me-msgBox'
Vue.prototype.$msgBox = MsgBox.install


import "@/components/Vant";
// rem
import "amfe-flexible";
// 把变量挂载到vue的原型上
Vue.prototype.$axios = $axios;

//Vue.mixin(mixin);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  jquery,
  render: h => h(App)
}).$mount("#app")