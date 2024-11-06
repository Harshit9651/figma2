// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/HomePage.vue'; 
import ImageDetail from './components/ImageDetail.vue'; 
import GridImage from './components/GridImage.vue';

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
      {
        path: '/grid-image', 
        name: 'grid-image-crop',
        component: GridImage,
        
      },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
