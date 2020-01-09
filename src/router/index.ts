import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/user/home',
  },
  {
    path: '/user/home',
    alias: '/user',
    component: () => import(/* webpackChunkName:'user-home' */ '../views/User/Home.vue'),
  },
  {
    path: '/user/login',
    component: () => import('../views/User/Login.vue'),
  },
  {
    path: '/user/register',
    component: () => import('../views/User/Register.vue'),
  },
  {
    path: '/merchant/home',
    alias: '/merchant',
    component: () => import('../views/Merchant/Home.vue'),
  },
  {
    path: '/merchant/order',
    component: () => import('../views/Merchant/Order.vue'),
  },
  {
    path: '/merchant/mailbox',
    component: () => import('../views/Merchant/Mailbox.vue'),
  },
  {
    path: '/admin',
    component: () => import(/* webpackChunkName:'admin-home' */ '../views/Admin/Home.vue'),
  },
  {
    path: '/admin/login',
    component: () => import('../views/Admin/Login.vue'),
  },
  {
    path: '/alert/no-permission-to-access',
    component: () => import('../views/Common/NoPermissionToAccessAlert.vue'),
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
