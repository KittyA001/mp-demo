import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../views/home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('../views/layout.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: home
      },
      {
        path: '/shopping',
        name: 'shopping',
        component: () => import('../views/shopping.vue')
      },
      {
        path: '/activity',
        name: 'activity',
        component: () => import('../views/activity.vue')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('../views/my.vue')
      }
    ]
  },
  {
    path: '/info',
    name: 'info',
    component: () => import('../views/info.vue'),
    children: [
      {
        path: '/',
        name: 'personalCenter',
        component: () => import('../views/personalCenter.vue')
      },
      {
        path: '/profit',
        name: 'profit',
        component: () => import('../views/profit.vue')
      },
      {
        path: '/withdrawal',
        name: 'Withdrawal',
        component: () => import('../views/withdrawal.vue')
      },
      {
        path: '/coupon',
        name: 'coupon',
        component: () => import('../views/coupon.vue')
      },
      {
        path: '/myCoupons',
        name: 'myCoupons',
        component: () => import('../views/myCoupons.vue')
      },
      {
        path: '/classify',
        name: 'classify',
        component: () => import('../views/classify.vue')
      },
      {
        path: '/details/:id',
        name: 'details',
        component: () => import('../views/details.vue')
      }
    ]
  },
  {
    path: '/learn',
    name: 'learn',
    component: () => import('../views/learn.vue')
  },
  {
    path: '/eBook',
    name: 'eBook',
    component: () => import('../views/ebook.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
