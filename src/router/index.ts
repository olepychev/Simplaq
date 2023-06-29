import { createRouter, createWebHistory } from 'vue-router'
/* Home */
import HomeView from '@/views/HomeView.vue';
/* Auth */
import LoginView from '@/views/auth/LoginView.vue';
import RegisterView from '@/views/auth/RegisterView.vue';
/* Auth - Password */
import ForgotPassword from '@/views/auth/password/ForgotPassword.vue'
import SetnewPassword from '@/views/auth/password/SetnewPassword.vue'
/* Lite */
import LiteView from '@/views/lite/LiteView.vue';
import LiteSingleRewardView from '@/views/lite/LiteSingleRewardView.vue';
import { useUserStore } from '@/stores/user';

import Routes from './routes';

const routes = [
  {
    path: "/",
    name: Routes.HOME,
    meta: {
      title: "Home Page"
    },
    component: HomeView,
  },
  {
    path: "/login",
    name: Routes.LOGIN,
    meta: {
      isGuest: true,
      title: "Login Page"
    },
    component: LoginView,
  },
  {
    path: "/register",
    name: Routes.REGISTER,
    meta: {
      isGuest: true,
      title: "Register Page"
    },
    component: RegisterView,
  },
  {
    path: "/forgot-password",
    name: Routes.FORGOT_PASSWORD,
    meta: {
      isGuest: true,
      title: "Forgot password Page"
    },
    component: ForgotPassword,
  },
  {
    path: "/setnew-password",
    name: Routes.SETNEW_PASSWORD,
    meta: {
      isGuest: true,
      title: "Set New Password Page"
    },
    component: SetnewPassword,
  },
  {
    path: "/lite",
    name: Routes.LITE,
    meta: {
      requiresAuth: true,
      title: "Lite Page"
    },
    component: LiteView,
  },
  {
    path: '/my-reward',
    name: Routes.MY_REWARD,
    meta: {
      requiresAuth: true,
      title: "My Reward Page"
    },
    component: LiteSingleRewardView,
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const user = useUserStore()
  window.document.title = to.meta.title ? to.meta.title : ''
  if (to.meta.requiresAuth && !user.token){
    next({name: Routes.LOGIN})
  } 
  else if(to.meta.isGuest && user.token){
    next({name: Routes.LITE})
  }else {
    next();
  }
})


export default router
