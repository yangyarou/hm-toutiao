import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // 也可以通过name属性跳转路径
    { path: '/login', name: 'login', component: Login }
  ]
})

export default router
