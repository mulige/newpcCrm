import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/pages/Home')
const Login = () => import('@/components/login')
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
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: '登录'
      }
    },



  ]
})
