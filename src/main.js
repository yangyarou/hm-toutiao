import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import router from '.router/index.js'
// @是src路径的别名-在vue-cli文件下有效
// index是目录索引文件  index.js index.vue index.json
import router from '@/router'

// 导入样式
import '@/styles/index.less'

// 导入axios
import axios from 'axios'
Vue.prototype.$http = axios

// 产品级别提示-不开启
Vue.config.productionTip = false

Vue.use(ElementUI)

// main.js 入口文件
// 职责1：引入需要依赖的模块
// 职责2：创建一个根Vue实例
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
