import Vue from 'vue';
import VueRouter from 'vue-router';
import CatalogView from '../views/CatalogView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'catalog',
    component: CatalogView,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
