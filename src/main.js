// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import './assets/css/base.css'//引入基础样式
import './assets/bootstrap/css/bootstrap.css'
import './assets/bootstrap/js/bootstrap.js'
Vue.config.productionTip = false
/* eslint-disable no-new */

//挂载组件，注册路由
new Vue({
  el: '.app-container',
  router
})

