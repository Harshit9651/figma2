// stores/products.js
import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [
      {
        id: 1,
        title: 'Bamboo Chair',
        formats: '.obj .png .jpg',
        image: 'https://images.pexels.com/photos/28967957/pexels-photo-28967957/free-photo-of-european-robin-perched-on-a-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=600',
        off: '30% off',
        rate: '$7.00'
      },
      {
        id: 2,
        title: 'Modern Sofa',
        formats: '.obj .png .jpg',
        image: 'https://images.pexels.com/photos/28967957/pexels-photo-28967957/free-photo-of-european-robin-perched-on-a-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=600',
        // No off or rate for this product
      },
      {
        id: 3,
        title: 'Wooden Table',
        formats: '.obj .png .jpg',
        image: 'https://images.pexels.com/photos/28967957/pexels-photo-28967957/free-photo-of-european-robin-perched-on-a-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=600',
        off: '15% off',
        rate: '$50.00'
      },
      // Add more products as needed
    ],
  }),
  getters: {
    getAllProducts: (state) => state.products,
  }
});
