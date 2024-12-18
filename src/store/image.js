// stores/products.js
import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [
      {
        id: 1,
        title: "Bamboo Chair",
        formats: ".obj .png .jpg",
        images: [
          "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/1350790/pexels-photo-1350790.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/1350791/pexels-photo-1350791.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/1350792/pexels-photo-1350792.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        off: "30% off",
        rate: "Free",
        color: "Brown",
        material: "Bamboo",
        fileType: ".obj",
        texture: "Wood",
        type: "Classic",
      },
      {
        id: 2,
        title: "Modern Sofa",
        formats: ".obj .png .jpg",
        images: [
          "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/276584/pexels-photo-276584.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/276585/pexels-photo-276585.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/276586/pexels-photo-276586.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        off: "20% off",
        rate: "$150.00",
        color: "Gray",
        material: "Wood",
        fileType: ".obj",
        texture: "Fabric",
        type: "Modern",
      },
      {
        id: 3,
        title: "Wooden Table",
        formats: ".obj .png .jpg",
        images: [
          "https://images.pexels.com/photos/2995012/pexels-photo-2995012.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/2995013/pexels-photo-2995013.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/2995014/pexels-photo-2995014.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/2995015/pexels-photo-2995015.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        off: "15% off",
        rate: "$50.00",
        color: "Brown",
        material: "Wood",
        fileType: ".obj",
        texture: "Wood",
        type: "Classic",
      },
      {
        id: 4,
        title: "Couch Chair",
        formats: ".obj .png .jpg",
        images: [
          "https://images.pexels.com/photos/945688/pexels-photo-945688.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/945689/pexels-photo-945689.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/945690/pexels-photo-945690.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/945691/pexels-photo-945691.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        off: "15% off",
        rate: "$50.00",
        color: "Black",
        material: "Leather",
        fileType: ".obj",
        texture: "Leather",
        type: "Modern",
      },
      {
        id: 5,
        title: "Wooden Dining Table",
        formats: ".obj .png .jpg",
        images: [
          "https://images.pexels.com/photos/356048/pexels-photo-356048.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/356049/pexels-photo-356049.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/356050/pexels-photo-356050.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/356051/pexels-photo-356051.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        off: "15% off",
        rate: "$120.00",
        color: "Brown",
        material: "Wood",
        fileType: ".obj",
        texture: "Wood",
        type: "Classic",
      },
      {
        id: 6,
        title: "Coffee Table",
        formats: ".obj .png .jpg",
        images: [
          "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/534152/pexels-photo-534152.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/534153/pexels-photo-534153.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/534154/pexels-photo-534154.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        rate: "Free",
        color: "White",
        material: "Plastic",
        fileType: ".obj",
        texture: "Plastic",
        type: "Modern",
      },
      {
        id: 7,
        title: "Table Lighting",
        formats: ".obj .png .jpg",
        images: [
          "https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/1668861/pexels-photo-1668861.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/1668862/pexels-photo-1668862.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/1668863/pexels-photo-1668863.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        off: "15% off",
        rate: "$22.00",
        color: "Yellow",
        material: "Metal",
        fileType: ".obj",
        texture: "Metal",
        type: "Modern",
      },
      {
        id: 8,
        title: "Kitchen Craft",
        formats: ".obj .png .jpg",
        images: [
          "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/2724750/pexels-photo-2724750.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/2724751/pexels-photo-2724751.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/2724752/pexels-photo-2724752.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        rate: "$28.00",
        color: "Silver",
        material: "Stainless Steel",
        fileType: ".obj",
        texture: "Metal",
        type: "Modern",
      },
      {
        id: 9,
        title: "Markof Chair",
        formats: ".obj .png .jpg",
        images: [
          "https://images.pexels.com/photos/1556704/pexels-photo-1556704.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/1556705/pexels-photo-1556705.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/1556706/pexels-photo-1556706.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        rate: "$50.00",
        color: "Gray",
        material: "Fabric",
        fileType: ".obj",
        texture: "Fabric",
        type: "Modern",
      },
      {
        id: 10,
        title: "Classic Lamp",
        formats: ".obj .png .jpg",
        images: [
          "https://images.pexels.com/photos/2233416/pexels-photo-2233416.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/2233417/pexels-photo-2233417.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/2233418/pexels-photo-2233418.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/2233419/pexels-photo-2233419.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        off: "15% off",
        rate: "$50.00",
        color: "Black",
        material: "Metal",
        fileType: ".obj",
        texture: "Metal",
        type: "Classic",
      },
      {
        id: 11,
        title: "Modern Lamp",
        formats: ".obj .png .jpg",
        images: [
          "https://images.pexels.com/photos/813691/pexels-photo-813691.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/813692/pexels-photo-813692.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/813693/pexels-photo-813693.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/813694/pexels-photo-813694.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        rate: "$50.00",
        color: "White",
        material: "Plastic",
        fileType: ".obj",
        texture: "Plastic",
        type: "Modern",
      },
      {
        id: 12,
        title: "Stylish Lamp",
        formats: ".obj .png .jpg",
        images: [
          "https://images.pexels.com/photos/1629998/pexels-photo-1629998.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/1629999/pexels-photo-1629999.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/1629990/pexels-photo-1629990.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/1629991/pexels-photo-1629991.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        rate: "Free",
        color: "Silver",
        material: "Metal",
        fileType: ".obj",
        texture: "Metal",
        type: "Modern",
      },
      {
        id: 13,
        title: "Retro Armchair",
        formats: ".obj .png .jpg",
        images: [
          "https://images.pexels.com/photos/2462080/pexels-photo-2462080.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/2462081/pexels-photo-2462081.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/2462082/pexels-photo-2462082.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/2462083/pexels-photo-2462083.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        rate: "$75.00",
        color: "Red",
        material: "Fabric",
        fileType: ".obj",
        texture: "Fabric",
        type: "Vintage",
      },
      {
        id: 14,
        title: "Industrial Desk",
        formats: ".obj .png .jpg",
        images: [
          "https://images.pexels.com/photos/2765175/pexels-photo-2765175.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/2765176/pexels-photo-2765176.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/2765177/pexels-photo-2765177.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/2765178/pexels-photo-2765178.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        rate: "$200.00",
        color: "Brown",
        material: "Wood",
        fileType: ".obj",
        texture: "Wood",
        type: "Industrial",
      },
      {
        id: 15,
        title: "Minimalist Shelf",
        formats: ".obj .png .jpg",
        images: [
          "https://images.pexels.com/photos/4508149/pexels-photo-4508149.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/4508150/pexels-photo-4508150.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/4508151/pexels-photo-4508151.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/4508152/pexels-photo-4508152.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        rate: "$80.00",
        color: "White",
        material: "Wood",
        fileType: ".obj",
        texture: "Wood",
        type: "Minimalist",
      },
    ],
  }),
  getters: {
    getAllProducts: (state) => state.products,
  },
});
