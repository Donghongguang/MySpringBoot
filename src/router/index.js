import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import HelloWorld from '@/components/HelloWorld'
import MainMenu from '@/components/MainMenu'
Vue.use(Router);
const routes=[ 
  {
        path:'/goback',
        redirect:'/login'
  },
{
  path: '/helloWorld',
  name: 'HelloWorld',
  component: HelloWorld
},
{
  name:'MainMenu',
  path:'/mainmenu',
  component:MainMenu
},{
  path:'/login',
  name:'login',
  component:Login
}
]
const router = new Router({
  mode:'history',
  routes
})
export default router
