import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/pages/Home')
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
      	title: '首页'
      }
    }
  ]
})
