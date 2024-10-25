// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/HomePage.vue'; 
import ImageDetail from './components/ImageDetail.vue'; // Adjust the path as needed

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/image-detail/:id', 
        name: 'imageDetail',
        component: ImageDetail,
        props: true,
      },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
