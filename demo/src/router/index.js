import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: ()=>import ('@/views/login/index')
    },
    {
      path: '/file',
      name: 'file',
      component: () => import('@/views/file/index')
    },
    {
      path: '/resetpass',
      name: 'resetpass',
      component: () => import('@/views/resetPass/index')
    },
    {
      path: '/data',
      name: 'data',
      component: () => import('@/views/data/index')
    }
  ]
})
