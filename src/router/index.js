import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/pages/Home')
const Date = () => import('@/pages/Date')
const Login = () => import('@/components/login')
const Customer = () => import('@/pages/customer/Customer')
const RealtimeInfo = () => import('@/pages/customer/children/RealtimeInfo')
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
      path: '/customer',
      name: 'customer',
      component: Customer,
      redirect: '/customer/realtimeInfo',
      meta: {
        title: '客户'
      },
      children:[{
      	path: 'realtimeInfo',
      	name: 'realtimeInfo',
      	component: RealtimeInfo,
      	meta: {
      		title: '潜在客户'
      	}
      }]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/date',
      name: 'date',
      component: Date,
      meta: {
        title: '日历'
      }
    },



  ]
})
