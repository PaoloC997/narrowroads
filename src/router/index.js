import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home/Home.vue';
import Projects from '../components/Projects/Projects.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
