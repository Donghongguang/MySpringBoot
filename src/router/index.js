import Vue from 'vue'

import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainMenu from '@/components/MainMenu'

Vue.use(Router);
const routes=[ 
{
  path: '/helloWorld',
  name: 'HelloWorld',
  component: HelloWorld
},
{
  name:'MainMenu',
  path:'/mainmenu',
  component:MainMenu
}
]
const router = new Router({
  mode:'history',
  routes
})
export default router
