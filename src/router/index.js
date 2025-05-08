import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/member',
    name: 'member',
    component: () => import('../views/MemberView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
   path: '/logIn',
   name: 'logIn',
    component: () => import('../views/LogInView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
