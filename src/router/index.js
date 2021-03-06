import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/pages/Home')
const Date = () => import('@/pages/Date')
const Login = () => import('@/components/login')
const Customer = () => import('@/pages/customer/Customer')
const RealtimeInfo = () => import('@/pages/customer/RealtimeInfo')
const MyPotCus = () => import('@/pages/customer/potentialCustomers/MyPotCus')
const AddPotCue = () => import('@/pages/customer/potentialCustomers/addPotCus')
const PerCusCard = () => import('@/pages/customer/PerCusCard')

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
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
			children: [{
					path: 'realtimeInfo',
					name: 'realtimeInfo',
					component: RealtimeInfo,
					meta: {
						title: '实时概况'
					}
				},
				{
					path: 'perCusCard',
					name: 'perCusCard',
					component: PerCusCard,
					meta: {
						title: '个人客户名片'
					}
				},
				{
					path: 'myPotCus',
					name: 'MyPotCus',
					component: MyPotCus,
					meta: {
						title: '潜在客户'
					},
					children: [{
						path: 'addpotcus',
						name: 'AddPotCue',
						component: AddPotCue,
						meta: {
							title: '新增潜在客户'
						}
					}]
				}
			]
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