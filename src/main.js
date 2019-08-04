import Vue from 'vue'
import App from './App.vue'

// 产品级别提示-不开启
Vue.config.productionTip = false

// main.js 入口文件
// 职责1：引入需要依赖的模块
// 职责2：创建一个根Vue实例
new Vue({
  render: h => h(App)
}).$mount('#app')
