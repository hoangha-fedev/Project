import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Blog from '../views/Blog.vue'
import ContactUs from '../views/ContactUs.vue'
import Features from '../views/Features.vue'
import Pricing from '../views/Pricing.vue'
import Hotels from '../views/Hotels.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import FAQ from '../views/FAQ.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUs
  },
  {
    path: '/features',
    name: 'Features',
    component: Features
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing
  },
  {
    path: '/hotels',
    name: 'Hotels',
    component: Hotels
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },        
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ
  }
]

const router = new VueRouter({
  routes
})

export default router
