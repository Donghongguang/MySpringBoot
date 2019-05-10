import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Login from '@/components/Login'
import HelloWorld from '@/components/HelloWorld'
import MainMenu from '@/components/MainMenu'
Vue.use(Router);
const routes=[ 
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/app',
    name:'App',
    component:App,
    redirect:{
      path:'/goback'
    }
  },
  {
    path:'/login',
    name:'login',
    component:Login
  },
{
  path: '/helloWorld',
  name: 'HelloWorld',
  component: HelloWorld
},
{
  name:'MainMenu',
  path:'/mainmenu',
  component:MainMenu,
  meta:{
        requireAuth:true
  }
}
]
const router = new Router({
  mode:'history',
  routes
})
export default router
