import Vue from 'vue';
import Router from 'vue-router';
import { store } from '@/Vuex/store';

import AuthRoutes from './Auth';
import PagesRoutes from './Pages';

Vue.use(Router);

let allRoutes = [];

allRoutes = allRoutes.concat(
    AuthRoutes,
    PagesRoutes
);

const routes = allRoutes;

const router = new Router({
  routes
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

  next();
});
router.afterEach(route => {
  document.title = route.meta.title;
});

export default router;
