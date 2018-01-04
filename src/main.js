import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
import routes from './routes'
import Mock from './mock'
Mock.bootstrap();

import "./styles/global.scss";
Vue.use(MintUI)
Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  mode:"history",
  routes
})

new Vue({
  // el: '#app',
  // template: '<App/>',
  router,
  store,
  //components: { App }
  render: h => h(App)
}).$mount('#app')