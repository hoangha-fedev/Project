import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Basket from '../views/Basket.vue'
import Account from '../views/Account.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/account',
    name: 'account',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Account
  },
  {
    path: '/basket',
    name: 'basket',
    component: Basket
  }
]

const router = new VueRouter({
  routes
})

export default router
