// stores/products.js
import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [
      {
        id: 1,
        title: 'Bamboo Chair',
        formats: '.obj .png .jpg',
        image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600',
        off: '30% off',
        rate: 'Free'
      },
      {
        id: 2,
        title: 'Modern Sofa',
        formats: '.obj .png .jpg',
        image: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=600',
        off: '20% off',
        material:"wood",
        color:"gary"
      },
      {
        id: 3,
        title: 'Wooden Table',
        formats: '.obj .png .jpg',
        image: 'https://images.pexels.com/photos/2995012/pexels-photo-2995012.jpeg?auto=compress&cs=tinysrgb&w=600',
        off: '15% off',
        rate: '$50.00'
      },
      
      {
        id: 4,
        title: 'Caopm',
        formats: '.obj .png .jpg',
        image: 'https://images.pexels.com/photos/945688/pexels-photo-945688.jpeg?auto=compress&cs=tinysrgb&w=600',
        off: '15% off',
        rate: '$50.00'
      },
      
      {
        id: 5,
        title: 'Wooden Table',
        formats: '.obj .png .jpg',
        image: 'https://images.pexels.com/photos/356048/pexels-photo-356048.jpeg?auto=compress&cs=tinysrgb&w=600',
        off: '15% off',
        rate: '$50.00'
      },
      
      {
        id: 6,
        title: 'Wooden Table',
        formats: '.obj .png .jpg',
        image: 'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=600',
        rate: "Free"
      },
      
      {
        id: 7,
        title: 'Table Lighting',
        formats: '.obj .png .jpg',
        image: 'https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&w=600',
        off: '15% off',
        rate: '$22.00'
      },
      
      {
        id: 8,
        title: 'Kitchen carft',
        formats: '.obj .png .jpg',
        image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600',
       
        rate: '$28.00'
      },
      
      {
        id: 9,
        title: 'markof',
        formats: '.obj .png .jpg',
        image: 'https://images.pexels.com/photos/1556704/pexels-photo-1556704.jpeg?auto=compress&cs=tinysrgb&w=600',
     
        rate: '$50.00'
      },
      
      {
        id: 10,
        title: 'lamp',
        formats: '.obj .png .jpg',
        image: 'https://images.pexels.com/photos/2233416/pexels-photo-2233416.jpeg?auto=compress&cs=tinysrgb&w=600',
        off: '15% off',
        rate: '$50.00'
      },

      {
        id: 11,
        title: 'lamp',
        formats: '.obj .png .jpg',
        image: 'https://images.pexels.com/photos/813691/pexels-photo-813691.jpeg?auto=compress&cs=tinysrgb&w=600',
       
        rate: '$50.00'
      },

      {
        id: 12,
        title: 'lamp',
        formats: '.obj .png .jpg',
        image: 'https://images.pexels.com/photos/1629998/pexels-photo-1629998.jpeg?auto=compress&cs=tinysrgb&w=600',
        
        rate: 'Free'
      },


    ],
  }),
  getters: {
    getAllProducts: (state) => state.products,
  }
});
