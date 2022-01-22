import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: () => import('../views/index.vue'), },
    { path: '/login', component: () => import('../views/login.vue'), },
    { path: '/register', component: () => import('../views/register.vue'), },
  ]
});

export default router
