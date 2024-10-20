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
        rate: 'Free',
        color: 'Brown',
        material: 'Bamboo',
        fileType: '.obj',
        texture: 'Wood',
        type: 'Classic'
      },
      {
        id: 2,
        title: 'Modern Sofa',
        formats: '.obj .png .jpg',
        image: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=600',
        off: '20% off',
        rate: '$150.00',
        color: 'Gray',
        material: 'Wood',
        fileType: '.obj',
        texture: 'Fabric',
        type: 'Modern'
      },
      {
        id: 3,
        title: 'Wooden Table',
        formats: '.obj .png .jpg',
        image: 'https://images.pexels.com/photos/2995012/pexels-photo-2995012.jpeg?auto=compress&cs=tinysrgb&w=600',
        off: '15% off',
        rate: '$50.00',
        color: 'Brown',
        material: 'Wood',
        fileType: '.obj',
        texture: 'Wood',
        type: 'Classic'
      },
      {
        id: 4,
        title: 'Caopm Chair',
        formats: '.obj .png .jpg',
        image: 'https://images.pexels.com/photos/945688/pexels-photo-945688.jpeg?auto=compress&cs=tinysrgb&w=600',
        off: '15% off',
        rate: '$50.00',
        color: 'Black',
        material: 'Leather',
        fileType: '.obj',
        texture: 'Leather',
        type: 'Modern'
      },
      {
        id: 5,
        title: 'Wooden Dining Table',
        formats: '.obj .png .jpg',
        image: 'https://images.pexels.com/photos/356048/pexels-photo-356048.jpeg?auto=compress&cs=tinysrgb&w=600',
        off: '15% off',
        rate: '$120.00',
        color: 'Brown',
        material: 'Wood',
        fileType: '.obj',
        texture: 'Wood',
        type: 'Classic'
      },
      {
        id: 6,
        title: 'Coffee Table',
        formats: '.obj .png .jpg',
        image: 'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=600',
        rate: 'Free',
        color: 'White',
        material: 'Plastic',
        fileType: '.obj',
        texture: 'Plastic',
        type: 'Modern'
      },
      {
        id: 7,
        title: 'Table Lighting',
        formats: '.obj .png .jpg',
        image: 'https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&w=600',
        off: '15% off',
        rate: '$22.00',
        color: 'Yellow',
        material: 'Metal',
        fileType: '.obj',
        texture: 'Metal',
        type: 'Modern'
      },
      {
        id: 8,
        title: 'Kitchen Craft',
        formats: '.obj .png .jpg',
        image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600',
        rate: '$28.00',
        color: 'Silver',
        material: 'Stainless Steel',
        fileType: '.obj',
        texture: 'Metal',
        type: 'Modern'
      },
      {
        id: 9,
        title: 'Markof Chair',
        formats: '.obj .png .jpg',
        image: 'https://images.pexels.com/photos/1556704/pexels-photo-1556704.jpeg?auto=compress&cs=tinysrgb&w=600',
        rate: '$50.00',
        color: 'Gray',
        material: 'Fabric',
        fileType: '.obj',
        texture: 'Fabric',
        type: 'Modern'
      },
      {
        id: 10,
        title: 'Classic Lamp',
        formats: '.obj .png .jpg',
        image: 'https://images.pexels.com/photos/2233416/pexels-photo-2233416.jpeg?auto=compress&cs=tinysrgb&w=600',
        off: '15% off',
        rate: '$50.00',
        color: 'Black',
        material: 'Metal',
        fileType: '.obj',
        texture: 'Metal',
        type: 'Classic'
      },
      {
        id: 11,
        title: 'Modern Lamp',
        formats: '.obj .png .jpg',
        image: 'https://images.pexels.com/photos/813691/pexels-photo-813691.jpeg?auto=compress&cs=tinysrgb&w=600',
        rate: '$50.00',
        color: 'White',
        material: 'Plastic',
        fileType: '.obj',
        texture: 'Plastic',
        type: 'Modern'
      },
      {
        id: 12,
        title: 'Stylish Lamp',
        formats: '.obj .png .jpg',
        image: 'https://images.pexels.com/photos/1629998/pexels-photo-1629998.jpeg?auto=compress&cs=tinysrgb&w=600',
        rate: 'Free',
        color: 'Silver',
        material: 'Metal',
        fileType: '.obj',
        texture: 'Metal',
        type: 'Modern'
      },
    ],
  }),
  getters: {
    getAllProducts: (state) => state.products,
  }
});
