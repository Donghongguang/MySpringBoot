// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'

import router from './router/index.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import $ from 'jquery'
import App from '@/App'
Vue.config.productionTip = false
router.beforeEach((to,from,next)=>{
  if(to.matched.some(record => record.meta.requireAuth)){
    console.log("需要登录");
    if(localStorage.getItem("token")==null){
      console.log("第一不")
      next({
       path:'/',
       query:{redirect:from.fullPath}
      });
    }else{
      console.log("第二部");
      next();
    }
  }else{
    next();
  }
})
/* eslint-disable no-new */
new Vue({
  el:"#app",
  router,
  components: {App},
  template: '<App/>'
})

