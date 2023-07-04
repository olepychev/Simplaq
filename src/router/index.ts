import { createRouter, createWebHistory } from 'vue-router';
/* Home */
import HomeView from '@/views/HomeView.vue';
/* Auth */
import LoginView from '@/views/auth/LoginView.vue';
import RegisterView from '@/views/auth/RegisterView.vue';
/* Auth - Password */
import ForgotPassword from '@/views/auth/password/ForgotPassword.vue';
import SetnewPassword from '@/views/auth/password/SetnewPassword.vue';
/* Lite */
import LiteView from '@/views/lite/LiteView.vue';
import LiteSingleRewardView from '@/views/lite/LiteSingleRewardView.vue';
/* Profile */
import ProfileView from '@/views/profile/ProfileView.vue';
/* Profile - Tabs */
import ProfileTabView from '@/views/profile/Tabs/ProfileTabView.vue';

/* User Store */
import { useUserStore } from '@/stores/user';

import Routes from './routes';

const routes = [
  {
    path: "/",
    name: Routes.HOME,
    component: HomeView,
  },
  {
    path: "/login",
    name: Routes.LOGIN,
    meta: {
      isGuest: true,
    },
    component: LoginView,
  },
  {
    path: "/register",
    name: Routes.REGISTER,
    meta: {
      isGuest: true,
    },
    component: RegisterView,
  },
  {
    path: "/forgot-password",
    name: Routes.FORGOT_PASSWORD,
    meta: {
      isGuest: true,
    },
    component: ForgotPassword,
  },
  {
    path: "/setnew-password",
    name: Routes.SETNEW_PASSWORD,
    meta: {
      isGuest: true,
    },
    component: SetnewPassword,
  },
  {
    path: "/lite",
    name: Routes.LITE,
    meta: {
      requiresAuth: true,
    },
    component: LiteView,
  },
  {
    path: '/my-reward',
    name: Routes.MY_REWARD,
    meta: {
      requiresAuth: true,
    },
    component: LiteSingleRewardView,
  },
  {
    path: '/profile',
    name: Routes.PROFILE,
    meta: {
      requiresAuth: true,
    },
    component: ProfileView,
    children: [
      {
        path: '',
        name: Routes.PROFILE_TAB,
        default: ProfileTabView,
        component: ProfileTabView,
      },
    ]
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const user = useUserStore()
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
