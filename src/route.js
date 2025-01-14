// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/HomePage.vue'; 
import ImageDetail from './components/ImageDetail.vue'; 
import FlateImage from './components/FlateImage.vue';
import SignInPage from './components/SignInPage.vue';

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
        path: '/image',
        name: 'image',
        component: FlateImage,
      },
      {
        path: '/Signin',
        name: 'SignIn',
        component: SignInPage,
      },

   
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
