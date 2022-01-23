import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: () => import('../views/index.vue'), },
    { path: '/login', component: () => import('../views/login.vue'),meta:{hide:true} },
    { path: '/register', component: () => import('../views/register.vue'), meta:{hide:true}},
    { path: '/trade/sell', component: () => import('../views/tradesell.vue'), },
    { path: '/trade/buy', component: () => import('../views/tradebuy.vue'), },
  ]
});

export default router
