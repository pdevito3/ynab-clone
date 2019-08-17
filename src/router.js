import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home/Home.vue';
import Reports from './views/Reports.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/reports',
      name: 'reports',
      component: Reports,
    },
  ],
});
