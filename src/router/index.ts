import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { Home } from '@/views';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/definition',
    name: 'Definition',
    component: () => import('../views/definition/Definition.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
