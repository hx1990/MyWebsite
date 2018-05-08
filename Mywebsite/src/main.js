import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'     //引入路由
import ElementUI from 'element-ui'     //引入element-ui组件
import 'element-ui/lib/theme-default/index.css'
import echarts from 'echarts/lib/echarts' //引入统计图
//let echarts = require('echarts/lib/echarts')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/legend')




import axios from 'axios'  
Vue.use(ElementUI)     //使用UI组件     
Vue.use(VueRouter)     //使用路由

import routes from  './Router.config.js'  //引入配置好的路由
const router=new VueRouter({   //生成路由实例
  mode:'history',
  scrollBehavior: () => ({  //切换路由让鼠标停留在顶部
		y: 0
	}),
  routes
})

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL='https://黄星.com:3000';
axios.defaults.withCredentials=true;
Vue.prototype.$http=axios   //将axios挂在到Vue原型上
Vue.prototype.$echarts=echarts  //把统计图挂在到Vue原型上
new Vue({
  el: '#app',
  router,     //将路由挂在到#app上
  render: h => h(App)
})