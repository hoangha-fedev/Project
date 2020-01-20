import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Books from '../views/Books.vue'
import Book from '../views/Book.vue'
import BookPart from '../views/BookPart.vue'
import Profile from '../views/Profile.vue'
import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'
import Store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/books',
    name: 'books',
    component: Books
  },
  {
    path: '/book/:id',
    name: 'book',
    props: true,
    component: Book
  },
  {
    path: '/book/:bookId/part/:partId',
    name: 'bookPart',
    props: true,
    component: BookPart
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    beforeEnter: AuthGuard
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  }
]

function AuthGuard(from, to, next){
  if(Store.getters.isUserAuthenticated)
    next()
  else 
    next('/signin')
}

const router = new VueRouter({
  routes
})

export default router
