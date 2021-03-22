import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/Login.vue'
import Signup from '../views/SignUp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home/:user_id/:user_name',
    name: 'Home',
    component: Home,
    props:true,
    meta: {
      requireAuth : true
    }
  },
  {
    path: '/detail/:id/:user_name',
    name: 'Detail',
    component: Detail,
    props: true,
    meta: {
      requireAuth : true
    }
  },
  {
    path: '/profile/:user_id/:user_name',
    name: 'Profile',
    component: Profile,
    props:true,
    meta: {
      requireAuth : true
    }
  },
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
