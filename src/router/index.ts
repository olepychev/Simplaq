import { createRouter, createWebHistory } from 'vue-router'
/* Home */
import HomeView from '@/views/HomeView.vue';
/* Auth */
import LoginView from '@/views/auth/LoginView.vue';
import RegisterView from '@/views/auth/RegisterView.vue';
/* Lite */
import LiteView from '@/views/lite/LiteView.vue';
import LiteSingleRewardView from '@/views/lite/LiteSingleRewardView.vue';
import { useUserStore } from '@/stores/user';

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "Login",
    meta: {isGuest: true},
    component: LoginView,
  },
  {
    path: "/register",
    name: "Register",
    meta: {isGuest: true},
    component: RegisterView,
  },
  {
    path: "/lite",
    name: "Lite",
    meta: {requiresAuth: true},
    component: LiteView,
  },
  {
    path: '/my-reward',
    name: 'My-reward',
    meta: {requiresAuth: true},
    component: LiteSingleRewardView,
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const user = useUserStore()

  if (to.meta.requiresAuth && !user.token){
    next({name: "Login"})
  } 
  else if(to.meta.isGuest && user.token){
    next({name: "Lite"})
  }else {
    next();
  }
})


export default router
