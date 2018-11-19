import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('./views/index.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/home/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/login/About.vue')
    }
  ]
})
