import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: () => import('../views/index.vue'), },
    { path: '/login', component: () => import('../views/login.vue'), meta: { hide: true } },
    { path: '/register', component: () => import('../views/register.vue'), meta: { hide: true } },
    { path: '/trade/sell', component: () => import('../views/tradesell.vue'), },
    { path: '/trade/buy', component: () => import('../views/tradebuy.vue'), },

    { path: '/reset-password', component: () => import('../views/reset-password.vue'), meta: { hide: true } },
    { path: '/binance/transfer', component: () => import('../views/binance-transfer.vue'), },
    { path: '/account/main', component: () => import('../views/account-main.vue'), },
    { path: '/deposit/crypto', component: () => import('../views/deposit-crypto.vue'), },
    { path: '/transfer/crypto', component: () => import('../views/transfer-crypto.vue'), },
  ]
});

export default router
