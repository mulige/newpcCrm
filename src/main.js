// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

const Header = () => import("@/components/Header.vue")
const FormTable = () => import("@/components/formtable/FormTable.vue")
const InnerTable = () => import("@/components/InnerTable.vue")

Vue.use(ElementUI)
Vue.component('my-header',Header)
Vue.component('form-table',FormTable)
Vue.component('inner-table',InnerTable)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
