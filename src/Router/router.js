import Vue from 'vue';
import Router from 'vue-router';
import { store } from '@/Vuex/store';

import Home from '../views/Home.vue';
import SignUp from '../views/SignUp.vue';
import SignIn from '../views/SignIn.vue';
import Protected from "../views/Protected";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      meta: { auth: true },
      component: Home
    },
    {
      name: 'signup',
      path: '/signup',
      meta: {
        layout: 'bare',
        guest: true
      },
      component: SignUp
    },
    {
      name: 'signin',
      path: '/signin',
      meta: {
        layout: 'bare',
        guest: true
      },
      component: SignIn
    },
    {
      name: 'protected',
      path: '/protected',
      meta: { auth: true },
      component: Protected
    }
  ]
});

router.beforeEach((to, from, next) => {
  if(!store.getters.loggedIn && to.meta.auth) {
    next({
      name: 'signin',
      query: {
        redirect: to.fullPath
      }
    });
  } // end if

  if(store.getters.loggedIn && to.meta.guest) {
    next({
      name: 'home'
    });
  } // end if

  next();
});

export default router;